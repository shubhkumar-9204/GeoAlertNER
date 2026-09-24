"""
GeoAlertNER - Lightweight Vectorized Machine Learning Engine (Pure NumPy)
Robust Ensemble Decision Forests & Gradient Boosted Regression for Disaster Modeling.
Runs 100% natively without external C-extensions or binary dependencies.
"""

import json
import pickle
import numpy as np
from typing import List, Dict, Any, Tuple, Optional

class DecisionNode:
    def __init__(
        self,
        feature_idx: Optional[int] = None,
        threshold: Optional[float] = None,
        left: Optional["DecisionNode"] = None,
        right: Optional["DecisionNode"] = None,
        value: Optional[Any] = None,
        is_leaf: bool = False
    ):
        self.feature_idx = feature_idx
        self.threshold = threshold
        self.left = left
        self.right = right
        self.value = value
        self.is_leaf = is_leaf

class DecisionTree:
    def __init__(self, max_depth: int = 6, min_samples_split: int = 4, is_classifier: bool = False):
        self.max_depth = max_depth
        self.min_samples_split = min_samples_split
        self.is_classifier = is_classifier
        self.root: Optional[DecisionNode] = None

    def fit(self, X: np.ndarray, y: np.ndarray, depth: int = 0) -> DecisionNode:
        n_samples, n_features = X.shape
        
        # Base criteria
        if (depth >= self.max_depth or 
            n_samples < self.min_samples_split or 
            len(np.unique(y)) == 1):
            leaf_val = self._leaf_value(y)
            return DecisionNode(value=leaf_val, is_leaf=True)

        best_feat, best_thresh, best_gain = self._best_split(X, y, n_features)
        
        if best_gain <= 0.0 or best_feat is None:
            leaf_val = self._leaf_value(y)
            return DecisionNode(value=leaf_val, is_leaf=True)

        left_mask = X[:, best_feat] <= best_thresh
        right_mask = ~left_mask

        left_child = self.fit(X[left_mask], y[left_mask], depth + 1)
        right_child = self.fit(X[right_mask], y[right_mask], depth + 1)

        node = DecisionNode(
            feature_idx=best_feat,
            threshold=best_thresh,
            left=left_child,
            right=right_child,
            is_leaf=False
        )
        if depth == 0:
            self.root = node
        return node

    def _leaf_value(self, y: np.ndarray):
        if self.is_classifier:
            vals, counts = np.unique(y, return_counts=True)
            return vals[np.argmax(counts)]
        return float(np.mean(y))

    def _best_split(self, X: np.ndarray, y: np.ndarray, n_features: int) -> Tuple[Optional[int], Optional[float], float]:
        best_gain = -1.0
        best_feat = None
        best_thresh = None

        curr_impurity = self._impurity(y)

        # Random feature subsampling
        feat_indices = np.random.choice(n_features, size=max(1, int(np.sqrt(n_features) if self.is_classifier else n_features // 2 + 1)), replace=False)

        for feat in feat_indices:
            vals = np.unique(X[:, feat])
            if len(vals) <= 1:
                continue
            
            # Subsample candidate percentiles
            if len(vals) > 10:
                percentiles = np.percentile(vals, [15, 30, 45, 60, 75, 90])
            else:
                percentiles = (vals[:-1] + vals[1:]) / 2.0

            for thresh in percentiles:
                left_mask = X[:, feat] <= thresh
                right_mask = ~left_mask
                if np.sum(left_mask) == 0 or np.sum(right_mask) == 0:
                    continue

                gain = self._info_gain(y, curr_impurity, left_mask, right_mask)
                if gain > best_gain:
                    best_gain = gain
                    best_feat = feat
                    best_thresh = float(thresh)

        return best_feat, best_thresh, best_gain

    def _impurity(self, y: np.ndarray) -> float:
        if self.is_classifier:
            # Gini Impurity
            _, counts = np.unique(y, return_counts=True)
            probs = counts / len(y)
            return 1.0 - np.sum(probs ** 2)
        # Variance for regression
        return float(np.var(y)) if len(y) > 0 else 0.0

    def _info_gain(self, y: np.ndarray, curr_imp: float, left_mask: np.ndarray, right_mask: np.ndarray) -> float:
        n = len(y)
        n_l, n_r = np.sum(left_mask), np.sum(right_mask)
        imp_l = self._impurity(y[left_mask])
        imp_r = self._impurity(y[right_mask])
        return curr_imp - ((n_l / n) * imp_l + (n_r / n) * imp_r)

    def predict_one(self, sample: np.ndarray, node: Optional[DecisionNode] = None) -> Any:
        if node is None:
            node = self.root
        if node.is_leaf or node.feature_idx is None:
            return node.value
        if sample[node.feature_idx] <= node.threshold:
            return self.predict_one(sample, node.left)
        return self.predict_one(sample, node.right)

    def predict(self, X: np.ndarray) -> np.ndarray:
        return np.array([self.predict_one(x) for x in X])

class RandomForest:
    def __init__(self, n_estimators: int = 25, max_depth: int = 7, is_classifier: bool = False):
        self.n_estimators = n_estimators
        self.max_depth = max_depth
        self.is_classifier = is_classifier
        self.trees: List[DecisionTree] = []
        self.classes_: List[str] = []

    def fit(self, X: np.ndarray, y: np.ndarray):
        self.trees = []
        if self.is_classifier:
            self.classes_ = sorted(list(np.unique(y)))

        n_samples = len(X)
        for _ in range(self.n_estimators):
            # Bootstrap sample
            boot_indices = np.random.choice(n_samples, size=n_samples, replace=True)
            X_boot = X[boot_indices]
            y_boot = y[boot_indices]

            tree = DecisionTree(max_depth=self.max_depth, is_classifier=self.is_classifier)
            tree.fit(X_boot, y_boot)
            self.trees.append(tree)

    def predict(self, X: np.ndarray) -> np.ndarray:
        preds = np.array([tree.predict(X) for tree in self.trees])
        if self.is_classifier:
            # Majority voting
            maj_preds = []
            for col in range(preds.shape[1]):
                vals, counts = np.unique(preds[:, col], return_counts=True)
                maj_preds.append(vals[np.argmax(counts)])
            return np.array(maj_preds)
        # Average for regression
        return np.mean(preds, axis=0)

    def predict_proba(self, X: np.ndarray) -> np.ndarray:
        if not self.is_classifier:
            raise ValueError("predict_proba only available for classifiers.")
        preds = np.array([tree.predict(X) for tree in self.trees])
        probas = []
        for col in range(preds.shape[1]):
            tree_votes = preds[:, col]
            row_probs = []
            for cls in self.classes_:
                prob = np.mean(tree_votes == cls)
                row_probs.append(prob)
            probas.append(row_probs)
        return np.array(probas)

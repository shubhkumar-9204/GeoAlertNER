"""
GeoAlertNER Bundle Builder
Combines all frontend ES6 modules into a single vanilla JS bundle.
"""
import re

files_order = [
    ('i18n',        'frontend/i18n.js'),
    ('api',         'frontend/api.js'),
    ('offlineSync', 'frontend/offlineSync.js'),
    ('simulator',   'frontend/simulator.js'),
    ('geoMap',      'frontend/map.js'),
    ('app',         'frontend/app.js'),
]

def strip_imports(code):
    """Remove ES6 import statements"""
    return re.sub(r'^\s*import\s+[^\n]+;\s*$', '', code, flags=re.MULTILINE)

def strip_exports(code):
    """Remove ES6 export keywords"""
    code = re.sub(r'\bexport\s+default\s+', '', code)
    code = re.sub(r'\bexport\s+(const|let|var|class|function)\s+', r'\1 ', code)
    code = re.sub(r'\bexport\s*\{[^}]*\};\s*', '', code)
    return code

# Collect class definitions and instantiation lines separately
class_definitions = []
instantiation_lines = []

for export_name, filepath in files_order:
    with open(filepath, 'r', encoding='utf-8') as f:
        code = f.read()
    
    code = strip_imports(code)
    code = strip_exports(code)
    
    # Find all `const name = new ClassName(...)` module-level instantiations
    # These must be deferred to DOM ready
    inst_pattern = re.compile(
        r'^(const|let|var)\s+(' + export_name + r')\s*=\s*new\s+\w+\([^)]*\);\s*$',
        re.MULTILINE
    )
    
    # Also find the simple `window.app = new GeoAlertApp();` pattern
    win_pattern = re.compile(r'^window\.\w+\s*=\s*new\s+\w+\([^)]*\);\s*$', re.MULTILINE)
    
    # Collect and remove all instantiations
    for m in inst_pattern.finditer(code):
        instantiation_lines.append(m.group(0).strip())
    code = inst_pattern.sub('', code)
    
    for m in win_pattern.finditer(code):
        instantiation_lines.append(m.group(0).strip())
    code = win_pattern.sub('', code)
    
    # Remove startApp / DOMContentLoaded boilerplate already in app.js 
    code = re.sub(r'function startApp\(\)[^}]+\}', '', code, flags=re.DOTALL)
    code = re.sub(r'if\s*\(document\.readyState.*?startApp\(\);\s*\}', '', code, flags=re.DOTALL)
    
    class_definitions.append((filepath, code))

# Build the final bundle
bundle = '''/**
 * GeoAlertNER - Production Bundle (auto-generated)
 * GeoAlertNER - Disaster Early Warning System
 * DO NOT EDIT: Regenerate with build_bundle.py
 */
(function(window, document) {
  'use strict';

'''

# 1. Emit all class/constant definitions
for filepath, code in class_definitions:
    bundle += f'\n// ===== {filepath} =====\n'
    bundle += code.strip()
    bundle += '\n'

# 2. Wrap all instantiations + app bootstrap in DOMContentLoaded
bundle += '''

// ===== BOOTSTRAP =====
function _geoalert_init() {
  try {
'''
for line in instantiation_lines:
    bundle += f'    {line}\n'

bundle += '''
    // Expose to window for debugging
    if (typeof i18n !== "undefined")        window.i18n        = i18n;
    if (typeof api !== "undefined")         window.api         = api;
    if (typeof offlineSync !== "undefined") window.offlineSync = offlineSync;
    if (typeof simulator !== "undefined")   window.simulator   = simulator;
    if (typeof geoMap !== "undefined")      window.geoMap      = geoMap;

    // Start the application
    if (typeof GeoAlertApp !== "undefined") {
      window.app = new GeoAlertApp();
      window.app.registerServiceWorker();
      window.app.init();
    }
  } catch(e) {
    console.error("[GeoAlertNER] Bootstrap error:", e);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", _geoalert_init);
} else {
  _geoalert_init();
}

})(window, document);
'''

with open('frontend/bundle.js', 'w', encoding='utf-8') as f:
    f.write(bundle)

print(f"[OK] Generated frontend/bundle.js ({len(bundle)} bytes, {bundle.count(chr(10))} lines)")
print(f"     Deferred {len(instantiation_lines)} instantiations to DOM-ready.")
for line in instantiation_lines:
    print(f"   - {line[:80]}")

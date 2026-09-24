import re

with open('frontend/index.html', encoding='utf-8') as f:
    html = f.read()

ids_in_html = set(re.findall(r'id=["\']([^"\']+)["\']', html))
classes_in_html = set(re.findall(r'class=["\']([^"\']+)["\']', html))
all_classes = set()
for c in classes_in_html:
    all_classes.update(c.split())

js_files = ['frontend/app.js', 'frontend/map.js', 'frontend/simulator.js', 'frontend/offlineSync.js', 'frontend/i18n.js', 'frontend/api.js']

for js_path in js_files:
    with open(js_path, encoding='utf-8') as f:
        js = f.read()
    ids_in_js = re.findall(r'getElementById\(["\']([^"\']+)["\']\)', js)
    print(f'=== {js_path} ===')
    missing_count = 0
    for elem_id in set(ids_in_js):
        if elem_id not in ids_in_html:
            print(f'  [MISSING IN HTML] id="{elem_id}"')
            missing_count += 1
    if missing_count == 0:
        print('  [ALL MATCH] All getElementById references match elements in index.html!')

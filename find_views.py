import re
with open('frontend/index.html', encoding='utf-8') as f:
    content = f.read()
matches = list(re.finditer(r'id="view-[^"]+"', content))
for m in matches:
    line = content[:m.start()].count('\n') + 1
    print(f"Line {line}: {m.group()}")

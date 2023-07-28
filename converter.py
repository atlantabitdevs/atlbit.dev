import html2text
import os
import io
import re


CURRENT_PATH = os.path.abspath(".")
listing = os.listdir(CURRENT_PATH)

html_files = []
for item in listing:
    if not os.path.isfile(item) and '.html' not in item:
        continue
    html_files.append(item)

try:
    for html_file in html_files:
        html = io.open(html_file, "r").read()
        text = html2text.html2text(html)
        md_file = re.sub(r'\.html$', '.md', html_file)
        markdown = io.open(md_file, "w")
        markdown.writelines(text)

except Exception as e:
    print("\n==========================\n")
    print(html_file)
    print(html)
    print("Error", e)
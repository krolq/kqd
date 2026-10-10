import re

file_path = '/Users/tannb/Downloads/kq-design---desperte-sua-marca/src/components/BannerCanvas.tsx'
with open(file_path, 'r') as f:
    content = f.read()

content = re.sub(r"backgroundColor:\s*'#000000',", "", content)
content = content.replace('className={`relative w-full max-w-[1000px] mx-auto bg-black', 'className={`relative w-full max-w-[1000px] mx-auto')
content = content.replace('<div className="absolute inset-0 bg-black pointer-events-none" />', '')

with open(file_path, 'w') as f:
    f.write(content)

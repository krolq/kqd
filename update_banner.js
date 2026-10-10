const fs = require('fs');
const file = '/Users/tannb/Downloads/kq-design---desperte-sua-marca/src/components/BannerCanvas.tsx';
let content = fs.readFileSync(file, 'utf8');

// Remove background color from style
content = content.replace(/backgroundColor:\s*'#000000',/g, '');

// Remove bg-black from className
content = content.replace(/className={`relative w-full max-w-\[1000px\] mx-auto bg-black/g, 'className={`relative w-full max-w-[1000px] mx-auto');

// Remove solid black div
content = content.replace(/<div className="absolute inset-0 bg-black pointer-events-none" \/>/g, '');

// Remove overflow-hidden from BannerCanvas so it can just flow if needed, 
// actually maybe keep it if it's not affecting page scroll. 
// Wait, in App.tsx we have overflow-x-hidden, which is good.

fs.writeFileSync(file, content);

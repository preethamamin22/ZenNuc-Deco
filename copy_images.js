const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\preet\\.gemini\\antigravity-ide\\brain\\e16cbf35-7892-42aa-97ea-97fd216fe8ad';
const currentBrainDir = 'C:\\Users\\preet\\.gemini\\antigravity-ide\\brain\\a0037403-bb89-4f6b-b9e2-fbd134888315';
const dstDir = 'C:\\Users\\preet\\Desktop\\projects\\zenNuc';

const files = [
  {src: 'hero_molecular_1782141311989.png', dst: 'hero_molecular.png', dir: srcDir},
  {src: 'lab_environment_1782141324470.png', dst: 'lab_environment.png', dir: srcDir},
  {src: 'media__1782143917525.jpg', dst: 'zennuc_product.jpg', dir: srcDir},
  {src: 'hero_lab_modern_1782148471099.png', dst: 'hero_lab_modern.png', dir: srcDir},
  {src: 'hero_dna_clean_1782148482692.png', dst: 'hero_dna_clean.png', dir: srcDir},
  {src: 'media__1782229022357.jpg', dst: 'zennuc_product.png', dir: currentBrainDir}
];

files.forEach(f => {
  const srcPath = path.join(f.dir, f.src);
  const dstPath = path.join(dstDir, f.dst);
  try {
    fs.copyFileSync(srcPath, dstPath);
    console.log(`Copied ${f.src} to ${f.dst}`);
  } catch (e) {
    console.error(`Error copying ${f.src}: ${e.message}`);
  }
});

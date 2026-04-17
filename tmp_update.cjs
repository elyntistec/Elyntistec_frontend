const fs = require('fs');
const path = require('path');

const dir = 'd:\\Altitude01\\Domain02\\elyntistec-ai-core-main\\src\\components';
const files = [
  'UseCases.tsx',
  'Testimonials.tsx',
  'PricingSection.tsx',
  'HowItWorks.tsx',
  'FAQSection.tsx',
  'DashboardPreview.tsx',
  'CoreFeatures.tsx',
  'ContactSection.tsx',
  'BlogSection.tsx'
];

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if IsometricCubes is already imported
  if (!content.includes('IsometricCubes')) {
    // Add import after last import
    const lastImportIndex = content.lastIndexOf('import ');
    const endOfLastImport = content.indexOf('\n', lastImportIndex) + 1;
    content = content.slice(0, endOfLastImport) + 
              'import IsometricCubes from "./IsometricCubes";\n' + 
              content.slice(endOfLastImport);
  }

  // Check if IsometricCubes is already in the JSX
  if (!content.includes('<IsometricCubes />')) {
    // Insert after <section... >
    content = content.replace(/(<section[^>]*>)/, '$1\n      <IsometricCubes />');
  }

  // Ensure bg-[#ffffff] instead of bg-muted, bg-secondary, etc.
  content = content.replace(/bg-muted\/50/g, 'bg-[#ffffff]');
  content = content.replace(/bg-secondary\/20/g, 'bg-[#ffffff]');
  content = content.replace(/bg-background/g, 'bg-[#ffffff]');
  
  // ensure section has relative overflow-hidden
  if (!content.includes('overflow-hidden') && content.includes('<section')) {
    content = content.replace(/(<section[^>]*className="[^"]*)"/g, '$1 overflow-hidden"');
  }

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});

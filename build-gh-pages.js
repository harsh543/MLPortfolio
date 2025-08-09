import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Build the project
console.log('Building for GitHub Pages...');
execSync('npm run build', { stdio: 'inherit' });

// Fix asset paths in index.html for GitHub Pages
const indexPath = path.join(process.cwd(), 'dist/public/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Replace asset paths to include the repository name
// Only replace paths that start with / and are not already prefixed
html = html.replace(/src="\/assets\//g, 'src="/MLPortfolio/assets/');
html = html.replace(/href="\/assets\//g, 'href="/MLPortfolio/assets/');

// Fix other root paths that aren't external URLs or already fixed
html = html.replace(/href="\/(?!MLPortfolio|https?:\/\/)/g, 'href="/MLPortfolio/');
html = html.replace(/src="\/(?!MLPortfolio|https?:\/\/)/g, 'src="/MLPortfolio/');

fs.writeFileSync(indexPath, html);

// Also fix asset paths in the JavaScript bundle
const assetsDir = path.join(process.cwd(), 'dist/public/assets');
const jsFiles = fs.readdirSync(assetsDir).filter(file => file.endsWith('.js'));

jsFiles.forEach(jsFile => {
  const jsPath = path.join(assetsDir, jsFile);
  let jsContent = fs.readFileSync(jsPath, 'utf8');
  
  // Replace asset paths in JavaScript (for image imports)
  jsContent = jsContent.replace(/\/assets\//g, '/MLPortfolio/assets/');
  
  fs.writeFileSync(jsPath, jsContent);
  console.log(`Fixed asset paths in ${jsFile}`);
});

// Create 404.html for GitHub Pages SPA routing
const notFoundPath = path.join(process.cwd(), 'dist/public/404.html');
fs.writeFileSync(notFoundPath, html);

console.log('Fixed asset paths and created 404.html for GitHub Pages deployment');
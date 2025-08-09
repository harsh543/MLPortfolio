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
html = html.replace(/\/assets\//g, '/MLPortfolio/assets/');
html = html.replace(/href="\//g, 'href="/MLPortfolio/');
html = html.replace(/src="\//g, 'src="/MLPortfolio/');

// Don't double-replace already corrected paths
html = html.replace(/\/MLPortfolio\/MLPortfolio\//g, '/MLPortfolio/');

fs.writeFileSync(indexPath, html);
console.log('Fixed asset paths for GitHub Pages deployment');
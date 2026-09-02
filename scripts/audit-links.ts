import fs from 'fs';
import path from 'path';

interface BrokenLink {
  sourcePage: string;
  targetHref: string;
  reason: string;
}

const brokenLinks: BrokenLink[] = [];

function findHtmlFiles(dir: string, fileList: string[] = []): string[] {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findHtmlFiles(fullPath, fileList);
    } else if (file.endsWith('.html') && !file.includes('500')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function normalizeRouteToHtmlPath(appDir: string, route: string): string[] {
  const cleanRoute = route.split('?')[0].split('#')[0].replace(/\/$/, '');
  if (!cleanRoute || cleanRoute === '') {
    return [path.join(appDir, 'index.html')];
  }
  return [
    path.join(appDir, `${cleanRoute}.html`),
    path.join(appDir, cleanRoute, 'index.html'),
  ];
}

function checkPublicAsset(assetPath: string): boolean {
  const cleanAsset = assetPath.split('?')[0].split('#')[0].replace(/^\//, '');
  const publicFile = path.join(process.cwd(), 'public', cleanAsset);
  return fs.existsSync(publicFile);
}

function auditLinksInHtml(filePath: string, appDir: string, relativeName: string) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Collect all IDs on the current page for anchor verification
  const idMatches = content.match(/id="([^"]+)"/g) || [];
  const pageIds = new Set(idMatches.map((m) => m.replace(/^id="/, '').replace(/"$/, '')));

  // Extract only anchor tag href attributes (<a ... href="...">)
  const aTagMatches = content.match(/<a\b[^>]*\bhref="([^"]+)"/gi) || [];
  const hrefs = aTagMatches.map((tag) => {
    const match = tag.match(/href="([^"]+)"/i);
    return match ? match[1] : '';
  }).filter(Boolean);

  for (const href of hrefs) {
    // Skip external URLs, mailto, tel, javascript, internal _next bundles, and dev design system placeholders
    if (
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('javascript:') ||
      href.startsWith('/_next/') ||
      href === '#test-link'
    ) {
      continue;
    }

    // 1. In-page Hash Anchor (e.g. #main-content, #sec-architecture)
    if (href.startsWith('#')) {
      const anchor = href.slice(1);
      if (anchor && !pageIds.has(anchor)) {
        brokenLinks.push({
          sourcePage: relativeName,
          targetHref: href,
          reason: `Target in-page anchor ID #${anchor} not found in DOM`,
        });
      }
      continue;
    }

    // 2. Hash anchor on internal route (e.g. /work/distributed-task-orchestrator#sec-architecture)
    if (href.includes('#')) {
      const [routePart, hashPart] = href.split('#');
      const candidatePaths = normalizeRouteToHtmlPath(appDir, routePart);
      const matchedPath = candidatePaths.find((p) => fs.existsSync(p));
      if (!matchedPath) {
        if (!checkPublicAsset(routePart)) {
          brokenLinks.push({
            sourcePage: relativeName,
            targetHref: href,
            reason: `Target page ${routePart} does not exist`,
          });
        }
      } else if (hashPart) {
        const targetContent = fs.readFileSync(matchedPath, 'utf-8');
        if (!targetContent.includes(`id="${hashPart}"`)) {
          brokenLinks.push({
            sourcePage: relativeName,
            targetHref: href,
            reason: `Anchor #${hashPart} not found on target page ${routePart}`,
          });
        }
      }
      continue;
    }

    // 3. Internal route or asset link
    if (href.startsWith('/')) {
      const candidatePaths = normalizeRouteToHtmlPath(appDir, href);
      const pageExists = candidatePaths.some((p) => fs.existsSync(p));
      const assetExists = checkPublicAsset(href);

      if (!pageExists && !assetExists) {
        const isKnownSpecial =
          href === '/feed.xml' ||
          href === '/sitemap.xml' ||
          href === '/robots.txt' ||
          href === '/opengraph-image' ||
          href.startsWith('/api/');

        if (!isKnownSpecial) {
          brokenLinks.push({
            sourcePage: relativeName,
            targetHref: href,
            reason: `Target route or asset ${href} does not exist in build output`,
          });
        }
      }
    }
  }
}

async function runLinkAudit() {
  console.log('====================================================');
  console.log('  SIGNAL LEDGER: BROKEN-LINK & ANCHOR AUDIT         ');
  console.log('====================================================\n');

  const appDir = path.join(process.cwd(), '.next', 'server', 'app');
  if (!fs.existsSync(appDir)) {
    console.error('Error: .next build directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  const htmlFiles = findHtmlFiles(appDir);
  console.log(`Scanning links across ${htmlFiles.length} prerendered routes...\n`);

  for (const file of htmlFiles) {
    const relName = path.relative(appDir, file);
    auditLinksInHtml(file, appDir, relName);
  }

  console.log('----------------------------------------------------');
  console.log('  LINK AUDIT SUMMARY');
  console.log('----------------------------------------------------');

  if (brokenLinks.length === 0) {
    console.log('\n  ✅ 0 BROKEN LINKS FOUND! All internal routes, hashes, and assets are valid.\n');
    process.exit(0);
  } else {
    console.log(`\n  ❌ Found ${brokenLinks.length} broken links:\n`);
    for (const item of brokenLinks) {
      console.log(`  ❌ [${item.sourcePage}] -> "${item.targetHref}": ${item.reason}`);
    }
    console.log('\n');
    process.exit(1);
  }
}

runLinkAudit();

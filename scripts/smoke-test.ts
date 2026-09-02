import { getAllProjects, getProjectBySlug } from '../lib/content/projects.service';
import { getAllNotes, getNoteBySlug } from '../lib/content/notes.service';
import { getProfile } from '../lib/content/profile.service';
import { getAllCredentials } from '../lib/content/credentials.service';
import sitemap from '../app/sitemap';
import robots from '../app/robots';

async function runSmokeTests() {
  console.log('====================================================');
  console.log('  SIGNAL LEDGER: END-TO-END SMOKE TEST SUITE        ');
  console.log('====================================================\n');

  let passed = 0;
  let failed = 0;

  function assert(name: string, condition: boolean, message?: string) {
    if (condition) {
      console.log(`  ✓ [PASS] ${name}`);
      passed++;
    } else {
      console.error(`  ✗ [FAIL] ${name} ${message ? `— ${message}` : ''}`);
      failed++;
    }
  }

  // 1. Profile Data Smoke Test
  const profile = getProfile();
  assert('Profile loaded successfully', Boolean(profile && profile.fullName && profile.title));
  assert('Profile has valid contact email', Boolean(profile.contactEmail && profile.contactEmail.includes('@')));
  assert('Profile has social links', Boolean(profile.socialLinks && profile.socialLinks.length > 0));

  // 2. Projects & Case Studies Smoke Test
  const projects = getAllProjects();
  assert('Projects catalogue loaded', projects.length >= 4, `Found ${projects.length} projects`);
  for (const p of projects) {
    const fetched = getProjectBySlug(p.slug);
    assert(`Case study [${p.slug}] resolves by slug`, Boolean(fetched && fetched.title === p.title));
    assert(`Case study [${p.slug}] has problem & architecture`, Boolean(p.problem && p.architecture));
    assert(`Case study [${p.slug}] has verifiable evidence`, Boolean(p.evidence && p.evidence.length > 0));
  }

  // 3. Technical Notes Smoke Test
  const notes = getAllNotes();
  assert('Technical field notes loaded', notes.length >= 4, `Found ${notes.length} notes`);
  for (const n of notes) {
    const fetched = getNoteBySlug(n.slug);
    assert(`Note [${n.slug}] resolves by slug`, Boolean(fetched && fetched.title === n.title));
    assert(`Note [${n.slug}] has content markdown`, Boolean(n.content && n.content.length > 50));
  }

  // 4. Credentials Smoke Test
  const credentials = getAllCredentials();
  assert('Credentials archive loaded', credentials.length >= 5, `Found ${credentials.length} credentials`);

  // 5. Dynamic Sitemap Smoke Test
  const sitemapItems = sitemap();
  assert('Dynamic XML Sitemap generated', Array.isArray(sitemapItems) && sitemapItems.length >= 10);
  assert('Sitemap contains root URL', sitemapItems.some((item) => item.url === 'https://signal-ledger.dev'));
  assert('Sitemap contains /work', sitemapItems.some((item) => item.url === 'https://signal-ledger.dev/work'));

  // 6. Robots Configuration Smoke Test
  const robotsConfig = robots();
  assert('Robots.txt config generated', Boolean(robotsConfig.sitemap && robotsConfig.host));

  console.log('\n----------------------------------------------------');
  console.log(`  RESULTS: ${passed} passed, ${failed} failed`);
  console.log('----------------------------------------------------');

  if (failed > 0) {
    console.error('\n  ❌ Smoke tests failed!\n');
    process.exit(1);
  } else {
    console.log('\n  ✅ All smoke tests passed successfully!\n');
    process.exit(0);
  }
}

runSmokeTests();

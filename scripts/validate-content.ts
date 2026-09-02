import { validateAllContent } from '../lib/content/validator';

console.log('🔍 Running Portfolio Content Architecture & Integrity Validation...\n');

const report = validateAllContent();

console.log('--- CONTENT STATISTICS ---');
console.log(`  • Flagship/Catalog Projects: ${report.stats.projectsCount}`);
console.log(`  • Technical Notes / Field Logs: ${report.stats.notesCount}`);
console.log(`  • Capability Skills Mapped: ${report.stats.skillsCount}`);
console.log(`  • Credentials & Certifications: ${report.stats.credentialsCount}`);
console.log(`  • Awards & Honors: ${report.stats.awardsCount}`);
console.log(`  • Hackathon Records: ${report.stats.hackathonsCount}`);
console.log(`  • Experience Milestones: ${report.stats.experienceCount}`);
console.log(`  • Education Records: ${report.stats.educationCount}`);
console.log('---------------------------\n');

if (report.warnings.length > 0) {
  console.log(`⚠️  ${report.warnings.length} Content Warning(s):`);
  report.warnings.forEach((w, idx) => console.log(`   [${idx + 1}] ${w}`));
  console.log('');
}

if (!report.isValid) {
  console.error(`❌ Validation Failed with ${report.errors.length} Critical Error(s):`);
  report.errors.forEach((e, idx) => console.error(`   [${idx + 1}] ${e}`));
  process.exit(1);
} else {
  console.log('✅ All content models, slugs, schemas, and referential links passed validation!\n');
}

import { CredentialItem } from './types';
import { credentialsData } from './credentials.data';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CERTIFICATES & CREDENTIALS DATA DIRECTORY
 * ─────────────────────────────────────────────────────────────────────────────
 * 
 * Centralized data repository for all professional certificates, course distinctions,
 * and verified digital credentials.
 * 
 * 📌 HOW TO ADD A NEW CERTIFICATE MANUALLY:
 * 1. Place your certificate file:
 *    - PDF: Put in `public/documents/certificates/Your-Certificate-Name.pdf`
 *    - Image: Put in `public/images/certificates/Your-Certificate-Name.jpg` (or .png)
 * 
 * 2. Add a new object to this array with the following fields:
 *    {
 *      id: 'cert-unique-id',                   // Unique identifier string (lowercase-hyphenated)
 *      title: 'Course or Certification Title', // Full official certification title
 *      issuer: 'Issuing Organization',         // e.g. 'AWS', 'Google', 'IBM', 'Microsoft'
 *      issueDate: '2025',                      // Year or formatted date (e.g. 'Oct 2025')
 *      category: 'Software Engineering',       // 'Software Engineering' | 'Data & AI' | 'Security & Networking' | 'Cloud & DevOps'
 *      group: 'certification',                 // 'certification' | 'academic' | 'award'
 *      summary: 'Short overview...',           // (Optional) 1-2 sentence description of what you learned
 *      previewDoc: {                           // (Optional) Document preview for modal & download
 *        src: '/documents/certificates/File.pdf',
 *        type: 'pdf',                          // 'pdf' or 'image'
 *        alt: 'Certificate Title'
 *      },
 *      verificationUrl: 'https://...',         // (Optional) Direct link to Credly, Coursera verify, or issuer portal
 *      credentialId: 'ABC-123-VERIFIED',       // (Optional) Serial number or license key
 *      skillsDemonstrated: ['Skill 1', 'Skill 2'], // (Optional) Highlighted technical skills
 *      featured: true,                         // boolean (places at top of grid)
 *    }
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type CertificateItem = CredentialItem;

export const certificatesData: CertificateItem[] = credentialsData;

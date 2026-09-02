import { ImageResponse } from 'next/og';
import { getProfile } from '@/lib/content/profile.service';

export const runtime = 'nodejs';
export const alt = 'Signal Ledger — Personal Engineering Portfolio & Technical Systems';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  const profile = getProfile();
  const rawFullName = profile.fullName.replace(/\[|\]/g, '');
  const rawTitle = profile.title.replace(/\[|\]/g, '');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#F2EFE8',
          padding: '70px 80px',
          fontFamily: 'monospace',
          border: '14px solid #171A1D',
        }}
      >
        {/* Top Header Tag */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '2px solid #8C949C',
            paddingBottom: '24px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                backgroundColor: '#171A1D',
                color: '#F2EFE8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                fontWeight: 'bold',
              }}
            >
              SL
            </div>
            <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#171A1D', letterSpacing: '2px', display: 'flex' }}>
              SIGNAL LEDGER &bull; VERIFIED ENGINEERING SPECIMEN
            </span>
          </div>

          <div
            style={{
              backgroundColor: '#2F5BFF',
              color: '#FFFFFF',
              padding: '6px 16px',
              fontSize: '16px',
              fontWeight: 'bold',
              letterSpacing: '1px',
              display: 'flex',
            }}
          >
            WCAG 2.2 AA &bull; EVIDENCE-FIRST
          </div>
        </div>

        {/* Central Identity & Thesis Statement */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span style={{ fontSize: '22px', color: '#2F5BFF', fontWeight: 'bold', letterSpacing: '1px', display: 'flex' }}>
            {rawTitle.toUpperCase()}
          </span>
          <h1
            style={{
              fontSize: '52px',
              color: '#171A1D',
              margin: '0',
              fontWeight: 'bold',
              lineHeight: 1.15,
              display: 'flex',
            }}
          >
            {rawFullName}
          </h1>
          <p
            style={{
              fontSize: '24px',
              color: '#4A525A',
              margin: '0',
              lineHeight: 1.4,
              maxWidth: '960px',
              display: 'flex',
            }}
          >
            Production Systems &bull; Deterministic Concurrency &bull; Verifiable Technical Telemetry
          </p>
        </div>

        {/* Bottom Metrics Bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '2px solid #8C949C',
            paddingTop: '24px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', gap: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '13px', color: '#767F88', display: 'flex' }}>AVAILABILITY</span>
              <strong style={{ fontSize: '18px', color: '#171A1D', display: 'flex' }}>{profile.availability.status}</strong>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '13px', color: '#767F88', display: 'flex' }}>LOCATION</span>
              <strong style={{ fontSize: '18px', color: '#171A1D', display: 'flex' }}>{profile.location.city}, {profile.location.country}</strong>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '13px', color: '#767F88', display: 'flex' }}>SPECIFICATION</span>
              <strong style={{ fontSize: '18px', color: '#2F5BFF', display: 'flex' }}>Next.js 14 SSG &bull; TypeScript</strong>
            </div>
          </div>

          <span style={{ fontSize: '18px', color: '#171A1D', fontWeight: 'bold', display: 'flex' }}>
            https://signal-ledger.dev
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

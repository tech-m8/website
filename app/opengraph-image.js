import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

export const alt = 'TechM8 — Transform Your Ideas Into Digital Products';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '90px',
          background:
            'linear-gradient(135deg, #0f172a 0%, #2e1065 55%, #0f172a 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
            fontSize: 34,
            color: '#a78bfa',
            fontWeight: 600,
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 44,
              height: 44,
              borderRadius: 12,
              background: '#7c3aed',
            }}
          />
          TechM8
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 104,
            fontWeight: 800,
            letterSpacing: '-3px',
            marginTop: 24,
            lineHeight: 1.05,
          }}
        >
          <div style={{ display: 'flex' }}>Transform Your Ideas</div>
          <div style={{ display: 'flex' }}>Into Digital Products</div>
        </div>
        <div style={{ fontSize: 36, color: '#94a3b8', marginTop: 48 }}>
          Custom software · Job Hunter · DroidM8 · Square Frame
        </div>
        <div style={{ fontSize: 30, color: '#cbd5e1', marginTop: 28 }}>
          tech-m8.solutions
        </div>
      </div>
    ),
    { ...size }
  );
}

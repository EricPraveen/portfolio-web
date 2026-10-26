import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#08080A',
          border: '2px solid #D4FF00',
          borderRadius: '7px',
          color: '#D4FF00',
          fontWeight: 900,
          fontSize: '15px',
          fontFamily: 'monospace',
          letterSpacing: '-0.5px',
          position: 'relative',
        }}
      >
        EP
        <div
          style={{
            position: 'absolute',
            top: '3px',
            right: '3px',
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            backgroundColor: '#FF2A85',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}

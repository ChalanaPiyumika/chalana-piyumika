import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #020617 0%, #1e1b4b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          fontWeight: 900,
          fontFamily: 'monospace',
          fontSize: 16,
          letterSpacing: '-1px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '2px' }}>
          <span style={{ color: '#8b5cf6' }}>&lt;</span>
          <span style={{ color: '#ffffff' }}>C</span>
          <span style={{ color: '#8b5cf6' }}>/&gt;</span>
        </div>
      </div>
    ),
    { ...size }
  )
}

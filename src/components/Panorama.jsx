import React, { useState } from 'react'

export default function Panorama() {
  const [open, setOpen] = useState(false)

  return (
    <section style={{ background: '#111', padding: 0 }}>
      {/* Header row */}
      <div style={{
        maxWidth: 'var(--max)', margin: '0 auto',
        padding: 'clamp(1.5rem,4vw,2.5rem) var(--pad)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        <div>
          <p style={{
            fontSize: '0.63rem', fontWeight: 500, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: '#6B9E74', marginBottom: '0.4rem',
            display: 'flex', alignItems: 'center', gap: '0.5rem',
          }}>
            <span style={{ display: 'inline-block', width: 18, height: 1, background: '#6B9E74' }} />
            Virtual Tour
          </p>
          <h2 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 400,
            color: '#fff', lineHeight: 1.2,
          }}>
            360° Panorama Tour
          </h2>
        </div>
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: open ? 'rgba(255,255,255,0.1)' : 'rgba(107,158,116,0.9)',
            border: '1.5px solid rgba(255,255,255,0.2)',
            color: '#fff', padding: '0.75rem 1.5rem',
            fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.1em',
            textTransform: 'uppercase', cursor: 'pointer',
            borderRadius: 4, transition: 'all 0.2s',
          }}
        >
          {open ? 'Close Tour' : 'Launch Tour'}
        </button>
      </div>

      {/* Tour iframe */}
      {open && (
        <div style={{ width: '100%', height: 'clamp(380px, 60vh, 640px)', position: 'relative' }}>
          <iframe
            src="panorama/index.html"
            title="360 Panorama Tour"
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            allowFullScreen
          />
        </div>
      )}

      {/* Preview thumbnail when closed */}
      {!open && (
        <div
          onClick={() => setOpen(true)}
          style={{
            width: '100%', height: 'clamp(220px, 35vw, 400px)',
            cursor: 'pointer', position: 'relative', overflow: 'hidden',
          }}
        >
          <img
            src="panorama/tiles/0-pxl_20260426_205839687photosphere/preview.jpg"
            alt="360 panorama preview"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.7)' }}
          />
          {/* 360 play button overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '1rem',
          }}>
            <div style={{
              width: 72, height: 72, borderRadius: '50%',
              background: 'rgba(255,255,255,0.18)',
              backdropFilter: 'blur(6px)',
              border: '2px solid rgba(255,255,255,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <span style={{
              color: '#fff', fontSize: '0.8rem', fontWeight: 500,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              textShadow: '0 1px 4px rgba(0,0,0,0.5)',
            }}>
              Click to explore in 360°
            </span>
          </div>
        </div>
      )}
    </section>
  )
}

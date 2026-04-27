import React from 'react'
import { listing } from '../config'
import SectionHeader from './SectionHeader'

const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(listing.address + ', ' + listing.city)}`

export default function Location() {
  return (
    <section style={{
      background: 'var(--dark)',
      padding: 'clamp(3.5rem,7vw,6rem) var(--pad)',
    }}>
      <div style={{ maxWidth: 'var(--max)', margin: '0 auto' }}>
        <SectionHeader
          eyebrow="Location"
          title={<>{listing.address},<br /><em>{listing.city}</em></>}
          light
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.6fr',
          gap: 'clamp(2rem, 4vw, 4rem)',
          alignItems: 'start',
        }}
        className="location-grid"
        >
          {/* Nearby tags */}
          <div>
            <p style={{
              fontSize: '0.88rem',
              color: 'var(--dark-muted)',
              lineHeight: 1.8,
              marginBottom: '1.75rem',
            }}>
              A quiet, residential street in a well-established neighbourhood — close to what matters without the noise.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {listing.nearby.map((item, i) => (
                <li key={i} style={{
                  fontSize: '0.8rem',
                  fontWeight: 400,
                  letterSpacing: '0.06em',
                  color: 'rgba(255,255,255,0.55)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                }}>
                  <span style={{ width: 14, height: 1, background: 'var(--accent)', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Map embed / link */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'block',
              background: '#1a1a1a',
              border: '1px solid rgba(255,255,255,0.08)',
              height: 300,
              textDecoration: 'none',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <iframe
              title="Map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(listing.address + ', ' + listing.city)}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', filter: 'grayscale(1) invert(0.9) contrast(0.85)' }}
              loading="lazy"
              allowFullScreen
            />
            <div style={{
              position: 'absolute',
              bottom: '1rem', right: '1rem',
              background: 'var(--dark)',
              color: 'var(--accent)',
              fontSize: '0.65rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              padding: '0.45rem 0.9rem',
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
              Open in Maps
            </div>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .location-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

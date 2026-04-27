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
          title={<>{listing.address}, {listing.city}</>}
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
        @media {
          .location-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

import React from 'react'
import { listing } from '../config'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section style={{ padding: 'clamp(3.5rem,7vw,6rem) var(--pad)' }}>
      <div style={{ maxWidth: 'var(--max)', margin: '0 auto' }}>
        <SectionHeader eyebrow="About" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.35fr 1fr',
          gap: 'clamp(2.5rem, 5vw, 5rem)',
          alignItems: 'start',
        }}
        className="about-grid"
        >
          {/* Description */}
          <div>
            {listing.description.map((p, i) => (
              <p key={i} style={{
                fontSize: '1.02rem',
                lineHeight: 1.85,
                color: 'var(--text-muted)',
                marginBottom: '1.2rem',
              }}>
                {p}
              </p>
            ))}
          </div>

          {/* Details sidebar */}
          <div style={{
            background: 'var(--accent-lt)',
            borderLeft: '2px solid var(--accent)',
            padding: '1.75rem 2rem',
          }}>
            {listing.details.map((row, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                padding: '0.65rem 0',
                borderBottom: i < listing.details.length - 1 ? '1px solid rgba(123,107,88,0.18)' : 'none',
                gap: '1rem',
              }}>
                <span style={{
                  fontSize: '0.8rem',
                  fontWeight: 400,
                  letterSpacing: '0.05em',
                  color: 'var(--text-muted)',
                  whiteSpace: 'nowrap',
                }}>
                  {row.label}
                </span>
                <span style={{
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  color: 'var(--text)',
                  textAlign: 'right',
                }}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

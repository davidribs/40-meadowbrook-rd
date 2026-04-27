import React from 'react'
import { listing } from '../config'
import SectionHeader from './SectionHeader'

export default function Contact() {
  return (
    <section style={{
      background: 'var(--accent-lt)',
      padding: 'clamp(3.5rem,7vw,6rem) var(--pad)',
    }}>
      <div style={{
        maxWidth: 720,
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <SectionHeader eyebrow="Inquire" title="Book a Viewing" center />

        <p style={{
          fontSize: '1rem',
          color: 'var(--text-muted)',
          lineHeight: 1.8,
          marginBottom: '2.5rem',
          marginTop: '-0.75rem',
        }}>
          Reach out to schedule a showing. This unit is available now.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={`mailto:${listing.contact.email}?subject=Inquiry: ${listing.address}&body=Hello, I am interested in viewing the ${listing.beds}-bedroom apartment at ${listing.address}. Please let me know your availability.`}
            style={btnStyle('filled')}
          >
            Email to Inquire
          </a>
          {listing.contact.phone && (
            <a href={`tel:${listing.contact.phone.replace(/\D/g,'')}`} style={btnStyle('outline')}>
              {listing.contact.phone}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

function btnStyle(variant) {
  const base = {
    display: 'inline-block',
    padding: '0.85rem 2.25rem',
    fontSize: '0.72rem',
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'all 0.25s',
    cursor: 'pointer',
  }
  if (variant === 'filled') return { ...base, background: 'var(--dark)', color: '#fff' }
  return { ...base, background: 'transparent', color: 'var(--dark)', border: '1.5px solid var(--dark)' }
}

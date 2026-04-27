import React from 'react'
import { listing } from '../config'

export default function StatsBar() {
  const stats = [
    { num: listing.beds,        label: 'Bedrooms' },
    { num: listing.baths,       label: 'Bathrooms' },
    { num: `~${listing.sqft.toLocaleString()}`, label: 'Sq. Ft.' },
    { num: `$${listing.price.toLocaleString()}`, label: 'Per Month' },
  ]

  return (
    <div style={{
      background: 'var(--dark)',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    }}>
      {stats.map((s, i) => (
        <div key={i} style={{
          flex: '1 0 160px',
          maxWidth: 240,
          padding: '1.6rem 2rem',
          textAlign: 'center',
          borderRight: i < stats.length - 1 ? '1px solid var(--dark-border)' : 'none',
        }}>
          <span style={{
            display: 'block',
            fontFamily: 'var(--font-display)',
            fontSize: '1.9rem',
            color: '#fff',
            lineHeight: 1,
          }}>
            {s.num}
          </span>
          <span style={{
            display: 'block',
            fontSize: '0.62rem',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--dark-muted)',
            marginTop: '0.4rem',
          }}>
            {s.label}
          </span>
        </div>
      ))}
    </div>
  )
}

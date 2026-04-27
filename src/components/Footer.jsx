import React from 'react'
import { listing } from '../config'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--dark)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '1.5rem var(--pad)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '0.75rem',
    }}>
      <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', letterSpacing: '0.08em' }}>
        {listing.address}, {listing.city}
      </span>
      <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', letterSpacing: '0.08em' }}>
        {listing.beds} bed &nbsp;&middot;&nbsp; {listing.baths} bath &nbsp;&middot;&nbsp; ${listing.price.toLocaleString()}/mo
      </span>
    </footer>
  )
}

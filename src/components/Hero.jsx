import React from 'react'
import { listing } from '../config'

const s = {
  hero: {
    position: 'relative',
    height: '100svh',
    minHeight: 560,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  bg: {
    position: 'absolute',
    inset: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    animation: 'zoomOut 14s ease forwards',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.15) 55%, transparent 100%)',
  },
  content: {
    position: 'relative',
    zIndex: 2,
    maxWidth: 'var(--max)',
    margin: '0 auto',
    width: '100%',
    padding: 'var(--pad)',
    paddingBottom: 'clamp(2.5rem, 5vw, 4rem)',
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    alignItems: 'flex-end',
    gap: '2rem',
  },
  left: {},
  eyebrow: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.7rem',
    fontWeight: 500,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    marginBottom: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  eyebrowLine: {
    display: 'inline-block',
    width: 28,
    height: 1,
    background: 'var(--accent)',
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2.6rem, 6vw, 5rem)',
    fontWeight: 400,
    color: '#fff',
    lineHeight: 1.0,
    marginBottom: '0.6rem',
  },
  subtitle: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    fontWeight: 300,
    color: 'rgba(255,255,255,0.65)',
    letterSpacing: '0.04em',
  },
  price: {
    textAlign: 'right',
    color: '#fff',
    flexShrink: 0,
  },
  priceNum: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2rem, 4vw, 3.2rem)',
    display: 'block',
    lineHeight: 1,
  },
  priceSub: {
    fontSize: '0.7rem',
    fontWeight: 400,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.5)',
    marginTop: '0.35rem',
  },
}

export default function Hero() {
  const heroPhoto = listing.photos[0]?.src || ''
  return (
    <>
      <style>{`
        @keyframes zoomOut {
          from { transform: scale(1.05); }
          to   { transform: scale(1.00); }
        }
        @media (max-width: 600px) {
          .hero-content { grid-template-columns: 1fr !important; }
          .hero-price { text-align: left !important; margin-top: 1rem; }
        }
      `}</style>
      <section style={s.hero}>
        <div style={{ ...s.bg, backgroundImage: `url(${heroPhoto})` }} />
        <div style={s.overlay} />
        <div style={s.content} className="hero-content">
          <div style={s.left}>
            <p style={s.eyebrow}>
              <span style={s.eyebrowLine} />
              {listing.city} &mdash; {listing.available}
            </p>
            <h1 style={s.title}>{listing.address}</h1>
            <p style={s.subtitle}>
              {listing.beds} bedrooms &nbsp;&middot;&nbsp; {listing.baths} bathrooms &nbsp;&middot;&nbsp; ~{listing.sqft.toLocaleString()} sq. ft.
            </p>
          </div>
          <div style={s.price} className="hero-price">
            <span style={s.priceNum}>${listing.price.toLocaleString()}</span>
            <span style={s.priceSub}>per month</span>
          </div>
        </div>
      </section>
    </>
  )
}

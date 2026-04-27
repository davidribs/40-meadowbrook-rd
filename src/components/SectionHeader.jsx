import React from 'react'

export default function SectionHeader({ eyebrow, title, light = false, center = false }) {
  return (
    <div style={{ marginBottom: '2.5rem', textAlign: center ? 'center' : 'left' }}>
      <p style={{
        fontSize: '0.65rem',
        fontWeight: 500,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'var(--accent)',
        marginBottom: '0.75rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        justifyContent: center ? 'center' : 'flex-start',
      }}>
        <span style={{ display: 'inline-block', width: 20, height: 1, background: 'var(--accent)' }} />
        {eyebrow}
      </p>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.8rem, 3.5vw, 2.7rem)',
        fontWeight: 400,
        lineHeight: 1.15,
        color: light ? '#fff' : 'var(--text)',
        marginBottom: '1.5rem',
      }}>
        {title}
      </h2>
      <div style={{ height: 1, background: light ? 'var(--dark-border)' : 'var(--border)' }} />
    </div>
  )
}

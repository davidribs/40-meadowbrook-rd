import React, { useEffect, useCallback } from 'react'

export default function Lightbox({ photos, index, onClose, onNav }) {
  const photo = photos[index]

  const handleKey = useCallback((e) => {
    if (e.key === 'Escape')      onClose()
    if (e.key === 'ArrowRight')  onNav(1)
    if (e.key === 'ArrowLeft')   onNav(-1)
  }, [onClose, onNav])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.95)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: '1.5rem', right: '2rem',
          background: 'none', border: 'none',
          color: 'rgba(255,255,255,0.5)', fontSize: '1.4rem',
          cursor: 'pointer', fontFamily: 'var(--font-body)',
          letterSpacing: '0.05em',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.target.style.color = '#fff'}
        onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
        aria-label="Close"
      >
        &times;
      </button>

      {/* Image */}
      <img
        src={photo.src}
        alt={photo.caption}
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: '88vw',
          maxHeight: '78vh',
          objectFit: 'contain',
        }}
      />

      {/* Caption + nav */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem',
          marginTop: '1.5rem',
        }}
      >
        <NavBtn onClick={() => onNav(-1)} label="Prev" />
        <div style={{ textAlign: 'center' }}>
          <span style={{
            display: 'block',
            color: '#fff',
            fontSize: '0.85rem',
            fontWeight: 400,
            letterSpacing: '0.04em',
          }}>{photo.caption}</span>
          <span style={{
            color: 'rgba(255,255,255,0.35)',
            fontSize: '0.7rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}>{index + 1} / {photos.length}</span>
        </div>
        <NavBtn onClick={() => onNav(1)} label="Next" />
      </div>
    </div>
  )
}

function NavBtn({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: '1px solid rgba(255,255,255,0.2)',
        color: 'rgba(255,255,255,0.6)',
        padding: '0.5rem 1.25rem',
        fontSize: '0.7rem',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; e.currentTarget.style.color = '#fff' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
    >
      {label}
    </button>
  )
}

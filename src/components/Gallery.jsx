import React, { useState } from 'react'
import { listing } from '../config'
import Lightbox from './Lightbox'
import SectionHeader from './SectionHeader'

export default function Gallery() {
  const [lbIndex, setLbIndex] = useState(null)
  const photos = listing.photos

  function openLb(i) { setLbIndex(i) }
  function closeLb()  { setLbIndex(null) }
  function navLb(d)   { setLbIndex(i => (i + d + photos.length) % photos.length) }

  // First photo is used as hero — show remaining, plus allow full gallery in lightbox
  const gridPhotos = photos.slice(1) // hero is photo[0]

  return (
    <>
      <section style={{ background: 'var(--surface)', padding: 'clamp(3rem,6vw,5.5rem) var(--pad)' }}>
        <div style={{ maxWidth: 'var(--max)', margin: '0 auto' }}>
          <SectionHeader eyebrow="Photo Gallery" title="Tour the Space" />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridAutoRows: 280,
            gap: 5,
          }}
          className="gallery-grid"
          >
            {gridPhotos.map((photo, i) => (
              <Cell
                key={i}
                photo={photo}
                // Make first cell of the grid span 2 rows for visual interest
                tall={i === 0}
                onClick={() => openLb(i + 1)} // +1 because hero is index 0
              />
            ))}
          </div>

          {photos.length > 1 && (
            <button
              onClick={() => openLb(0)}
              style={{
                marginTop: '1.25rem',
                background: 'none',
                border: 'none',
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span style={{ display: 'inline-block', width: 18, height: 1, background: 'currentColor' }} />
              View all {photos.length} photos
            </button>
          )}
        </div>
      </section>

      <style>{`
        .gallery-grid { grid-auto-rows: 280px; }
        @media (max-width: 700px) {
          .gallery-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-auto-rows: 180px !important;
          }
          .gallery-cell-tall { grid-row: auto !important; }
        }
        @media (max-width: 440px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {lbIndex !== null && (
        <Lightbox photos={photos} index={lbIndex} onClose={closeLb} onNav={navLb} />
      )}
    </>
  )
}

function Cell({ photo, tall, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={tall ? 'gallery-cell-tall' : ''}
      style={{
        gridRow: tall ? 'span 2' : 'span 1',
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      <img
        src={photo.src}
        alt={photo.caption}
        style={{
          width: '100%', height: '100%',
          objectFit: 'cover',
          display: 'block',
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 0.55s ease',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered ? 'rgba(0,0,0,0.12)' : 'rgba(0,0,0,0)',
        transition: 'background 0.3s',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '1rem',
      }}>
        <span style={{
          fontSize: '0.65rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#fff',
          fontWeight: 500,
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(4px)',
          transition: 'opacity 0.3s, transform 0.3s',
        }}>
          {photo.caption}
        </span>
      </div>
    </div>
  )
}

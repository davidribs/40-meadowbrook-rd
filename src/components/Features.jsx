import React, { useState } from 'react'
import { listing } from '../config'
import SectionHeader from './SectionHeader'

export default function Features() {
  return (
    <section style={{
      background: 'var(--surface)',
      
    }}>
      

      
    </section>
  )
}

function FeatureCard({ title, body }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--accent-lt)' : 'var(--surface)',
        padding: '1.75rem 2rem',
        transition: 'background 0.25s',
        borderLeft: hovered ? '3px solid var(--accent)' : '3px solid transparent',
      }}
    >
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.1rem',
        fontWeight: 400,
        marginBottom: '0.6rem',
        color: 'var(--text)',
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: '0.87rem',
        lineHeight: 1.7,
        color: 'var(--text-muted)',
      }}>
        {body}
      </p>
    </div>
  )
}

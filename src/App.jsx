import React from 'react'
import Hero     from './components/Hero'
import StatsBar from './components/StatsBar'
import About    from './components/About'
import Gallery  from './components/Gallery'
import Features from './components/Features'
import Panorama from './components/Panorama'
import Location from './components/Location'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  return (
    <>
      <Hero />
      <StatsBar />
      <About />
      <Gallery />
      <Features />
      <Panorama />
      <Location />
      <Contact />
      <Footer />
    </>
  )
}

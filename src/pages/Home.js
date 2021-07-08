import Hero from '../components/Hero'
import Sector from '../components/Sector'
import Cookie from '../components/Cookie'
import Footer from '../components/Footer'
import React from 'react'
// import Experiment from '../components/Experiment'

export default function Home({ props }) {

  return (
    <React.Fragment>
      <Hero />
      <Sector />
      <Cookie />
      <Footer />
    </React.Fragment>
  )
}
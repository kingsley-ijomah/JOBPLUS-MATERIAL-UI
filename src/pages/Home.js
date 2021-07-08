import Hero from '../components/Hero'
import Sector from '../components/Sector'
import React from 'react'
import Experiment from '../components/Experiment'

export default function Home({ props }) {

  return (
    <React.Fragment>
      <Hero />
      <Sector />
    </React.Fragment>
  )
}
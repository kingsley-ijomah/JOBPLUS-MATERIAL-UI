import Hero from '../components/Hero'
import Sector from '../components/Sector'
import React from 'react'

export default function Home({ props }) {

  return (
    <React.Fragment>
      <Hero labelColor='secondary' />
      <Sector />
    </React.Fragment>
  )
}
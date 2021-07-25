import Hero from '../components/Hero'
import Sector from '../components/Sector'
import React from 'react'
import SiteWrapper from '../components/SiteWrapper'

export default function Home({ props }) {

  return (
    <SiteWrapper>
      <Hero labelColor='secondary' />
      <Sector />
    </SiteWrapper>
  )
}
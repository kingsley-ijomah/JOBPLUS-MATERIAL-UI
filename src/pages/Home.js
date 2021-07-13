import Hero from '../components/Hero'
import Sector from '../components/Sector'
import React from 'react'

export default function Home({ props }) {

  return (
    <>
      <Hero labelColor='secondary' />
      <Sector />
    </>
  )
}
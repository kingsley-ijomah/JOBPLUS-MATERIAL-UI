import React from 'react'
import Hero from '../components/Hero'
import ListingFilter from '../components/ListingFilter'

export default function JobListings(props) {

  return (
    <React.Fragment>
      <Hero type='plain' />
      <ListingFilter />
    </React.Fragment>
  )
}
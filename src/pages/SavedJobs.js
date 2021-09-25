import React from 'react'
import Hero from '../components/Hero'
import ListingFilter from '../components/ListingFilter'
import PageTitle from '../components/PageTitle'
import Listing from '../components/Listing';

export default function SavedJobs(props) {

  const listings = [<Listing detailed={false} />, <Listing />]
  return (
    <>
      <Hero heroType='plain' />
      <ListingFilter components={listings} />
    </>
  )
}
import React from 'react';
import Hero from '../components/Hero';
import Listing from '../components/Listing';
import ListingFilter from '../components/ListingFilter';

export default function JobListings(props) {
  const listings = [<Listing detailed={false} />, <Listing detailed={false} />]
  return (
    <>
      <Hero heroType='plain' />
      <ListingFilter components={listings} />
    </>
  )
}
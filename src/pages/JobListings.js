import React from 'react';
import Hero from '../components/Hero';
import ListingFilter from '../components/ListingFilter';
import SiteWrapper from '../components/SiteWrapper';

export default function JobListings(props) {

  return (
    <SiteWrapper>
      <Hero heroType='plain' />
      <ListingFilter />
    </SiteWrapper>
  )
}
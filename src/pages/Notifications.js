import React from 'react'
import Hero from '../components/Hero'
import ListingFilter from '../components/ListingFilter'
import PageTitle from '../components/PageTitle'
import SiteWrapper from '../components/SiteWrapper'

export default function Notifications(props) {

  return (
    <SiteWrapper>
      <PageTitle title='Notifications' />
      <ListingFilter />
    </SiteWrapper>
  )
}
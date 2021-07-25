import React from 'react'
import Hero from '../components/Hero'
import ListingFilter from '../components/ListingFilter'
import PageTitle from '../components/PageTitle'

export default function Notifications(props) {

  return (
    <>
      <PageTitle title='Notifications' />
      <ListingFilter />
    </>
  )
}
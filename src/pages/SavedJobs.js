import React from 'react'
import Hero from '../components/Hero'
import ListingFilter from '../components/ListingFilter'
import PageTitle from '../components/PageTitle'

export default function SavedJobs(props) {

  return (
    <>
      <PageTitle title='Saved Jobs' />
      <ListingFilter />
    </>
  )
}
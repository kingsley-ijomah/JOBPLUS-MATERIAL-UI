import React from 'react'
import Cookie from './Cookie';
import Footer from './Footer';
import Navbar from './Navbar';

export default function SiteWrapper(props) {
  const { children } = props;

  return (
    <>
      <Navbar />
      {children}
      <Cookie />
      <Footer />
    </>
  )
}

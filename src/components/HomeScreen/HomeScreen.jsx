import React from 'react'
import Footer from '../Footer/Footer'
import Banner from './Banner/Banner'
import Download from './Download/Download'
import Enjoy from './Enjoy/Enjoy'
import ProfileKids from './ProfileKids/ProfileKids'
import Questions from './Questions/Questions'
import Watch from './Watch/Watch'

function HomeScreen() {
  return (
    <>
      <Banner/>
      <Enjoy/>
      <Download/>
      <Watch/>
      <ProfileKids/>
      <Questions/>
      <Footer/>
    </>
  )
}

export default HomeScreen
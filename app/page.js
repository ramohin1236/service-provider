import React from 'react'
import HeroSection from './components/HeroSection'
import PopularCategory from './components/PopularCategory'
import PopularService from './components/PopularService'
import HowWorks from './components/HowWorks'
import Servify from './components/Servify'
import CustomerReview from './components/CustomerReview'
import Cta from './components/Cta'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <PopularCategory/>
      <PopularService/>
      <HowWorks/>
      <Servify/>
      <CustomerReview/>
      <Cta/>
    </div>
  )
}

export default HomePage
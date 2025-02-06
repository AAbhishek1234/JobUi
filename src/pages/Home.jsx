import React from 'react'
import Navbar from '../component/Navbar'
import HeroSection from '../component/HeroSection'
import StepSection from '../component/StepSection'
import Footer from '../component/Footer'
import LatestJobs from '../component/LatestJobs'

function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Footer/>
    {/* <StepSection/> */}
    <LatestJobs/>
    </>
  )
}

export default Home
import React from 'react'
import Hero from './components/Hero'
import BarGraph from './components/BarGraph'
import Lovedays from './components/lovedays'
import Quote from './components/quote'
import Myloveforyou from './components/Myloveforyou'
import Letter from './components/letter'

const page = () => {
  return (
    <div className='bg-black'>
      <Hero/>
      <Lovedays/>
      <Quote/>
      <BarGraph/>
      <Myloveforyou/>
      <Letter/>
    </div>
  )
}

export default page
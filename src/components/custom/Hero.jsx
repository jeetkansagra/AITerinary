import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col items-center mx-16  md:mx-28 lg:mx-56 gap-6 md:gap-8 text-center mt-12 md:mt-16'>
      <h1 className='font-extrabold text-[44px] md:text-[46px] lg:text-[50px] '><span className='text-[#f56551]'>Discover Your Next Adventure with      AI:</span> Personalized Itineararies at Your Fingertrips</h1>
        <p className='text-xl text-gray-500 text-center'>
            Your personal trip planner and travel curator,creating custom itineararies tailored to you interests and budget
        </p>

        <Link to={'/create-trip'}>
          <Button>Get Started</Button>
        </Link>
        
    </div>
    
  )
}

export default Hero

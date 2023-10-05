import React from 'react'
import AboutContant from '../About/AboutContant'
import AboutBanner from '../About/AboutBanner'

function About() {
  return (

    <div>
        <AboutBanner/>
            <div className='px-5 xl:px-0'>
            <AboutContant/>
            </div>
    </div>
  )
}

export default About
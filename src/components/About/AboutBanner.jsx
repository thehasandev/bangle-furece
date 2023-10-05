import React from 'react'

import About from "../../assets/about.jpg"

function AboutBanner() {
  return (
    <section className='mt-16'>
        <div className=' h-[600px]  mx-auto relative'>
            <img src={About} alt="About" className='w-full h-full'/>
            <div className='bg-black/50 h-full w-full absolute top-0 left-0 flex items-center justify-center'>
                <h1 className='font-pop font-bold text-5xl text-white'>About</h1>
            </div>
            
        </div> 
  </section>
  )
}

export default AboutBanner
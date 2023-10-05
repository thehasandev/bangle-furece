import React from 'react'

import Container from '../Common/Container'

function GallaryBanner() {
  return (
    <section className='bg-police bg-center  bg-cover md:bg-cover  mt-16'>
      <div className='bg-black/50'>
          <Container>
              <div className='py-32 relative'>
                  <h1 className='font-roboto font-bold text-white text-center text-4xl'>Gallery</h1>
                  <div className='absolute -bottom-8 left-1/2 -translate-x-1/2'>
                    <button className='font-roboto font-bold text-white text-center px-8 py-4 rounded-[5px] bg-[#048198]'>Get free Quite</button>

                  </div>
              </div>
          </Container>
      </div>
</section>
  )
}

export default GallaryBanner
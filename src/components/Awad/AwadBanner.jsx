import React from 'react'

import Container from "../Common/Container"


function AwadBanner() {
  return (
    <section className='bg-securityBanner  bg-cover md:bg-cover  mt-16'>
        <div className='bg-black/50'>
            <Container>
                <div className='py-32'>
                    <h1 className='font-roboto font-bold text-white text-center text-4xl'>Awards & Recognition</h1>
                    <div className='w-[120px] mx-auto mt-2 text-white'>
                    </div>
                </div>
            </Container>
        </div>
    </section>
  )
}

export default AwadBanner
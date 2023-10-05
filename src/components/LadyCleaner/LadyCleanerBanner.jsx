import React from 'react'

import Container from "../Common/Container"
import Flex from "../Common/Flex"
import { Link } from 'react-router-dom'

function LadyCleanerBanner() {
  return (
    <section className='bg-securityBanner  bg-cover md:bg-cover  mt-16'>
        <div className='bg-black/50'>
            <Container>
                <div className='py-32'>
                    <h1 className='font-roboto font-bold text-white text-center text-4xl'>#1 Best Lady Cleaner Service in Dhaka, Bangladesh</h1>
                    <div className='w-[120px] mx-auto mt-2 text-white'>
                        <Flex className="gap-x-2">
                            <Link to="/">
                                <p className='font-pop font-normal text-center text-white text-normal'>Home</p>
                            </Link>
                
                            <Link to="/">
                                <p className='font-pop font-normal text-center text-white text-normal'>About</p>
                            </Link>

                        </Flex>

                </div>
                </div>
            </Container>
        </div>
     
</section>
  )
}

export default LadyCleanerBanner
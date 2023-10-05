import React from 'react'
import Container from '../Common/Container'
import Flex from '../Common/Flex'

import {FaUserShield,FaUsers} from "react-icons/fa"
import {PiUsersThreeFill,PiUsersFourFill} from "react-icons/pi"

import CountUp from 'react-countup';

function Counter() {
  return (
    <section className='mb-16 mt-5'>
        <Container>
           <div className="bg-counter bg-cover md:clip-path-counterPlygon h-[550px]"> 
             <div className='bg-black/60 h-full'>
                <div className="md:flex justify-end gap-x-5  items-center h-full pb-5">

                    <div className=' md:w-[22%] w-[200px] mx-auto md:mx-0 pt-10 md:pt-0 text-white'>
                            <Flex className="item-center gap-x-3">
                                <FaUserShield size={50}/>
                                <CountUp start={1500} end={3500}>
                                  {({ countUpRef }) => (
                                    <div>
                                    <h2 className=' font-roboto font-bold text-5xl' ref={countUpRef} />
                                    
                                    </div>)}
                                </CountUp>
                            </Flex>

                            <p className='font-pop text-sm font-normal pt-4 pl-2'>Guard Security Services</p>
                    </div>

                    <div className='md:w-[22%] w-[200px] mx-auto md:mx-0 pt-10 md:pt-0 text-white'>
                            <Flex className="item-center gap-x-3">
                                <PiUsersThreeFill size={50}/>
                                <CountUp start={0} end={150}>
                                  {({ countUpRef }) => (
                                    <div>
                                    <h2 className=' font-roboto font-bold text-5xl' ref={countUpRef} />
                                    
                                    </div>)}
                                </CountUp>
                            </Flex>

                            <p className=' font-pop text-sm pl-2 font-normal pt-4 '>Guard Security Services</p>
                    </div>

                    <div className='md:w-[22%] w-[200px] mx-auto md:mx-0 pt-10 md:pt-0 text-white'>
                            <Flex className="item-center gap-x-3">
                                <FaUsers size={50}/>
                                <CountUp start={1500} end={4000}>
                                  {({ countUpRef }) => (
                                    <div>
                                    <h2 className=' font-roboto font-bold text-5xl' ref={countUpRef} />
                                    
                                    </div>)}
                                </CountUp>
                            </Flex>

                            <p className='font-pop text-sm pl-2 font-normal pt-4'>Guard Security Services</p>
                    </div>

                    <div className='md:w-[22%] w-[200px] mx-auto pt-10 md:mx-0 md:pt-0  text-white'>
                            <Flex className="item-center gap-x-3">
                                <PiUsersFourFill size={50}/>
                                <CountUp start={1500} end={3000}>
                                  {({ countUpRef }) => (
                                    <div>
                                    <h2 className=' font-roboto font-bold text-5xl' ref={countUpRef} />
                                    
                                    </div>)}
                                </CountUp>

                            </Flex>

                            <p className=' font-pop text-sm pl-2 font-normal pt-4'>Cleaning Services Team</p>
                    </div>

                </div>
             </div> 
           </div>
        </Container>

    </section>
  )
}

export default Counter
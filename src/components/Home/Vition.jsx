import React from 'react'
import Container from '../Common/Container'

import VisonOne from "../../assets/vitionOne.jpg"
import VisonTwo from "../../assets/vitionTwo.jpg"

import vitionThree from "../../assets/vitionThree.jpg"
import Flex from '../Common/Flex'
import { AiOutlineLink, AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Vition() {
  return (
    <section className='pyt-5 pb-16'>
        <Container>
         <div>
          
            <h2 className='font-roboto text-[#444444] font-semibold text-4xl text-center md:w-[800px] mx-auto  relative after:absolute after:content-[""] after:h-[1px] after:w-[200px] after:bg-red-600 after:bottom-[-18px] after:left-1/2 after:translate-x-[-50%] after:rounded-full'>OUR VISION
            <span className='relative after:absolute after:content-[""] after:h-[1px] after:md:w-[300px] after:bg-gray-600/40 after:bottom-[20px] after:right-[100px]  after:translate-x-[-50%] after:rounded-full before:absolute before:content-[""] before:h-[1px] before:md:w-[300px] before:bg-gray-600/40 before:bottom-[15px] before:right-[100px]  before:translate-x-[-50%] before:rounded-full' ></span>
            <span className='relative after:absolute after:content-[""] after:h-[1px] after:md:w-[300px] after:bg-gray-600/40 after:bottom-[20px] after:left-[200px]  after:translate-x-[-50%] after:rounded-full before:absolute before:content-[""] before:h-[1px] before:md:w-[300px] before:bg-gray-600/40 before:bottom-[15px] before:left-[200px]  before:translate-x-[-50%] before:rounded-full' ></span>
            </h2>
            
            <h3 className='font-pop text-4xl font-normal text-[#444444] text-center mt-16'>Standing Security Services For Every Situation.</h3>
            <p className='md:w-[850px] text-center mx-auto font-roboto text-sm font-bold text-[#444444] mt-8 mb-32'>
            Whether you need<span className='text-[#C87063] hover:text-primary duration-200'> Armed</span>or Unarmed Security Officers for a small business or major corporation. We can meet all your security needs.</p>
          
          {/* Card Start */}
          <div className="flex justify-center gap-5 md:justify-between flex-wrap">
                <div className='w-[300px] md:w-[30%] relative group overflow-hidden'>
                    <Link to="/armed-sequrity-gurd">
                            <div>
                                <img src={VisonOne} alt="VisonOne" className='w-full'/>
                            </div>
                            <div className='absolute top-0 group-hover:left-0 duration-500 left-[-100%] bg-primary h-full w-full'>
                                <Flex className="items-center justify-center h-full gap-x-5">
                                <div>
                                        <Flex className="gap-x-5 justify-center">
                                                <div className='w-[50px] h-[50px] bg-white rounded-full'>
                                                    <div className='flex items-center h-full w-full justify-center'>
                                                    <AiOutlineSearch size={30}/>
                                                    </div>
                                                </div>

                                                <div className='w-[50px] h-[50px] bg-white rounded-full'>
                                                    <div className='flex items-center h-full w-full justify-center'>
                                                    <AiOutlineLink size={25}/>
                                                    </div>
                                                </div>
                                        </Flex>
                                            <h3 className='font-roboto mt-3 mb-2 font-bold text-white text-3xl'>Armed Sequrity</h3>
                                            <p className='font-roboto text-center font-bold text-white text-xl'>Residential</p>
                                </div> 
                                </Flex>
                            </div>
                    </Link>

                </div>
          
               
                <div className='w-[300px] md:w-[30%] relative group overflow-hidden'>
                    <Link to="/security-guard">
                            <div>
                                <img src={VisonTwo} alt="VisonTwo" className='w-full'/>
                            </div>
                            <div className='absolute top-[-100%] group-hover:top-0 duration-500 left-0 bg-primary h-full w-full'>
                                <Flex className="items-center justify-center h-full gap-x-5">
                                <div>
                                        <Flex className="gap-x-5 justify-center">
                                                <div className='w-[50px] h-[50px] bg-white rounded-full'>
                                                    <div className='flex items-center h-full w-full justify-center'>
                                                    <AiOutlineSearch size={30}/>
                                                    </div>
                                                </div>

                                                <div className='w-[50px] h-[50px] bg-white rounded-full'>
                                                    <div className='flex items-center h-full w-full justify-center'>
                                                    <AiOutlineLink size={25}/>
                                                    </div>
                                                </div>
                                        </Flex>
                                            <h3 className='font-roboto mt-3 mb-2 font-bold text-white text-3xl'>Security Guarding</h3>
                                            <p className='font-roboto text-center font-bold text-white text-xl'>Security Guarding</p>
                                
                                </div> 
                                </Flex>
                            </div>
                    </Link>        


                </div>
           

                <div className='w-[300px] md:w-[30%]  relative group overflow-hidden'>
                    <Link to="/">
                            <div>
                                <img src={vitionThree} alt="vitionThree" className='w-full'/>
                            </div>
                            <div className='absolute top-0 group-hover:left-0 duration-500 left-[100%]  bg-primary h-full w-full'>
                                <Flex className="items-center justify-center h-full gap-x-5">
                                    <div>
                                        <Flex className="gap-x-5 justify-center">
                                                <div className='w-[50px] h-[50px] bg-white rounded-full'>
                                                    <div className='flex items-center h-full w-full justify-center'>
                                                    <AiOutlineSearch size={30}/>
                                                    </div>
                                                </div>

                                                <div className='w-[50px] h-[50px] bg-white rounded-full'>
                                                    <div className='flex items-center h-full w-full justify-center'>
                                                    <AiOutlineLink size={25}/>
                                                    </div>
                                                </div>
                                        </Flex>
                                            <h3 className='font-roboto mt-3 mb-2 font-bold text-white text-3xl'>Guard Training</h3>
                                            <p className='font-roboto text-center font-bold text-white text-xl'>Commercial</p>

                                    </div> 
                                </Flex>
                            </div>
                    </Link>


                </div>
               
               

          </div>
          
         <Flex className="justify-center">
           <button className='px-8 py-4 bg-primary text-xl mt-10  font-roboto hover:bg-[#208C72] text-white md:w-[400px] '> VIEW ALL SERVICE</button>
         </Flex>
         </div>   
          
        

       

        </Container>

    </section>
  )
}

export default Vition
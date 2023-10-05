import React from 'react'

import Container from "../Common/Container"
import Flex from '../Common/Flex'
import {  AiFillHome, AiFillSetting, AiOutlineUser, AiOutlineUserSwitch } from 'react-icons/ai'
import {BsLightbulbFill } from 'react-icons/bs'
import {PiUsersThreeBold } from 'react-icons/pi'

function Goal() {
  return (
    <section>
        <Container>
          <h2 className='font-roboto text-[#444444] font-semibold text-4xl text-center md:w-[800px] mx-auto  relative after:absolute after:content-[""] after:h-[1px] after:w-[200px] after:bg-red-600 after:bottom-[-18px] after:left-1/2 after:translate-x-[-50%] after:rounded-full'>MAIN GOAL
              <span className='relative after:absolute after:content-[""] after:h-[1px] after:md:w-[300px] after:bg-gray-600/40 after:bottom-[20px] after:right-[100px]  after:translate-x-[-50%] after:rounded-full before:absolute before:content-[""] before:h-[1px] before:md:w-[300px] before:bg-gray-600/40 before:bottom-[15px] before:right-[100px]  before:translate-x-[-50%] before:rounded-full' ></span>
              <span className='relative after:absolute after:content-[""] after:h-[1px] after:md:w-[300px] after:bg-gray-600/40 after:bottom-[20px] after:left-[200px]  after:translate-x-[-50%] after:rounded-full before:absolute before:content-[""] before:h-[1px] before:md:w-[300px] before:bg-gray-600/40 before:bottom-[15px] before:left-[200px]  before:translate-x-[-50%] before:rounded-full' ></span>
          </h2>

            <h3 className='font-pop text-2xl md:text-4xl font-normal mx-auto md:w-[700px] text-[#444444] text-center mt-16'>To Become The Most Reliable Security Guard Company in Bangladesh</h3>
            <p className='md:w-[850px] px-2 md:px-2 text-center mx-auto font-roboto text-sm font-bold text-[#444444] mt-8 mb-32'>
            We are your complete<span className='text-[#C87063] hover:text-primary duration-200'> e security guard company</span>that strives to provide professional and value-added services. We provide the above total security and <span className='text-[#C87063] hover:text-primary duration-200'> cleaning services</span> to our esteemed clients. We are also ever-responsive to the changing demands of the Security Environment and Industry. We are committed to keeping your place safe and secure </p>

            <Flex className="md:justify-between flex-wrap justify-center gap-5">
                <div className=' w-[300px] group bg-white shadow-lg border px-2 py-6'>
                     <div className='w-[50px] h-[50px] bg-white rounded-full mx-auto flex items-center justify-center group-hover:bg-[red] group-hover:text-white duration-500'>
                        <AiFillHome size={25}/>
                     </div>

                     <h2 className='font-roboto mb-10 mt-5 group-hover:text-[red] font-bold text-center text-[#444444] duration-500 text-2xl relative after:absolute after:h-[1px] after:w-10 after:contents-[` `] after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:bg-red-500'>Great Services</h2>
                     <p className='font-pop font-medium text-[#444444] text-sm w-[240px] mx-auto' >Missions companies Industries with the traditional proprietary, security Forces are turning towards contractual security companies.</p>
                </div>

                
                <div className='w-[300px] group bg-white shadow-lg border px-2 py-6'>
                     <div className='w-[50px] h-[50px] bg-white rounded-full mx-auto flex items-center justify-center group-hover:bg-[red] group-hover:text-white duration-500'>
                        <AiFillSetting size={25}/>
                     </div>

                     <h2 className='font-roboto mb-10 mt-5 group-hover:text-[red] font-bold text-center text-[#444444] duration-500 text-2xl relative after:absolute after:h-[1px] after:w-10 after:contents-[` `] after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:bg-red-500'>Highest Standards</h2>
                     <p className='font-pop font-medium text-[#444444] text-sm w-[240px] mx-auto' >To provide Standard Security to Plants, Industries, Corporate premises, Banks, Markets and Other prime installation residence.</p>
                </div>

                <div className='w-[300px] group bg-white shadow-lg border px-2 py-6'>
                     <div className='w-[50px] h-[50px] bg-white rounded-full mx-auto flex items-center justify-center group-hover:bg-[red] group-hover:text-white duration-500'>
                        <PiUsersThreeBold size={25}/>
                     </div>

                     <h2 className='font-roboto mb-10 mt-5 group-hover:text-[red] font-bold text-center text-[#444444] duration-500 text-2xl relative after:absolute after:h-[1px] after:w-10 after:contents-[` `] after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:bg-red-500'>Professional Team</h2>
                     <p className='font-pop font-medium text-[#444444] text-sm w-[240px] mx-auto' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci fuga voluptatibus, in velit excepturi dolorem tenetur eos nostrum ad obcaecati.</p>
                </div>

                <div className='w-[300px] group bg-white shadow-lg border px-2 py-6'>
                     <div className='w-[50px] h-[50px] bg-white rounded-full mx-auto flex items-center justify-center group-hover:bg-[red] group-hover:text-white duration-500'>
                        <BsLightbulbFill size={25}/>
                     </div>

                     <h2 className='font-roboto mb-10 mt-5 group-hover:text-[red] font-bold text-center text-[#444444] duration-500 text-2xl relative after:absolute after:h-[1px] after:w-10 after:contents-[` `] after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:bg-red-500'>Creative Solutions</h2>
                     <p className='font-pop font-medium text-[#444444] text-sm w-[240px] mx-auto' >These highly skilled professionals are also trained in problem solving methods that do not involve guns.</p>
                </div>


            </Flex>
        </Container>
    </section>
  )
}

export default Goal
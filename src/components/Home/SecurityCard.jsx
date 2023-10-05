import React from 'react'
import Container from '../Common/Container'
import Flex from '../Common/Flex'

import Data from "../../Data/security"
import { Link } from 'react-router-dom'

function SecurityCard() {
  return (
    <section className='pb-16'>
        <Container>
            <h2 className='font-roboto text-[#444444] font-semibold md:text-4xl text-center md:w-[800px] mx-auto  relative after:absolute after:content-[""] after:h-[1px] after:w-[200px] after:bg-red-600 after:bottom-[-18px] after:left-1/2 after:translate-x-[-50%] after:rounded-full'>We Are Modern Security Guard Company
            
            <span className='relative after:absolute after:content-[""] after:h-[1px] after:md:w-[60px] after:bg-gray-600/40 after:bottom-[18px] after:right-[640px]  after:translate-x-[-50%] after:rounded-full before:absolute before:content-[""] before:h-[1px] before:md:w-[60px] before:bg-gray-600/40 before:bottom-[13px] before:right-[640px]  before:translate-x-[-50%] before:rounded-full' ></span>
            <span className='relative after:absolute after:content-[""] after:h-[1px] after:md:w-[60px] after:bg-gray-600/40 after:bottom-[15px] after:left-[50px]  after:translate-x-[-50%] after:rounded-full before:absolute before:content-[""] before:h-[1px] before:md:w-[60px] before:bg-gray-600/40 before:bottom-[10px] before:left-[50px]  before:translate-x-[-50%] before:rounded-full' ></span>
            
            </h2>

            <p className='px-2 md:px-0 md:w-[800px] text-center mx-auto font-roboto text-base font-bold text-[#444444] mt-16 mb-32'>
            Generation Solution of Security Ltd. is one of the best professional <span className='text-[#C87063] hover:text-primary duration-200'> security guard companies in Bangladesh</span>We provide standard service up to the satisfaction of our valued clients. We are eager to work for small to big businesses as also renowned and reputed organizations. We are always ready to accept any difficulties or challenges.
            </p>
           

           <Flex className="justify-center md:justify-between flex-wrap gap-5 gap-y-10">
                
               {
                 Data.map((item,index)=>{
                    let {name,imgUrl} = item
                   return<div key={index}>

                    <Link to={`${item.name=="Event" ? "/event": item.name=="Gunman" ? "/armed-sequrity-gurd" : item.name=="Transport"? "/": item.name=="Bodyguard"?"/body-gurd": item.name=="Cleaner"?"/cleaning": item.name=="Guards"?"/security-guard": "/"}`}>
                      

                      <div className='w-[350px] md:w-[400px] md:hover:scale-175 rounded-[10px] py-5 px-8 bg-primary duration-500 md:hover:bg-[#208C72]'>
                          <h3 className='text-center font-roboto font-semibold text-3xl text-white'>{name}</h3>
                          <img src={imgUrl} alt="" className='my-4'/>
                          <Flex className="justify-center">
                              <button className='rounded-[5px] text-center py-4 px-8 md:hover:bg-transparent duration-500 bg-[#444444] text-base font-pop font-medium text-white'>Learn More</button>
                          </Flex>
                      </div>
                    </Link>
                   </div>
                 })
               } 
                
          
                
           </Flex>
        </Container>
    </section>
  )
}

export default SecurityCard
import React from 'react'

import Data from "../../Data/card"

import Container from '../Common/Container'
import OurTeam from "../../assets/team.png"

import Flex from '../Common/Flex'
import Client from '../Home/Client'
import Troust from '../Home/Troust'
import { Link } from 'react-router-dom'


function OurTeamContant() {
  return (
    <div>
    <section className='mt-32'>
        <Container>
            <div className='h-[500px]  mx-auto relative'>
                <img src={OurTeam} alt="OurTeam" className='w-full h-full'/>
                <div className='bg-black/50 h-full w-full absolute top-0 left-0 flex items-center justify-center'>
                    <h1 className='font-pop font-bold text-5xl text-white'>Our Team</h1>
                </div>
                <p className='font-pop font-medium text-[#444444] text-base mx-auto my-5 md:w-[650px]'>We have a team of highly skilled professionals who are experts in their field.hey have the knowledge and experience to get the job done quickly and efficiently.</p>
            </div>
          
        </Container>
    </section>

    <section className='my-32'>
        <Container>
               <div className='flex justify-between flex-wrap gap-10 '>

               {
                Data.map((item,index)=>{
                    const {name,imgUrl,heading,des} = item 
        
            return  <Link key={index} to={item.tittle} state={{name,imgUrl,heading,des}}>
                        <div className='md:w-[400px] mx-auto'>
                            <img src={imgUrl} alt="a" />
                            <h2 className='font-pop font-bold text-2xl text-center my-5 text-primary'>{heading}</h2>
                            <Flex className="justify-center items-center">
                            <button className='font-pop font-bold text-base px-5 py-4 bg-[#3eed3e] rounded-[5px] text-center text-white'>Learn More</button>
                            </Flex>
                        </div>
                    </Link>    
                }
                

                )
               }
               </div>
        </Container>
    </section>

    <section>
        <Container>
            <Client/>
            <Troust/>
        </Container>
    </section>

    </div>
  )
}

export default OurTeamContant
import React from 'react'


import Flex from '../Common/Flex'

import {FaFacebookF, FaInstagram,  FaTwitter} from "react-icons/fa"

function AboutCard({heading,src,alt}) {
  return (
    <div className='w-[400px] mx-auto'>
        <div className='scale-100 group overflow-hidden '>
          <img src={src} alt={alt} className='group-hover:scale-175 block duration-500'/>
        </div>
       
        <h2 className='font-pop font-medium text-2xl text-center my-5 text-[#444444]'>{heading}</h2>
        
        <Flex className="justify-center gap-x-5">
            <div className='w-[40px] h-[40px] bg-primary rounded-[6px] flex text-white justify-center items-center'>
                <FaFacebookF size={30}/>
            </div>
            <div className='w-[40px] h-[40px] bg-primary rounded-[6px] flex text-white justify-center items-center'>
                <FaTwitter size={20}/>
            </div>
            <div className='w-[40px] h-[40px] bg-primary rounded-[6px] flex text-white justify-center items-center'>
                <FaInstagram size={20}/>
            </div>
        </Flex>
</div>
  )
}

export default AboutCard
import React from 'react'
import Flex from '../Common/Flex'


function EquipimentItemCard({Heading,paragaraph,src,alt,className}) {
  return (
    <div className={`${className} mb-16`}>
        <div className="md:flex  gap-[150px] items-center justify-center">
            <div className='xl:w-[600px]'>
                <h3 className='font-pop font-bold text-4xl text-center mb-5 text-primary'>{Heading}</h3>
                <p className='font-roboto mb-5 font-normal  text-base  text-[#444444]'>{paragaraph}</p>
            </div>
            <div className='xl:w-[400px] mx-auto flex justify-center'>
                <div>
                    <img src={src} alt={alt} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default EquipimentItemCard
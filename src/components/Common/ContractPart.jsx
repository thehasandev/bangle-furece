import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiFillClockCircle, AiFillHome,AiOutlineMail } from 'react-icons/ai'

function ContractPart({home,phone,email,clock,className}) {
  return (
    <div className={`mb-16 ${className}`}>
        <div className='flex gap-x-5 mb-2 '>
                  <div>
                    <div className='h-[35px] w-[35px] bg-[red] text-white rounded-full flex justify-center items-center'>
                      <AiFillHome size={18}/>
                    </div>
                  </div>

                  <p className='font-pop font-normal text-sm text-[#444444]'>{home}</p>
              </div>

          
              <div className='flex gap-x-5 mb-5 items-center'>
                  <div>
                    <div className='h-[35px] w-[35px] bg-[red] text-white rounded-full flex justify-center items-center'>
                      <BsFillTelephoneFill size={18}/>
                    </div>
                  </div>

                  <p className='font-pop font-normal text-sm text-[#444444]'>{phone}</p>
              </div>

              <div className='flex gap-x-5 mb-5 items-center'>
                  <div>
                    <div className='h-[35px] w-[35px] bg-[red] text-white rounded-full flex justify-center items-center'>
                      <AiOutlineMail size={18}/>
                    </div>
                  </div>

                  <p className='font-pop font-normal text-sm text-[#444444]'>{email}</p>
              </div>

              <div className='flex gap-x-5 mb-5 items-center'>
                  <div>
                    <div className='h-[35px] w-[35px] bg-[red] text-white rounded-full flex justify-center items-center'>
                      <AiFillClockCircle size={18}/>
                    </div>
                  </div>

                  <p className='font-pop font-normal text-sm text-[#444444]'>{clock}</p>
              </div>
    </div>
  )
}

export default ContractPart
import React from 'react'

function Input({text,type,placeholder}) {
  return (
    <div>
        <h4 className='font-roboto mb-2 text-[#444444] font-medium text-base'>{text}</h4>
        <input type={type} required placeholder={placeholder} className='w-[300px] md:w-full border mb-5 md:mb-0 border-[#444444] focus:outline-[#fb4d4d] py-2 rounded-[5px] pl-5'/>
    </div>

  )
}

export default Input
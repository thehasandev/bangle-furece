import React from 'react'

function PorsonHeading({text,className}) {
  return (
    <h3 className={`font-pop font-medium text-xl text-[#444444] relative after:absolute after:contant-[""] after:bottom-[-10px] after:left-0 after:h-[2px] after:w-8 after:bg-red-800 after:rounded-full mb-[40px] ${className}`}>{text}</h3>
  )
}

export default PorsonHeading
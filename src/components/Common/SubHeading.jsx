import React from 'react'

function SubHeading({text,className}) {
  return (
    <h2 className={`font-roboto font-bold text-center md:text-left mt-5 text-3xl md:text-5xl mb-8 text-primary ${className}`}>{text}</h2>
  )
}

export default SubHeading
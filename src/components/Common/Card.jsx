import React from 'react'
import Container from "./Container"

function Card({src,alt,HeadingText}) {
  return (
    <div className='w-[300px]'>
        <img src={src} alt={alt} />
        <h2 className='font-roboto text-2xl mt-2 text-primary text-center font-bold'>{HeadingText}</h2>
    </div>   
  )
}

export default Card
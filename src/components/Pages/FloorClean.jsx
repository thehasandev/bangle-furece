import React from 'react'
import FloorBanner from '../FloorClean/FloorBanner'
import FloorContent from '../FloorClean/FloorContent'

function FloorClean() {
  return (
    <div>
        <FloorBanner/>
        <div className='px-5 xl:px-0'> 
           <FloorContent/>
        </div>
    </div>
  )
}

export default FloorClean
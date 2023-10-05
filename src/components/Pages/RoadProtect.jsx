import React from 'react'
import RoadBanner from '../RoadProtect/RoadBanner'
import RoadContant from '../RoadProtect/RoadContant'
import RoadCard from '../RoadProtect/RoadCard'
import RoadContantTwo from '../RoadProtect/RoadContantTwo'

function RoadProtect() {
  return (
    <div>
        <RoadBanner/>
        <div className='px-5 xl:px-0'>
            <RoadContant/>
            <RoadCard/>
            <RoadContantTwo/>
        </div>
    </div>
  )
}

export default RoadProtect
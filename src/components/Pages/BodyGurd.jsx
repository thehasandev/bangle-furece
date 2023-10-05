import React from 'react'
import BodyGurdBanner from '../BodyGurd/BodyGurdBanner'
import BodyGurdContent from '../BodyGurd/BodyGurdContent'
import BodyGurdCard from '../BodyGurd/BodyGurdCard'
import BodyGurdContentTwo from '../BodyGurd/BodyGurdContentTwo'

function BodyGurd() {
  return (
    <>
      <BodyGurdBanner/>
      <div className='px-5 xl:px-0'>
          <BodyGurdContent/>
          <BodyGurdCard/>
          <BodyGurdContentTwo/>
      </div>
    </>
  )
}

export default BodyGurd
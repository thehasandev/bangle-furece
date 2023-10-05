import React from 'react'

import EventBanner from '../Event/EventBanner'
import EventContent from '../Event/EventBanner'
import EventCard from '../Event/EventCard'
import EventContentTwo from '../Event/EventContentTwo'

function Event() {
  return (
    <>
       <div className='px-5 xl:px-0'>
        <EventContent/>
        <EventCard/>
        <EventContentTwo/>
       </div>
    </>
  )
}

export default Event
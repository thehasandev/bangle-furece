import React from 'react'
import ScreenContant from '../BackgroundScreening/ScreenContant'
import ScreeningBanner from '../BackgroundScreening/ScreeningBanner'
import ScreenContentTwo from '../BackgroundScreening/ScreenContentTwo'
import ScreenCard from '../BackgroundScreening/ScreenCard'

function BackgroundScreening() {
  return (
    <section>
       <ScreeningBanner/> 

        <div className='px-5 xl:px-0'>
            <ScreenContant/>
            <ScreenCard/>
            <ScreenContentTwo/> 
        </div>
    </section>
  )
}

export default BackgroundScreening
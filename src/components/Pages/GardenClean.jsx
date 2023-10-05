import React from 'react'
import GardenCleanBanner from '../GardenClean/GardenCleanBanner'
import GardernCleanContant from '../GardenClean/GardernCleanContant'

function GardenClean() {
  return (
    <div>
        <GardenCleanBanner/>
         <div className='px-5 xl:px-0'>
            <GardernCleanContant/>
         </div>
    </div>
  )
}

export default GardenClean
import React from 'react'
import GlassCleaningBanner from '../GlassCleaning/GlassCleaningBanner'
import GlassCleaningContant from '../GlassCleaning/GlassCleaningContant'

function GlassCleaning() {
  return (
    <div>
        <GlassCleaningBanner/>
        <div className='px-5 xl:px-0'> 
            <GlassCleaningContant/>
        </div>
    </div>
  )
}

export default GlassCleaning
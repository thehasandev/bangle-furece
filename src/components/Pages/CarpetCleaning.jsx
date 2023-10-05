import React from 'react'
import CarpetCleaningBanner from '../CarpetCleaning/CarpetCleaningBanner'
import CarpetCleaningContent from '../CarpetCleaning/CarpetCleaningContent'

function CarpetCleaning() {
  return (
    <div>
        <CarpetCleaningBanner/>
          <div className='px-5 md:px-0'>
             <CarpetCleaningContent/>
          </div>
    </div>
  )
}

export default CarpetCleaning
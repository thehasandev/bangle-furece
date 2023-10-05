import React from 'react'
import GallaryBanner from '../Gallary/GallaryBanner'
import GallaryContant from '../Gallary/GallaryContant'

function Gallary() {
  return (
    <div>
        <GallaryBanner/>
          <div className='px-5 md:px-0'>
              <GallaryContant/>
          </div>
    </div>
  )
}

export default Gallary
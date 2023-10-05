import React from 'react'
import AwadBanner from '../Awad/AwadBanner'
import AwadContant from '../Awad/AwadContant'

function Awad() {
  return (
    <div>
        <AwadBanner/>
          <div className='px-5 xl:px-0'>
               <AwadContant/>
          </div>
    </div>
  )
}

export default Awad
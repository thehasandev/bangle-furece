import React from 'react'
import SofaClaenBanner from '../SofaClean/SofaClaenBanner'
import SofaCleanContant from '../SofaClean/SofaCleanContant'

function SofaClean() {
  return (
    <div>
        <SofaClaenBanner/>
        <div className='px-5 xl:px-0'>
            <SofaCleanContant/>
        </div>
    </div>
  )
}

export default SofaClean
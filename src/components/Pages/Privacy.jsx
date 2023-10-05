import React from 'react'
import PrivacyBanner from '../Privacy/PrivacyBanner'
import PrivacyContant from '../Privacy/PrivacyContant'

function Privacy() {
  return (
    <div>
        <PrivacyBanner/>
          <div className='px-5 md:px-0'>
               <PrivacyContant/>
          </div>
    </div>
  )
}

export default Privacy
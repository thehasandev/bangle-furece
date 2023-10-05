import React from 'react'

import ProtectionBanner from '../Protection/ProtectionBanner'
import ProtectionContent from '../Protection/ProtectionContent'
import ProtectionVideo from '../Protection/ProtectionVideo'

function Protection() {
  return (
    <>
     <ProtectionBanner/>
     <div className='px-5 xl:px-0'>
       <ProtectionContent/>
       <ProtectionVideo/>
     </div>
    </>
  )
}

export default Protection
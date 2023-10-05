import React from 'react'
import WindowCleanBanner from '../WindowClean/WindowCleanBanner'
import WindowCleanContent from '../WindowClean/WindowCleanContent'

function WindowCleaning() {
  return (
    <div>
        <WindowCleanBanner/>
         <div className='px-5 xl:px-0'>
            <WindowCleanContent/>
         </div>
        
    </div>
  )
}

export default WindowCleaning
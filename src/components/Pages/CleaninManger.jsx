import React from 'react'
import MangerBanner from '../CleaninManager/MangerBanner'
import ManagerContent from '../CleaninManager/ManagerContent'

function CleaninManger() {
  return (
    <div>
        <MangerBanner/>
        <div className='px-5 xl:px-0'>
           <ManagerContent/>
        </div>
    </div>
  )
}

export default CleaninManger
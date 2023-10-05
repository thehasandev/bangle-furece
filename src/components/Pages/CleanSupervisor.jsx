import React from 'react'
import CleaningSupervisorBanner from '../CleaningSupervisor/CleaningSupervisorBanner'
import CleaningSupervisorContent from '../CleaningSupervisor/CleaningSupervisorContent'

function CleanSupervisor() {
  return (
    <div>
        <CleaningSupervisorBanner/>
        <div className='px-5 xl:px-0'> 
            <CleaningSupervisorContent/>
        </div>
    </div>
  )
}

export default CleanSupervisor
import React from 'react'

import SupervisorBanner from '../Supervisor/SupervisorBanner'
import SupervisorContent from '../Supervisor/SupervisorContent'
import SupervisorCard from '../Supervisor/SupervisorCard'
import SupervisorContantTwo from '../Supervisor/SupervisorContantTwo'


function Supervisor() {
  return (
    <>
     <SupervisorBanner/>
     <div className='px-5 xl:px-0'>
       <SupervisorContent/>
       <SupervisorCard/>
       <SupervisorContantTwo/> 
     </div>
    </>
  )
}

export default Supervisor
import React from 'react'
import LadySequrityBanner from '../LadySequrityGurd/LadySequrityBanner'
import LadySequrityContent from '../LadySequrityGurd/LadySequrityContent'
import LadySequrityContentTwo from '../LadySequrityGurd/LadySequrityContentTwo'
import LadySequrityCard from '../LadySequrityGurd/LadySequrityCard'

function ladySequrityGurd() {
  return (
    <>
     <LadySequrityBanner/>
     <div className='px-5 xl:px-0'>
        <LadySequrityContent/>
        <LadySequrityCard/>
        <LadySequrityContentTwo/>
     </div>

    </>
  )
}

export default ladySequrityGurd
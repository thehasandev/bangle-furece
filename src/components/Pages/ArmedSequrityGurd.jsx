import React from 'react'
import ArmedBanner from '../ArmedSequrityGurd/ArmedBanner'
import ArmedContent from '../ArmedSequrityGurd/ArmedContent'
import ArmentCard from '../ArmedSequrityGurd/ArmentCard'
import ArmedContantTwo from '../ArmedSequrityGurd/ArmedContantTwo'

function ArmedSequrityGurd() {
  return (
    <>
     <ArmedBanner/>
      <div className='px-5 xl:px-0'>
         <ArmedContent/>
         <ArmentCard/>
         <ArmedContantTwo/>

      </div>

    </>
  )
}

export default ArmedSequrityGurd
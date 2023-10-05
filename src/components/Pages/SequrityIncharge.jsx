import React from 'react'

import InchargeBanner from '../SequrityIncharge/InchargeBanner'
import InchargeContant from '../SequrityIncharge/InchargeContant'
import InchargeCard from '../SequrityIncharge/InchargeCard'

function SequrityIncharge() {
  return (
    <>
    <InchargeBanner/>
    <div className='px-5 xl:px-0'>
        <InchargeContant/>
        <InchargeCard/>
    </div>

    </>
  )
}

export default SequrityIncharge
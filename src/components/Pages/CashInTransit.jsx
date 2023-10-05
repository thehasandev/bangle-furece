import React from 'react'
import CashBanner from '../CashInTransit/CashBanner'
import CashContent from '../CashInTransit/CashContent'
import CashCard from '../CashInTransit/CashCard'
import CashContentTwo from '../CashInTransit/CashContentTwo'

function CashInTransit() {
  return (
    <div>
        <CashBanner/>
        <div className='xl:px-0 px-5'>
           <CashContent/>
           <CashCard/>
           <CashContentTwo/>
        </div>
    </div>
  )
}

export default CashInTransit
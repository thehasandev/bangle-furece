import React from 'react'
import HistoryBanner from '../History/HistoryBanner'
import HistoryContant from '../History/HistoryContant'

function History() {
  return (
    <div>
       <HistoryBanner/>
         <div className='px-5 xl:px-0'>
             <HistoryContant/>
         </div>
    </div>
  )
}

export default History
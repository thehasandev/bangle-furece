import React from 'react'
import LadyCleanerBanner from '../LadyCleaner/LadyCleanerBanner'
import LadyCleanerContent from '../LadyCleaner/LadyCleanerContent'

function LadyCleaner() {
  return (
    <section>
        <LadyCleanerBanner/>
        <div className='px-5 xl:px-0'>
             <LadyCleanerContent/>
        </div>
    </section>
  )
}

export default LadyCleaner
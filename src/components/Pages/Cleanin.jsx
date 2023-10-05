import React from 'react'
import CleaningBanner from '../Cleaning/CleaningBanner'
import CleaningContent from '../Cleaning/CleaningContent'

function Cleanin() {
  return (
    <section>
            <CleaningBanner/>
            <div className='px-5 xl:px-0'>
              <CleaningContent/>

            </div>
    </section>
  )
}

export default Cleanin
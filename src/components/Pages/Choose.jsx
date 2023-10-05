import React from 'react'
import ChooseBanner from '../Choose/ChooseBanner'
import ChooseContant from '../Choose/ChooseContant'

function Choose() {
  return (
    <div>
        <ChooseBanner/>
          <div className='px-5 xl:px-0'>
               <ChooseContant/>
          </div>
    </div>
  )
}

export default Choose
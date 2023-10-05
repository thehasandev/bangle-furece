import React from 'react'

import SecurityBannerPart from '../SecurityGuardService/SecurityBannerPart'
import SecurityContent from '../SecurityGuardService/SecurityContent'
import Companies from '../SecurityGuardService/Companies'
import SecurityConterntTwo from '../SecurityGuardService/SecurityConterntTwo'

import CardForSequrity from '../SecurityGuardService/CardForSequrity'

function SecurityGurdService() {
  return (
    <>
      <SecurityBannerPart/>
      <div className='px-5 xl:px-0'>
        <SecurityContent/>
        <CardForSequrity/>
        <Companies/>
        <SecurityConterntTwo/>
      </div>
    </>
  )
}

export default SecurityGurdService
import React from 'react'
import ConsultancyBanner from '../Consultancy/ConsultancyBanner'
import ConsultancyContent from '../Consultancy/ConsultancyContent'
import ConsultancyCard from '../Consultancy/ConsultancyCard'
import ConsultancyContentTwo from '../Consultancy/ConsultancyContentTwo'

function SecurityConsultancy() {
  return (
    <>
      <ConsultancyBanner/>
       <div className='px-5 md:px-0'>
          <ConsultancyContent/>
          <ConsultancyCard/>
          <ConsultancyContentTwo/>

       </div>
    </>
  )
}

export default SecurityConsultancy
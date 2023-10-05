import React from 'react'

import Container from '../Common/Container'
// import RoadPotect from "../../assets/Road-Protect-Security-Traffic-Guard.jpg"

function RoadContant() {
  return (
    <section>
        <Container>
                <p className='font-roboto font-normal text-base my-8 text-[#444444]'>GSSL is a leading service provider of <span className='font-extrabold'>Road Protect Security Traffic Guard</span> for the transport industry or Factories. Our staff is trained to be vigilant and proactive, providing safety and security for your fleet with our fleet management solutions. </p>
            <div className='md:w-[650px] mx-auto'>
                <img src="https://i.ibb.co/rxrKLDf/Road-Protect-Security-Traffic-Guard.jpg" alt="RoadPotect" />
                <p className='font-roboto font-normal text-base my-5 text-center text-[#444444]'>Road Protect Security Traffic Guard | Photo Credit: istock</p>
            </div>

            <div className='bg-gray-300 p-8 shadow-xl'>
                <p className='font-roboto font-normal text-base  text-red-600'>According to Wikipedia – </p>
                <p className='font-roboto font-normal text-base my-8 text-[#444444]'>Traffic guards, also known as traffic controllers and flaggers, are trained to set up warning signs and barricades to slow down the speed of traffic in a temporary traffic control zone. When they are on scene they will set up equipment to warn approaching traffic about the incident. Traffic guards use a variety of equipment:</p>
                
                <ul className='list-disc pl-4 xl:pl-16'>
                    <li className='font-roboto font-medium text-base  text-[#444444] mb-2'>Signal flags.</li>
                    <li className='font-roboto font-medium text-base  text-[#444444] mb-2'>Signal hand sign; called stop/slow paddles in the United States, these are a sign that has ‘stop’ on one side and ‘slow’ or ‘go’ on the other side.</li>
                    <li className='font-roboto font-medium text-base  text-[#444444] mb-2'>Traffic vest.</li>
                    <li className='font-roboto font-medium text-base  text-[#444444] mb-2'>Helmet (or a hard hat); protecting the head from hazards.</li>
                </ul>
            </div>
        </Container>

    </section>
  )
}

export default RoadContant
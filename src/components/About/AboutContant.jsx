import React from 'react'

import Container from '../Common/Container'
import SubHeading from '../Common/SubHeading'
import ReactPlayer from 'react-player'
// import AboutTeam from "../../assets/aboutTeam.jpg"
// import AboutManOne from "../../assets/about1.jpg"
// import AboutManTwo from "../../assets/about2.jpg"
// import AboutManThree from "../../assets/about3.jpg"
// import AboutManFour from "../../assets/about4.jpg"
// import AboutManFive from "../../assets/about5.jpg"
import Flex from '../Common/Flex'


import AboutCard from '../Common/AboutCard'
import Troust from '../Home/Troust'


function AboutContant() {
  return (
    <>
    <section>
        <Container>
           <SubHeading text="Best Security Solutions" className="md:text-center"/>
           <p className='font-pop font-normal text-sm text-[#444444] text-center md:w-[700px] mx-auto'>We were founded in 2016 with a vision to provide top-class security services all over Bangladesh at a very affordable price. We have also added complete cleaning services & pest control services for our clients. GSSL has grown rapidly and is currently over 1000+ strong well trained professional security guards and cleaners and located in every major region in Bangladesh. Security personnel is being deployed all over the country. In terms of manpower, organizational setup, management & prompt response, GSSL can be considered the Leading Security Guard Company in Dhaka, Bangladesh.</p>
        </Container>

    </section>

    <section className='my-16'>
        <Container>
            <div className='flex justify-center'>
             <ReactPlayer url='https://youtu.be/8eTsNIjmMLo' />
            </div>
           
           <div className='md:w-[700px] mx-auto mt-8'>
            <img src="https://i.ibb.co/HrpNtF4/event-Three.png" alt="aboutTeam" />
           </div>
           
        </Container>
    </section>

    <section>
        <Container>
            <h2 className='font-roboto text-[#444444] font-semibold text-4xl text-center md:w-[800px] mx-auto  relative after:absolute after:content-[""] after:h-[1px] after:md:w-[200px] after:bg-red-600 after:bottom-[-18px] after:left-1/2 after:translate-x-[-50%] after:rounded-full'>Meet Our Team<span className='relative after:absolute after:content-[""] after:h-[1px] after:md:w-[300px] after:bg-gray-600/40 after:bottom-[20px] after:right-[140px]  after:translate-x-[-50%] after:rounded-full before:absolute before:content-[""] before:h-[1px] before:md:w-[300px] before:bg-gray-600/40 before:bottom-[15px] before:right-[140px]  before:translate-x-[-50%] before:rounded-full' ></span><span className='relative after:absolute after:content-[""] after:h-[1px] after:md:w-[300px] after:bg-gray-600/40 after:bottom-[20px] after:left-[185px]  after:translate-x-[-50%] after:rounded-full before:absolute before:content-[""] before:h-[1px] before:md:w-[300px] before:bg-gray-600/40 before:bottom-[15px] before:left-[185px]  before:translate-x-[-50%] before:rounded-full' ></span></h2> 
            <p className='md:w-[800px] px-2 md:px-0 text-center mx-auto font-roboto text-sm font-medium text-[#444444] mt-8 mb-16 md:mb-32'> We have highly trained staff available that implement security measures around any Residential, Commercial or Industrial Site.</p>
            
            <Flex className="gap-10 flex-wrap">
              <AboutCard heading="Major Muhammad Hanif (Retd.)Chairman" src="https://i.ibb.co/PcgKwvF/about1.jpg" alt="AboutManOne"/>
              <AboutCard heading="Shariful islam Khandakar Chief Executive Officer (CEO)" src="https://i.ibb.co/6RcRLY6/about2.jpg" alt="AboutManTwo"/>
              <AboutCard heading="Tahamina Akter Shammi Director- Accounts & HR" src="https://i.ibb.co/Qj6D0T0/about3.jpg"alt="AboutManThree"/>
              <AboutCard heading="Md. Fakrul Alam Akanda Advisor" src="https://i.ibb.co/jvmtWYx/about4.jpg" alt="AboutManFour"/>
              <AboutCard heading="Kausar Pathan Bappy Director" src="https://i.ibb.co/yWfpwZq/about5.jpg" alt="AboutManFive"/>
            </Flex>
        </Container>
    </section>

    <section className='my-16'>
        <Container>
            <Troust/>
        </Container>
    </section>
    </>
  )
}

export default AboutContant
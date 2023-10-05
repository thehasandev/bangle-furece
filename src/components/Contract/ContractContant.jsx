import React from 'react'

import Container from '../Common/Container'
import SubHeading from '../Common/SubHeading'
import Flex from '../Common/Flex'
import PorsonHeading from '../Common/PorsonHeading'
import ContractPart from '../Common/ContractPart'
import { BsFillTelephoneFill } from 'react-icons/bs'

import Input from '../Common/Input'


function ContractContant() {
  return (
    <>
    <section className='my-16'>
      <Container>
           <div className='bg-primary p-8'>
                <SubHeading text="Bengal Force Security & Logistis Service Ltd." className="text-white md:text-center"/>
                <SubHeading text="Call us anytime - Our helpline is available 24/7​" className="text-white md:text-center xl:text-3xl"/>
                 <Flex className="justify-center">
                  <button className='bg-[#09c628] font-pop text-base text-white rounded-sm px-10 py-4 flex items-center'><BsFillTelephoneFill size={20} className='mr-2 rounded-sm bg-white text-[#09c628] p-1'/> 01911 899 619</button>
                 </Flex>
           </div>
      </Container>
    </section>

    {/* Forom  */}

    <section> 
      <Container>
         <div className='xl:flex justify-center gap-x-32'>
            <div className='w-[300px] mx-auto bg-[#a6ebf3] p-10'>
                <PorsonHeading text="DHAKA OFFICE"/>
                  <ContractPart home="House #419 Road #30 Mohakhali DOHS, Dhaka -1212" phone="+8801911899619" email="info.gsslbd@gmail.com" clock="We are available 24/7"/>
                
                <PorsonHeading text="CTG OFFICE"/>
                  <ContractPart home="Islam Monjil, Monsur Ali Shah Majar Lane, Sheikh Mujib Road, Badamtoli, Agrabad" phone="+8801713878344" email="info.gsslbd@gmail.com" clock="We are available 24/7"/>
                
                <PorsonHeading text="GAZIPUR OFFICE"/>
                  <ContractPart home="Coming Soon…" phone="+880 1911 899 619" email="info.gsslbd@gmail.com" clock="We are available 24/7"/>
            </div>

            <div className='md:w-[800px]'>
                <h2 className='font-roboto text-[#444444] font-normal md:w-[600px] mb-16 md:text-5xl   mx-auto  relative after:absolute after:content-[""] after:h-[1px] after:w-[200px] after:bg-red-600 after:bottom-[-18px] text-center after:left-1/2 after:translate-x-[-50%] after:rounded-full'>Talk To Us – We’re Here To Help You!</h2>
                <p className='font-roboto  text-base text-[#444444] font-normal md:w-[550px] mx-auto'>Get in touch to discuss your employee wellbeing needs today. Please give us a call, <span className='text-red-800'> drop us an email</span> or fill out the contact form and we’ll get back to you.</p>
            

{/* Input Part Start  */}
            <div className='w-[80%]'>

              <div className='md:flex justify-between  mt-5'>

                <div className='w-[48%] mb-8'>
                   <Input text="FIRST NAME... *" type="text" placeholder="Fast Name"/>
                </div>

                <div className='w-[48%]'>
                   <Input text="LAST NAME" type="text" placeholder="Last Name"/>
                </div>

              </div> 

              <div className='md:flex justify-between  mt-5'>

                <div className='w-[48%] '>
                   <Input text="EMAIL ADDRESS*" type="email" placeholder="Email Address"/>
                </div>

                <div className='w-[48%]'>
                   <Input text="PHONE NUMBER" type="number" placeholder="Phone Number"/>
                </div>

              </div> 

              <div className='w-[48%] md:w-full mt-5'>
                   <Input text="SUBJECT" type="text" placeholder="Subject"/>
              </div>

              <div className='mt-8'>
                <h4 className='font-roboto mb-2 text-[#444444] font-medium text-base'> HOW CAN WE HELP? *</h4>
                 <textarea name="text" id="text"    className='w-[300px] md:w-full focus:outline-[#fb4d4d] border border-[#444444]  rounded-[5px] p-5'/>
              </div>

            </div>
            
             <Flex className="justify-center items-center">
              <button className='bg-primary px-8 py-4 text-white font-roboto font-normal text-base mt-8 rounded-[5px]'>Get free quote</button>

             </Flex>
           
         
            
            </div>
         </div>
      </Container>

    </section>

    {/* Map  */}

    <section className='my-16'>
        <Container>
            <div className='md:w-[80%] mx-auto w-full px-4 md:px-0'>
                <iframe className='w-full h-[500px]'  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
        </Container>
    </section>

    </>
  )
}

export default ContractContant
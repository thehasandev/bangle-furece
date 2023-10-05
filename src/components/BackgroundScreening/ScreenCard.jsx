import React from 'react'

import Container from '../Common/Container'
// import ScreenOne from "../../assets/Security-Consultancy (1).png"
// import ScreenTwo from "../../assets/Security-Guards-Service-Provider.png"
// import ScreenThree from "../../assets/Event-security (1).png"
import { Link } from 'react-router-dom'
import SubHeading from '../Common/SubHeading'

function ScreenCard() {
  return (
    <Container>
         <SubHeading text="Explore Our Related Services" className="xl:text-center"/>
            <div className='flex flex-wrap gap-5 justify-center mt-8  pb-8 border-b border-black'>

                <Link to="/security-guard">
                    <div className='w-[300px]'>
                        <img src="https://i.ibb.co/HrpNtF4/event-Three.png" alt="ScreenTwo" />
                        <h2 className='font-roboto text-2xl mt-2 text-primary text-center mx-auto w-[280px] font-bold'>Security Guard Service</h2>
                    </div>
                </Link>
                   
                <Link to="/security-consultancy">
                    <div className='w-[300px]'>
                        <img src="https://i.ibb.co/q1wRNps/cashTwo.png" alt="ScreenOne" />
                        <h2 className='font-roboto text-2xl mt-2 text-primary text-center font-bold'>Security Consultancy</h2>
                    </div>
                </Link>
               
                

                <Link to="/event">
                  <div className='w-[300px]'>
                      <img src="https://i.ibb.co/N3927bF/cash-Three.png" alt="ScreenThree" />
                      <h2 className='font-roboto text-2xl mt-2 text-primary text-center font-bold'>Event Security</h2>
                  </div>

                </Link>
                
            </div>
   </Container>
  )
}

export default ScreenCard
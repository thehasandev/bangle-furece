import React from 'react'

import Container from '../Common/Container'
// import SupervisorOne from "../../assets/Lady.png"
// import SupervisorTwo from "../../assets/Security-Guards-Service-Provider.png"
// import SupervisorThree from "../../assets/Security-In-Charge.png"
import { Link } from 'react-router-dom'
import SubHeading from '../Common/SubHeading'

function SupervisorCard() {
  return (
    <Container>
         <SubHeading text="Explore Our Related Services" className="xl:text-center"/>
          <div className='flex flex-wrap gap-5 justify-center mt-8  pb-8 border-b border-black'>

              <Link to="/security-guard">
                  <div className='w-[300px]'>
                      <img src="https://i.ibb.co/HrpNtF4/event-Three.png" alt="SupervisorTwo" />
                      <h2 className='font-roboto text-2xl mt-2 text-primary text-center mx-auto w-[280px] font-bold'>Security Guard Service</h2>
                  </div>
              </Link>

              <Link to="/lady-security-guard">
                      <div className='w-[300px]'>
                          <img src="https://i.ibb.co/F4L9yqS/ladyy.png" alt="SupervisorOne" />
                          <h2 className='font-roboto text-2xl mt-2 text-primary text-center font-bold'>Lady Security Guard</h2>
                      </div>
              </Link> 

            <Link to="/incharge">
              <div className='w-[300px]'>
                  <img src="https://i.ibb.co/TcbZtFH/incharge-Man.png" alt="SupervisorThree" />
                  <h2 className='font-roboto text-2xl mt-2 text-primary text-center font-bold'>Security Incharge</h2>
              </div>

            </Link>
              
          </div>
   </Container>
  )
}

export default SupervisorCard
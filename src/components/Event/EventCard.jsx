import React from 'react'

import Container from '../Common/Container'
// import EventOne from "../../assets/eventOne.png"
// import EventTwo from "../../assets/eventTwo.png"
// import EventThree from "../../assets/eventThree.png"
import { Link } from 'react-router-dom'
import Card from "../Common/Card"
import SubHeading from '../Common/SubHeading'

function EventCard() {
  return (
    <Container> 
            <SubHeading text="Explore Our Related Services" className="md:text-center"/>
                <div className='flex flex-wrap gap-5 justify-center border-b border-black pb-10'>
                    <Link to="/security-consultancy">
                       <Card src="https://i.ibb.co/q1wRNps/cashTwo.png" alt="Event One" HeadingText="Security Consultancy"/> 
                    </Link>
                    
                    <Link to="/body-gurd">
                      <Card src="https://i.ibb.co/hfBj5X4/armedTwo.png" alt="Event Two" HeadingText="Bodyguard Service"/>
                    </Link>
                    
                    <Link to="/security-guard">
                        <Card src="https://i.ibb.co/HrpNtF4/event-Three.png" alt="Event Three" HeadingText="Security Guard Service"/>
                    </Link>
                </div>

    </Container>
  )
}

export default EventCard
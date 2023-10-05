import React from 'react'

// import RoadOne from "../../assets/roadOne.png"
// import RoadTwo from "../../assets/roadTwo.png"
// import RoadThree from "../../assets/roadThree.png"
import { Link } from 'react-router-dom'
import Card from '../Common/Card'
import SubHeading from "../Common/SubHeading"
import Container from '../Common/Container'

function RoadCard() {
  return (
    <section className='mt-8'>
     <Container>
        <SubHeading text="Explore Our Related Services" className="md:text-center"/>
        
        <div className='flex flex-wrap gap-5 justify-center  border-b pb-8 border-black'>
            <Link to="/security-guard">
               <Card src="https://i.ibb.co/HrpNtF4/event-Three.png" alt="RoadOne" HeadingText="Security Guard Service"/> 
            </Link>
            
            <Link to="/security-guard-equipments">
               <Card src="https://i.ibb.co/TgFS8HB/body-Gurd-Three.png" alt="RoadTwo" HeadingText="Security Equipment"/>
            </Link>

            <Link to="/cash-in-transit">
              <Card src="https://i.ibb.co/6YDXczN/consulant-One.png" alt="RoadThree" HeadingText="Cash In Transit"/>
            </Link>
        </div>

     </Container>
    </section>
  )
}

export default RoadCard
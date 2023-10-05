import React from 'react'

// import LadyOne from "../../assets/ladyOne.png"
// import LadyTwo from "../../assets/ladyTwo.png"
// import LadyThree from "../../assets/ladyThree.png"

import { Link } from 'react-router-dom'
import Card from '../Common/Card'
import SubHeading from "../Common/SubHeading"

function LadySequrityCard() {
  return (
  <section className='my-8'>
    <SubHeading text="Explore Our Related Services" className="md:text-center"/>
     <div className='flex flex-wrap gap-5 justify-center'>
        <Link to="/security-guard">
          <Card src="https://i.ibb.co/HrpNtF4/event-Three.png" alt="LadyOne" HeadingText="Security Guard Service" />  
        </Link>

        <Link to="/incharge">
          <Card src="https://i.ibb.co/TcbZtFH/incharge-Man.png" alt="LadyTwo" HeadingText="Security Incharge" />
        </Link>
        
        <Link to="/armed-sequrity-gurd">
          <Card src="https://i.ibb.co/Kjj7qkH/Gunman.png" alt="LadyThree" HeadingText="Gunman Service" />
        </Link>
     </div>
  </section>
  )
}

export default LadySequrityCard
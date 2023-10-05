import React from 'react'

import Container from '../Common/Container'
// import InchargeOne from "../../assets/inchargeOne.png"
// import InchargeTwo from "../../assets/inchargeTwo.png"
// import InchargeThree from "../../assets/inchargeThree.png"
import { Link } from 'react-router-dom'
import SubHeading from "../Common/SubHeading"
import Card from "../Common/Card"

function InchargeCard() {
  return (
    <Container>
       <SubHeading text="Explore Our Related Services" className="md:text-center"/>
         <div className='flex flex-wrap gap-5 justify-center mt-8'>
            <Link to="/supervisor">
               <Card src="https://i.ibb.co/nPjfQJg/incharge-One.png"  alt="InchargeOne" HeadingText="Security Supervisor"/>
            </Link>

            <Link to="/armed-sequrity-gurd">
               <Card src="https://i.ibb.co/Kjj7qkH/Gunman.png" alt="InchargeTwo" HeadingText="Gunman Service"/>
            </Link>

            <Link to="/body-gurd">
               <Card src="https://i.ibb.co/hfBj5X4/armedTwo.png" alt="InchargeThree" HeadingText="Body Guard Service"/>
            </Link>
         </div>   
    </Container>
  )
}

export default InchargeCard
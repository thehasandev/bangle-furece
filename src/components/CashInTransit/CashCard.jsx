import React from 'react'

import Container from '../Common/Container'
// import CashOne from "../../assets/cashOne.png"
// import CashTwo from "../../assets/cashTwo.png"
// import CashThree from "../../assets/cashThree.png"
import { Link } from 'react-router-dom'
import SubHeading from '../Common/SubHeading'
import Card from "../Common/Card"

function CashCard() {
  return (
    <Container>
            <SubHeading text="Explore Our Related Services" className="md:text-center"/>
            <div className='flex flex-wrap gap-5 justify-center border-b border-black pb-10'>
              <Link to="/security-guard-equipments">
                 <Card src="https://i.ibb.co/TgFS8HB/body-Gurd-Three.png" alt="CashOne" HeadingText="Security Guard Equipment"/>
              </Link>

              <Link to="/security-consultancy">
              <Card src="https://i.ibb.co/q1wRNps/cashTwo.png" alt="CashTwo" HeadingText="Security Consultancy"/>
              </Link>
              
              <Link to="/event">
                 <Card src="https://i.ibb.co/N3927bF/cash-Three.png" alt="CashThree" HeadingText="Event Security"/>
              </Link>
            </div>
    
    </Container>
  )
}

export default CashCard
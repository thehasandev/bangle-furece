import React from 'react'

import SubHeading from '../Common/SubHeading'
import Card from '../Common/Card'
// import EqupimentCartOne from "../../assets/eOne.png"
// import EqupimentCartTwo from "../../assets/eTwo.png"
// import EqupimentCartThree from "../../assets/eThree.png"
import Container from '../Common/Container'
import { Link } from 'react-router-dom'

function EqupimentCard() {
  return (
    <section className='mt-8'>
        <Container>
            <SubHeading text="Explore Our Related Services" className="md:text-center"/>
            <div className='flex flex-wrap gap-5  justify-center border-b border-black pb-10'>
                <Link to="/road-protect">
                   <Card src="https://i.ibb.co/qNqZnwT/body-Gurd-Two.png" alt="EqupimentCartOne" HeadingText="Road Protect Security"/>
                </Link>
                
                <Link to="/cash-in-transit">
                  <Card src="https://i.ibb.co/6YDXczN/consulant-One.png" alt="EqupimentCartTwo" HeadingText="Cash-In-Transit (CIT)"/>
                </Link>
                
                <Link to="/security-consultancy">
                   <Card src="https://i.ibb.co/q1wRNps/cashTwo.png" alt="EqupimentCartThree" HeadingText="Security Consultancy"/>
                </Link>
            </div>
        </Container>
  </section>
  )
}

export default EqupimentCard
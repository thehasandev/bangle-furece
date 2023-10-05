import React from 'react'

import Container from '../Common/Container'
import SubHeading from '../Common/SubHeading'
import Card from '../Common/Card'
// import ArmedOne from "../../assets/armedOne.png"
// import ArmedTwo from "../../assets/armedTwo.png"
// import ArmedThree from "../../assets/armedThree.png"
import { Link } from 'react-router-dom'

function ArmentCard() {
  return (
    <section className='my-8'>
      <Container>
        <SubHeading text="Explore Our Related Services" className="md:text-center"/>
         <div className='flex flex-wrap gap-5 justify-center border-b border-black pb-10'>
            <Link to="/incharge">
               <Card src="https://i.ibb.co/TcbZtFH/incharge-Man.png" alt="ArmedOne" HeadingText="Security Incharge"/>
            </Link>
            
            <Link to="/body-gurd">
               <Card src="https://i.ibb.co/hfBj5X4/armedTwo.png" alt="ArmedTwo" HeadingText="Body Guard Service"/>
            </Link>

             <Link to="/road-protect">
               <Card src="https://i.ibb.co/qNqZnwT/body-Gurd-Two.png" alt="ArmedThree" HeadingText="Road Protect Security"/>
             </Link>
          </div>
      </Container>

    </section>
  )
}

export default ArmentCard
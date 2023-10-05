import React from 'react'

import Container from '../Common/Container'
// import ConsulantOne from "../../assets/consulantOne.png"
// import ConsulantTwo from "../../assets/consulantTwo.png"
// import ConsulantThree from "../../assets/consulantThree.png"
import { Link } from 'react-router-dom'
import Card from "../Common/Card"
import SubHeading from '../Common/SubHeading'

function ConsultancyCard() {
  return (
    <div>
      <Container> 
            <SubHeading text="Explore Our Related Services" className="md:text-center"/>
              <div className='flex flex-wrap gap-5 justify-center border-b border-black pb-10'>
                  <Link to="/cash-in-transit">
                     <Card src="https://i.ibb.co/6YDXczN/consulant-One.png" alt="consulantOne" />
                  </Link>

                  <Link to="/event">
                    <Card src="https://i.ibb.co/N3927bF/cash-Three.png" alt="consulantTwo" />
                  </Link>
                  
                  <Link to="/background-screening">
                    <Card src="https://i.ibb.co/9V63MxK/consulant-Three.png" alt="consulantThree" />
                  </Link>
              
              </div>

    </Container>
    </div>
  )
}

export default ConsultancyCard
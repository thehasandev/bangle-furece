import React from 'react'

import SubHeading from '../Common/SubHeading'
import Card from '../Common/Card'
// import BodyGurdOne from "../../assets/bodyGurdOne.png"
// import BodyGurdTwo from "../../assets/bodyGurdTwo.png"
// import BodyGurdThree from "../../assets/bodyGurdThree.png"
import Container from '../Common/Container'
import { Link } from 'react-router-dom'

function BodyGurdCard() {
  return (
    <section className='mt-8'>
      <Container>
          <SubHeading text="Explore Our Related Services" className="md:text-center"/>
          <div className='flex flex-wrap gap-5 justify-center border-b border-black pb-10'>
            
            <Link to="/armed-sequrity-gurd">
               <Card src="https://i.ibb.co/Kjj7qkH/Gunman.png"alt="bodyGurdOne"/>
            </Link>

            <Link to="/road-protect">
               <Card src="https://i.ibb.co/qNqZnwT/body-Gurd-Two.png" alt="bodyGurdTwo"/>
            </Link>

            <Link to="/security-guard-equipments">
              <Card src="https://i.ibb.co/TgFS8HB/body-Gurd-Three.png" alt="bodyGurdThree"/>
            </Link>
            
          </div>
      </Container>
    </section>
  )
}

export default BodyGurdCard
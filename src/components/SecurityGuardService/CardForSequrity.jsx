import React from 'react'


// import SequrityOne from "../../assets/lady.png"
// import SequrityTwo from "../../assets/security.png"
// import SequrityThree from "../../assets/Gunman.png"

import { Link } from 'react-router-dom'
import Card from '../Common/Card'
import SubHeading from "../Common/SubHeading"


function CardForSequrity() {
  return (
    <section className='mt-8'>
      <SubHeading text="Explore Our Related Services" className="md:text-center"/>
        <div className='flex flex-wrap gap-5 justify-center'>
            <Link to="/lady-security-guard">
              <Card src="https://i.ibb.co/F4L9yqS/ladyy.png" alt="sequrityOne" HeadingText="Lady Security Guard Service"/> 
            </Link>

            <Link to="/supervisor">
               <Card src="https://i.ibb.co/nPjfQJg/incharge-One.png"  alt="sequrityTwo" HeadingText="Security Supervisor Service"/>
            </Link>
           
           <Link to="/armed-sequrity-gurd">
             <Card src="https://i.ibb.co/Kjj7qkH/Gunman.png" alt="sequrityThree" HeadingText="Armed Security Service"/>
           </Link>
        </div>
    </section>

  )
}

export default CardForSequrity
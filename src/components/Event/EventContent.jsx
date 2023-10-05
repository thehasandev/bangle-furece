import React from 'react'

import Container from '../Common/Container'
import EventMans from "../../assets/Event-security.png"
import Flex from '../Common/Flex'
import SubHeading from '../Common/SubHeading'

function EventContent() {
  return (
    <section>
        <Container>
        
            <p className='font-roboto font-normal text-base my-5 text-[#444444]'><span className='text-red-600 '>Generation Solution of Security Ltd.</span> highly esteems its private, corporate, and amusement occasion security. This includes event security service not only in Dhaka and CTG but all-around Bangladesh. Regardless of whether it be private VIP occasions, significant amusement shows, or government gatherings, we generally push for the most elevated level of arranging, execution, and industry-driving best practice use.</p>
            <Flex className="justify-center gap-y-5">
            <div>
                <img src={EventMans} alt="Event-security" className='w-[600px]'/>
            </div>
            </Flex>

            <div className='border-b border-black pb-10'>
                <SubHeading text="We Are One of The Leading Event Security Guard Companies in Bangladesh."/>
                <p className='font-roboto font-normal text-base  text-[#444444]'>Generation Solution of Security Ltd. has huge experience with conveying <span className='font-extrabold'>event security guard </span> services and values being one of the leading <span className='font-extrabold'> event security service provider</span> companies in the industry.</p>
                <p className='font-roboto font-normal text-base  text-[#444444]'>We can create and convey custom-tailored security service for an occasion, having effectively done as such for little private occasions and significant occasions more than 80,000 individuals. Obviously, event security is about more than the recruit of a safety officer for an occasion. It requires a complex way to deal with security wanting to ensure the visitors, property, and the scene. We carry an individual and exhaustive way to deal with taking care of the multitude of essential subtleties to initially meet and afterward surpass our customer’s assumptions.</p>
                <SubHeading text="Customized Event Security"/>
                <p className='font-roboto font-normal text-base  text-[#444444]'>We give each customer altered high permeability or a careful way to deal with their events. Each occasion has exceptional and special necessities like site security, portable watches, static gatekeepers, swarm control, well-being and security and so on We comprehend that when you employ security for an event you want the best complete bundle and this is what we give.</p>
                <p className='font-roboto font-normal text-base  text-[#444444]'>Each association needs its visitors and participants to be protected at the occasion, yet they additionally should be happy with sending them in any case. GSSL furnishes the absolute total event package with risk mitigation and security protocols that can be deployed anywhere in Bangladesh.</p>
            
            </div>    

        
        </Container>
    </section>


  )
}

export default EventContent
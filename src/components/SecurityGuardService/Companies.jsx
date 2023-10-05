import React from 'react'

import Container from '../Common/Container'
// import Companins from "../../assets/companis.png"
import Flex from '../Common/Flex'
import SubHeading from '../Common/SubHeading'

function Companies() {
  return (
    <div>
        <section>
           <Container>
                <SubHeading text="How to Find Security Guard Companies"/>
                <p className='font-roboto font-normal text-base  text-[#444444]'>There are many names for a security guard, just google it with the following name; Guard, security guards, Guardsman, Watchman, Protection Agent, Bodyguard, Person to protect a Parties Assets, Executive Protective Agent, <span className='text-red-800'>Armed Security Guard</span>, Armed Security Forces, Protector, Defender, Security Asset, Safety Officer, Watch Person, Fire watch, and Armed guard, bodyguard service, sentry service near me, security guard service near me, patrol service near me, <span className='text-red-800'> security supervisor </span>service ,<span className='text-red-800'> lady guard service</span>, security guard provider, etc.</p><br />
                <Flex className="justify-center">
                  <img src="https://i.ibb.co/4WWbkb3/companis.png" alt="companis" />
                </Flex>
           </Container>
        </section>
     
    </div>
  )
}

export default Companies
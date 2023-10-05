import React from 'react'
import Container from '../Common/Container'
import SubHeading from '../Common/SubHeading'
// import Background from "../../assets/background-screening.png"

function ScreenContant() {
  return (
    <section>
      <Container>
        <SubHeading text="What is Background Screening?"/>
        <p className='font-pop text-sm font-normal text-[#444444]'>Background Screening is a pre-business method to assist with consoling organizations that are employing reliable, sensible people that are fit for playing out the errands required. This screening is significant in light of the fact that it’s a lot harder to fire a worker than stop the recruiting system.</p>
        <SubHeading text="Overview"/>
        <p className='font-pop text-sm font-normal text-[#444444]'>You hired a security guard to guard your house and office. “House rats are biting”, this proverb will not come true? What do you do in that case? How do you know that the security guard you hired is not a thief? What are the things to look for when hiring a security guard and what kind of paperwork can be used to confirm whether a security guard is a thief or not? Background screening is called looking into this matter. For background screening, you need to be surrounded by three levels of security.</p>
        <div className='md:w-[650px] mx-auto'>
           <img src="https://i.ibb.co/9V63MxK/consulant-Three.png" alt="Background" />
        </div>
        <p className='font-pop text-sm font-normal mb-16 mt-5 text-[#444444]'>Only then can you be sure about the security guard. What are those three levels? When hiring a security guard, his papers must be verified. A photocopy of the original national identity card should be kept with the authorities. If you do not have <span className='text-red-600 font-bold'>National Identity Card</span>, then you have to see the copy of his online birth registration and submit a photocopy. A fresh passport-size photo of the guard will be required. All this is to follow the rules of background screening. These can be done by the client himself, or by a professional paid company.</p>
      </Container>

    </section>
  )
}

export default ScreenContant
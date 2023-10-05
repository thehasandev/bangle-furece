import React from 'react'

import Container from '../Common/Container'
import SubHeading from "../Common/SubHeading"
import Window from "../../assets/Window-Cleaning.png"

import Card from '../Common/Card'
import FloorOne from "../../assets/w1.png"
import FloorTwo from "../../assets/w2.png"
import FloorThree from "../../assets/w3.png"
import { Link } from 'react-router-dom'

function WindowCleanContent() {
  return (
    <>
        <section>
                <Container>
                    
                    <p className='font-roboto font-normal text-base my-8  text-[#444444]'>If you are looking for the best window cleaning service in Dhaka, Bangladesh we’re glad you found us! GSSL’s window cleaning service on windows, sills, and sometimes screens of a house or other structure, for aesthetic purposes and/or for safety reasons, has never been more reliable than now with the professionally trained and skilled team at your disposal. Let us wash your windows down to perfection!</p>
                    <SubHeading className="md:text-3xl" text="Do you want your windows to sparkle like diamonds?"/>    
                        
                        <div className='md:w-[650px] mx-auto'>
                            <img src="https://i.ibb.co/JjXWPy2/florTwo.png" alt="Window" />
                        </div>

                    <SubHeading className="md:text-3xl" text="Window Washing at Its Finest"/>    
                    <p className='font-roboto font-normal text-base my-8  text-[#444444]'>If you’re searching for a <span className='font-extrabold'> professional window washing service</span>, we have an experienced crew to suit your needs. We can provide you with professional and spotless window cleaning—whether it’s for residential or commercial purposes. No job is too large or small for our window cleaning service. We work to ensure that each of our customers is completely satisfied with our window washing services.</p>
                    
                   
                
                    <SubHeading className="md:text-3xl" text="Why Window Cleaning is Necessary?" />    
                    <p className='font-roboto font-normal border-b border-black pb-8 text-base my-8 mb-5 text-[#444444]'>Window cleaning is a service performed on windows, sills, and sometimes screens of a house or other structure, for <span className='font-extrabold'> aesthetic purposes and/or for safety reasons</span>. The largest part of window cleaning is done from ladders or <span className='font-bold text-red-600'>scaffolding </span>because it is too high to be reached safely. Ladder-based window cleaners use long-handled brushes with long nap synthetic fiber bristles (called feathering brushes) that are safe to use on glass without scratching it.</p>
                
                </Container>

        </section>


                    {/* Card Part */}
            <section className='mt-5 '>
                <Container>
                    <SubHeading text="Explore Our Related Services" className="md:text-center mt-5"/>
                    <div className='flex flex-wrap gap-5 justify-center border-b border-black pb-10'>
                        
                        <Link to="/glass-clean">
                         <Card  src="https://i.ibb.co/bdjNLNy/florOne.png" alt="FloorOne" HeadingText="Glass Cleaning Service"/>
                        </Link>

                        <Link to="/carpet-clean">
                          <Card src="https://i.ibb.co/TTLmQSG/f2.png"  alt="FloorTwo" HeadingText="Carpet Cleaning Service"/>
                        </Link>

                        <Link to="/sofa-clean">
                        <Card src="https://i.ibb.co/TBjTj1n/Sofa-Cleaning.png" alt="FloorThree" HeadingText="Sofa Cleaning Service"/>
                        </Link>
                    </div>
                </Container>
            </section>

            <section>
                <Container>
                    <SubHeading className="md:text-3xl" text="Getting Professional Help"/>    
                    <p className='font-roboto font-normal text-base my-8  text-[#444444]'>You can hire a <span className='font-extrabold'>window cleaning service</span> or wash your windows yourself, but if you’re on a tight budget and/or you want to avoid getting high up on a ladder, you might want to call in some professionals. There are lots of window cleaning services around, and not all of them are created equal. Get quotes from several different providers—you might be surprised by how much they charge. We provide this service as lowest as possible price.</p>
                
                    <SubHeading className="md:text-3xl" text="What Are Some Helpful Tips?"/>    
                    <p className='font-roboto font-normal text-base my-8  text-[#444444]'>Use a squeegee, not a rag or sponge. You’ll get more water off for each swipe with a squeegee. Wipe your window from top to bottom and side to side—this will allow you to see any streaks as you work, so you can adjust and even them out before they dry on their own. Start your first swipe at one of the <span className='font-extrabold'>top corners of your window</span>, and then pull directly across until you get to another corner.</p>
                
                    <SubHeading className="md:text-3xl" text="Why Choose Us Rather Than Others"/>    
                    <p className='font-roboto font-normal text-base my-8  text-[#444444]'>If you have ever tried other window cleaning services, then you know what a hassle it can be to hire someone that you don’t really know to come into your home and clean. This is where we set ourselves apart from others in our field; our approach is completely different than theirs. We realize how hard it can be for clients like yourself to trust a complete stranger with your house, family, or business.</p>
     
                </Container>

         </section>
    </>
  )
}

export default WindowCleanContent
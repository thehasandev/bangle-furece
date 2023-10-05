import React from 'react'

import Container from '../Common/Container'
import SubHeading from "../Common/SubHeading"
// import Window from "../../assets/Garden-Cleaning.png"

import Card from '../Common/Card'
import { Link } from 'react-router-dom'
// import GardenOne from "../../assets/garder1.png"
// import GardenTwo from "../../assets/garden2.png"
// import GardenThree from "../../assets/garden3.png"

function GardernCleanContant() {
  return (
    <>
         <section>
               <Container>
                    
                    <p className='font-roboto font-normal text-base my-8  text-[#444444]'>When it comes to garden cleaning or lawn and garden maintenance, you have several options. You can do it yourself, or you can hire gardeners on an as-needed basis when the job seems too big to handle on your own. Another option is to use a commercial lawn and garden maintenance service that cleans up lawns, prunes trees and performs general maintenance on lawns and gardens throughout the year. If you want to make sure your yard is always beautiful without having to worry about overgrown weeds or dead grass patches, then this might be the right choice for you.</p>
                    <SubHeading className="md:text-3xl" text="What You Get With Our Garden Cleaning Service"/>    
                     <ul className='pl-5 mb-16'>
                        <li className='font-pop text-base font-medium text-[#44444] mb-5'>✔ Weekly or fortnightly garden maintenance service</li>
                        <li className='font-pop text-base font-medium text-[#44444] mb-5'>✔ Lawn mowing service (as an add-on) </li>
                        <li className='font-pop text-base font-medium text-[#44444] mb-5'>✔ Regular fertilizing for your lawn </li>
                        <li className='font-pop text-base font-medium text-[#44444] mb-5'>✔ Herbicide spraying on your plants. </li>
                        <li className='font-pop text-base font-medium text-[#44444] mb-5'>✔ Weekly, Monthly, Annually  Services Price: Negotiable </li>
                        <li className='font-pop text-base font-medium text-[#44444] mb-5'> Where do we work? Your satisfaction is what matters to us, so we work across all regions of Bangladesh. </li>
                     </ul>

                      
                        <div className='md:w-[650px] mx-auto'>
                            <img src="https://i.ibb.co/ZLBmsVM/sofa-Three.png" alt="Window" />
                        </div>

                    <SubHeading text="Do's and Don'ts For Maintaining Your Garden"/>   
                    <p className='font-roboto font-normal text-base my-8  text-[#444444]'><span className='font-extrabold'>Maintaining your garden</span> is a never-ending activity. Whether you like it or not, plants grow from day to day, which means something needs to be done on a daily basis to keep them healthy. When these things are properly taken care of, all you have to do is take a walk every once in a while to observe that all plants are developing nicely. </p> 
                    <p className='font-roboto font-normal text-base my-8  text-[#444444]'>But if they aren’t, well… It takes some experience to develop a sense of what normal is and what’s too much or too little. That’s why we decided to list down everything you need to do and don’t need to worry about when it comes to maintaining your garden! If you need help with anything specific, feel free to contact us. </p> 
                    
                    <SubHeading text="Do's and Don'ts For Maintaining Your Garden"/>   
                    <p className='font-roboto font-normal border-b border-black pb-8 text-base my-8  text-[#444444]'>We work hard to make sure that your garden is never a mess, even after a big storm. Our <span className='font-bold text-red-600'>professional cleaners</span> will come and tidy up your lawn, tidy up grass from flower beds and remove fallen leaves from flower beds with efficiency. Once they’re done, they’ll also check to see if there are any damages or extra cleaning required so that you can enjoy your garden without worrying about anything. The best part? With our services, we include 100% satisfaction guarantee! If for some reason you aren’t happy with our Garden Cleaning service, we’ll send out another team of garden maintenance professionals free of charge! </p> 
                </Container>
         </section>


   {/* Card Part */}
        <section className='mt-5 '>
            <Container>
                <SubHeading text="Explore Our Related Services" className="md:text-center mt-5"/>
                <div className='flex flex-wrap gap-5 justify-center border-b border-black pb-10'>
                   <Link to="/carpet-clean">
                     <Card src="https://i.ibb.co/TTLmQSG/f2.png"  alt="GardenOne" HeadingText="Carpet Cleaning Service"/>
                   </Link> 

                   <Link to="/window-clean">
                      <Card src="https://i.ibb.co/JjXWPy2/florTwo.png" alt="GardenTwo" HeadingText="Window Cleaning Service"/>
                    </Link> 

                   <Link to="/sofa-clean">
                      <Card src="https://i.ibb.co/TBjTj1n/Sofa-Cleaning.png" HeadingText="Sofa Cleaning Service"/>
                    </Link> 
                </div>
            </Container>
        </section>
    </>
  )
}

export default GardernCleanContant
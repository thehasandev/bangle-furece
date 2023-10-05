import React from 'react'

import Container from '../Common/Container'
import SubHeading from '../Common/SubHeading'
// import CleeninMen from "../../assets/Lady-Cleaner.png"

import Card from '../Common/Card'
import { Link } from 'react-router-dom'
// import CleaningOne from "../../assets/Cleaner-Service (1).png"
// import CleaningTwo from "../../assets/cleanTwo.png"
// import CleaningThree from "../../assets/cleanThree.png"

function LadyCleanerContent() {
  return (
    <>
    <section>
        <Container>
            <p className='font-roboto font-normal text-base my-5 text-[#444444]'>When you looking for the best lady cleaner service or when you need your home or office cleaned, who do you call? Well, if you live in any area of Bangladesh, there’s no need to look any further than GSSL. We offer high-quality, affordable cleaning services that will make your life easier and better. Our name says it all! We are The <span className='font-extrabold'>Best Lady Cleaner service provider</span> near you! When you hire us, you can be sure that we will treat your house as if it were our own. Call us today at </p>
            <p className='text-red-600 font-bold'>+8801911899619</p>
            <SubHeading text="Who We Are" />
            <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>We are a cleaning service provider that cares about your home as much as you do. Our cleaners, who are often referred to as the cleaning ladies, pay attention to every detail so that your house shines with every visit. Based out of [Your Location], we are available at affordable rates and can even schedule visits on weekends and holidays. Call today to learn more about our services.</p>
            <br />

            <div className='md:w-[650px] mx-auto'>
                <img src="https://i.ibb.co/p4wBWDw/cleanOne.png" alt="CleeninMen" />
            <p className='font-roboto font-normal text-base my-5 text-center text-[#444444]'>Image Credit: iStock</p>
            </div>

            <SubHeading text="Who We Are" />
                <ul className='list-disc pl-5 xl:pl-16'>
                  <li className='font-roboto font-bold text-base text-[#444444] mb-2'>Spring cleaning,</li>
                  <li className='font-roboto font-bold text-base text-[#444444] mb-2'>Deep cleaning,</li>
                  <li className='font-roboto font-bold text-base text-[#444444] mb-2'>Oven cleaning,</li>
                  <li className='font-roboto font-bold text-base text-[#444444] mb-2'>Garden cleaning</li>
                  <li className='font-roboto font-bold text-base text-[#444444] mb-2'>Kitchen cleaning, etc.</li>       
                </ul>
               <p className='font-roboto font-normal text-base my-5 border-b border-black pb-8  text-[#444444]'>Our lady cleaners are professional and affordable for all types of homes. Our lady cleaners have a record of being an honest team that is responsible and reliable when comes to your homes. We believe that we provide top-quality services for both private customers as well as businesses. Let us talk about spring cleaning first: The aim of spring cleaning is to freshen up your home after long winter months spent inside. This includes <span className='font-extrabold'> dusting, hoovering, vacuuming carpets, wiping down surfaces</span>, etc.</p>  
        </Container>

    </section>

    {/* Card Part */}
    <section className='mt-5 '>
    <Container>
        <SubHeading text="Explore Our Related Services" className="md:text-center mt-5"/>
        <div className='flex flex-wrap gap-5 justify-center border-b border-black pb-10'>
            <Link to="/cleaning">
               <Card src="https://i.ibb.co/myttGvt/cleaner.png" alt="CleaningOne" HeadingText="Cleaning Service"/>
            </Link>

            <Link to="/cleaning-supervisor">
               <Card src="https://i.ibb.co/PGgjRvk/Cleaning-Supervisor.png" alt="CleaningTwo" HeadingText="Cleaning Supervisor"/>
            </Link>

            <Link to="/cleaning-manager">
               <Card src="https://i.ibb.co/hBPN9xL/clean-Three.png" alt="CleaningThree" HeadingText="Cleaning Incharge"/>
            </Link>
        </div>
    </Container>
    </section> 

    {/* Contant  */}
    <section className='mt-8'>
        <Container>
            <SubHeading text="How Much Does It Cost?"/>
            <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>A lot of people don’t want to spend their money on a cleaning lady, so they try to cut corners and clean their home themselves. But if you’re trying to save money, hiring a cleaning lady is probably your best bet. And we can help you get started by matching you with the best cleaning lady near you! Our professionals know just how to get things sparkling again and keep them that way throughout each week.</p>
            <br />

            <SubHeading text="Why Choose Us"/>
            <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>We are flexible and have lots of time for a fantastic cleaning job. This is why we work so hard to make sure that every home that we clean is done thoroughly with our quick turnaround time. We always listen to each individual’s needs when they come to us, and it’s always nice to hear what they love most about their homes when they return from vacation or business trips.</p>
            <br />
        </Container>
    </section>
    </>



  )
}

export default LadyCleanerContent
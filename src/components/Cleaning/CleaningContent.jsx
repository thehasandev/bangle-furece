import React from 'react'
import Container from '../Common/Container'
// import CleeninMan from  "../../assets/Cleaner-Service.png"
import SubHeading from '../Common/SubHeading'

import Card from '../Common/Card'
import { Link } from 'react-router-dom'
// import CleaningOne from "../../assets/cleanOne.png"
// import CleaningTwo from "../../assets/cleanTwo.png"
// import CleaningThree from "../../assets/cleanThree.png"


function CleaningContent() {
  return (
    <>
    <section>
        <Container>
            <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'><span className='text-red-600 font-bold'>Generation Solution</span> of Security Ltd. is one of the <span className='font-extrabold'>leading cleaning service providers in Bangladesh</span>. So if you looking for any reliable, trustworthy, and also professional house cleaning services company near you! Congratulations, <span className='font-extrabold'>you are in the right place</span>.</p>
            <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'><span className='font-extrabold'>Professional cleaning</span> service in Bangladesh can be of tremendous help to anyone who’s too busy or not good enough at cleaning to do it themselves, but you should know that not all such services are the same. So how do you know which one to choose? Look no further than XYZ Cleaning Service! We have been in the industry since 2016 and have worked with businesses and homeowners in every major city and town in the country, <span className='font-extrabold'>so we have experience with a wide variety of cleaning challenges and solutions</span>.</p>
            <div className='md:w-[650px] mx-auto'>
                <img src="https://i.ibb.co/myttGvt/cleaner.png" alt="CleeninMan" />
            </div>

            <div className='border-b border-black pb-5'>
                <SubHeading text="Home Cleaning Tips" />
                <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>Before you hire a professional house cleaning service, consider what you can do to save money and improve your home. When vacuuming, use low suction for corners, behind objects, and edges. Use a handheld vacuum for crumbs on countertops or around table legs or floors. Wipe up crumbs with damp paper towels. Sweep regularly to keep dirt from getting trapped in carpet or linoleum that requires professional cleaning. Vacuum rugs at least once a week to keep them looking like new.</p>
                <br />

                <SubHeading text="House Cleaning Checklist"/>
                <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>Before you start house cleaning, create a checklist of things to do. This will give you some guidance on where to start and what areas to focus on. Here are some basic steps for house cleaning that may help: Start with small tasks: Try not to overload yourself. Focus on a few tasks at a time—if you can’t do all of them, focus on one or two that need attention and ignore others until later. </p>
                <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>It’s okay if your kitchen sink doesn’t sparkle today; it can wait for another day when you’re feeling more energized and motivated. Be realistic about your limitations: By cleaning in manageable chunks, it’s easier to keep up with regularly scheduled cleanings in between larger deep cleans of difficult-to-clean spaces like ovens or stove-tops.</p>
                <br />

                <SubHeading text="Take Pictures of the House Before the Cleaner Comes"/>
                <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>You may wonder what taking pictures of your house has to do with a professional cleaning service, but we’ll see it soon. Don’t worry if you don’t have a good camera; there are online tools that allow you to take pictures of your home and upload them right away. These types of services give you an idea of what type of cleaners would be best for your house.</p>
                <br />

                <SubHeading text="Preparing Your House For a Deep Clean"/>
                <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>If you want to make sure that your house is in tip-top shape for a professional cleaning service, there are a few things you should do before your visit. Make sure all of your trash bins are empty and take any unwanted items outside. It’s also helpful to remove anything from high shelves or hard-to-reach places so it doesn’t become damaged when the cleaners attempt to scrub them down.</p>
                <br />

                <SubHeading text="Types of Cleansers And Their Uses"/>
                <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>Multi-purpose cleaners are often preferable to single-purpose cleaners because they can be used to clean just about anything. For example, if you need to clean both counters and floors, a multi-purpose cleaner is a good choice. If you’re looking for something that can tackle multiple types of messes but don’t want to use harsh chemicals in your home, look for an all-natural cleaner made with essential oils, such as orange or lemon.</p>
                <br />

                <SubHeading text="Basic Tools for House Cleaning"/>
                <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>For a small investment, you can pick up basic cleaning tools that will last for many years. To start, you’ll need cleaning rags or cloths (don’t waste money on paper towels), some rubber gloves, a bucket and mop with a removable pad, and disinfectant spray or wipes. You may also want to invest in an air freshener or deodorizer.</p>
            </div>
        </Container>
    </section>

{/* Card Part */}
    <section className='mt-5 '>
        <Container>
            <SubHeading text="Explore Our Related Services" className="md:text-center mt-5"/>
            <div className='flex flex-wrap gap-5 justify-center border-b border-black pb-10'>
                
                <Link to="/lady-cleaner">
                   <Card src="https://i.ibb.co/p4wBWDw/cleanOne.png" alt="CleaningOne" HeadingText="Lady Cleaner Service"/>
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
        <SubHeading text="When To Hire Professional Cleaning Service Provider"/>
         <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>If you’re like most homeowners, you spend hours dusting, vacuuming, and scrubbing your way through each week. Between work and family commitments, though, it can be hard to keep up with all of these chores—and once in a while, you might need a little help keeping your home fresh and clean. When that happens, it’s time to hire a professional cleaning service!</p>
         <br />

        <SubHeading text="Benefits Of Hiring A Professional Cleaner"/>
         <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>Let’s be honest, you don’t have time to do it all. Between work, family, and other responsibilities, keeping your home clean can easily fall off your list of priorities. If you find yourself complaining about having too much to do at home but not enough time to get it done—why not consider hiring a professional cleaner like us? Our cleaners can handle everything from dusting and vacuuming to changing sheets and taking out the trash. It’s pretty much a given that people with busy lifestyles benefit greatly from hiring a cleaning service, so why not take advantage of one?</p>
         <br />
        <SubHeading text="Why Choose Our Professional Cleaning Services"/>
         <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>We have got a team of trained, highly experienced, and friendly cleaners. You can schedule an appointment on our website or call us. We will send you a quote that is free and with no obligation. We use eco-friendly products that are safe for you, your family, and your pets. When we are done cleaning your home it will look like new! Our professional cleaning service in Bangladesh has been around since 2016 and has more than 5 years of experience with domestic as well as commercial cleaning. We serve Dhaka city 24/7 for all kinds of commercial/domestic requirements.</p>
         <br />
    </Container>
</section>
    
    </>
  )
}

export default CleaningContent
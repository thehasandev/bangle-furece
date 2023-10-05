import React from 'react'

import Container from '../Common/Container'
import SubHeading from "../Common/SubHeading"
// import Glass from "../../assets/Carpet-Cleaning.png"
import GlassTwo from "../../assets/Carpet-Cleaning-Before-After.png"

import Card from '../Common/Card'
// import FloorOne from "../../assets/florOne.png"
// import FloorTwo from "../../assets/florTwo.png"
// import FloorThree from "../../assets/florThree.png"

function CarpetCleaningContent() {
  return (
    <>
        <section>
          <Container>
              <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>If you need to get your carpets clean, you have many carpet cleaning service options in Dhaka and you should be able to find something that fits your needs and budget. You should consider the reputation of the business and what it promises to do for you, but also remember that great reputation doesn’t necessarily translate into great results. The best way to tell whether you’re going to get the results you want from any service provider is to ask them these three questions: Do they guarantee their work? What can they do to make sure your carpets are as clean as possible? And how often do they clean their own carpets?</p>
              <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>The best professional carpet cleaning services in Dhaka are provided by GSSL, an experienced and well-established company that has been offering these services since 2016. Our customers are our priority, so we ensure that we provide them with the best possible service at all times. All our technicians are well-trained to perform a high-quality job every time they visit your home or office, and all our equipment is the latest in the industry so you can be sure you’re getting top-quality workmanship.</p>
                  <div className='md:w-[650px] mx-auto'>
                      <img src="https://i.ibb.co/TTLmQSG/f2.png" alt="Glass" />
                  </div>

              <SubHeading className="md:text-3xl" text="What Makes Us Better Than Other Carpet Cleaners?"/>    
              <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>The first thing that makes us better than other carpet cleaners is our cleaning solutions. We only use environmentally friendly, high-quality carpet cleaning solutions that leave your carpets looking new and smelling fresh for weeks after we’ve finished. And because we’re licensed, you can rest assured that you won’t be breathing in any harmful chemicals during or after our service. We also pride ourselves on being highly professional and efficient at what we do.</p>
              
              <SubHeading className="md:text-3xl" text="Methods We Use For Carpet Cleaning"/>    
              <p className='font-roboto border-b border-black pb-8 font-normal text-base my-8 mb-5 text-[#444444]'>Our cleaning methods include <span className='font-extrabold'> Hot Water Extraction, Cold Water Extraction, Dry Foam Cleaning and Steam Cleaning</span>. While all our carpet cleaning services use a hot water extraction process, cold water extraction is a very similar process that uses cold water instead of hot. It’s not as thorough as steam or dry foam extractions and it can’t remove some types of stains, but it still has many benefits!</p>

          </Container>

        </section>

    {/* Card Part */}
          <section className='mt-5 '>
            <Container>
                <SubHeading text="Explore Our Related Services" className="md:text-center mt-5"/>
                <div className='flex flex-wrap gap-5 justify-center border-b border-black pb-10'>
                    <Card src="https://i.ibb.co/TTLmQSG/f2.png"  alt="FloorOne" HeadingText="Glass Cleaning Service"/>
                    <Card src="https://i.ibb.co/JjXWPy2/florTwo.png" alt="FloorTwo" HeadingText="Window Cleaning Service"/>
                    <Card src="https://i.ibb.co/TBjTj1n/Sofa-Cleaning.png" alt="FloorThree" HeadingText="Sofa Cleaning Service"/>
                </div>
            </Container>
         </section>



         <section>
            <Container>
                <SubHeading className="md:text-3xl" text="Benefits of Carpet Cleaning"/>    
                <p className='font-roboto font-normal text-base my-8  text-[#444444]'>A new carpet is a big investment, and you want to make sure it stays in good condition. That’s why regular professional cleaning is essential to prevent dirt and grime from building up, which can ruin your carpet. The right carpet cleaning service will come with added benefits, like protecting your furniture from scuffs and dulling or even restoring color if you’ve spilled liquids on your carpet.</p>
                
                <SubHeading className="md:text-3xl" text="What People Say About Us"/>    
                <p className='font-roboto font-normal text-base my-8  text-[#444444]'>People say we are one of the best carpet cleaning service companies in Bangladesh. The reliable and professional staff of our company do a great job with every customer. Our cleaners will make your place look like new! The reviews on Yelp say it all. If you want to make your home clean and fresh, just call us now! (Feel free to check our Google Review for reference)</p>
                
                <SubHeading className="md:text-3xl" text="Our Goal"/>    
                <p className='font-roboto font-normal text-base my-8  text-[#444444]'>to provide high-quality services at an affordable price. We offer: carpet cleaning, upholstery cleaning, tile and grout cleaning, water damage restoration, and more.</p>
               
                <SubHeading className="md:text-3xl" text="Testimonials From Clients"/>    
                <p className='font-roboto font-normal text-base my-8  text-[#444444]'>People often ask us about our carpet cleaning process. Here is what we do: First, we will analyze your carpet to determine exactly which cleaning solution to use. We also run a diagnostic test on your carpets to check for any issues (static electricity, gum stuck on the bottom of fabric, etc.) that may not be visible but can affect how your carpets clean up.</p>
               
                <div className='md:w-[650px] mx-auto'>
                      <img src={GlassTwo} alt="Glass" />
                </div>

                <SubHeading className="md:text-3xl" text="Contact Us"/>    
                  <p className='font-roboto font-normal text-base my-5 text-[#444444]'> To get our service, talk with our experts and book your service right now.</p>
                  <p className='font-roboto font-normal text-base my-5 text-[#444444]'>Generation Solution of Security Ltd.</p>
                  <p className='font-roboto font-normal text-base my-5 text-[#444444]'>House # 419, (3rd Floor) Road # 30,</p>
                  <p className='font-roboto font-normal text-base my-5 text-[#444444]'>New DOHS Mohakhali, Dhaka 1212.</p>
                  <button className='font-pop font-bold text-base px-8 py-4 bg-primary text-white rounded-sm'>Call Now</button> 
            </Container>

        </section>
    
    </>



  )
}

export default CarpetCleaningContent
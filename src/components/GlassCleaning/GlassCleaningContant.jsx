import React from 'react'

import Container from '../Common/Container'
import SubHeading from "../Common/SubHeading"
// import Glass from "../../assets/Glass-Cleaning-Service.png"

import Card from '../Common/Card'
import { Link } from 'react-router-dom'
// import FloorOne from "../../assets/g1.png"
// import FloorTwo from "../../assets/g2.png"
// import FloorThree from "../../assets/g3.png"

function GlassCleaningContant() {
  return (
    <>
        <section>
          <Container>
            
              <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>If you’re looking for a glass cleaning service near you in Bangladesh, look no further than GSSL BD. We’ve been providing superior glass cleaning services to both businesses and homes throughout the country since 2016, using only the most advanced cleaning technology and state-of-the-art equipment available. Our trained glass cleaner can provide both residential and commercial glass cleaning, including window cleaning, shower doors, mirrors, etc., as well as work with construction sites to ensure all of their glass surfaces are clean and clear before they begin putting up new buildings or remodeling existing ones.</p>
                  <div className='md:w-[650px] mx-auto'>
                      <img  src="https://i.ibb.co/bdjNLNy/florOne.png" alt="Glass" />
                  </div>

              <SubHeading className="md:text-3xl" text="Why Do You Need A Glass Cleaning Service?"/>    
              <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>If you’re like most people, you don’t have time to clean your glasses every day. This is why professional glass cleaning services are so popular—they save us a lot of time and effort by making our glasses look new again. Most people don’t even realize how much dirt accumulates on their glasses until they get them professionally cleaned at least once per year.</p>
              
              <SubHeading className="md:text-3xl" text="When Should I Contact A Professional Glass Cleaning Company?" />    
              <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>Although many people have an arsenal of cleaning products and supplies in their homes, a glass cleaning company will have some expertise that you won’t. If you have glass surfaces in your home that are important to maintaining—like your front door, bathroom mirrors, shower doors, or windows—then it’s wise to contact a professional service to keep them looking great.</p>
        
              <SubHeading className="md:text-3xl" text="How Does The Glass Cleaning Process Work?" />    
              <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>Before we can clean your glass products, you must provide us with some information. A cleaner will schedule a time to come out and assess your products to make sure they are suitable. This allows us to determine which steps we need to take in order to restore their original shine. We do not use harsh chemicals so all our cleaning solutions are biodegradable and safe for use around people, pets, and plants that might be nearby.</p>
        
          </Container>

        </section>

            {/* Card Part */}
        <section className='mt-5 '>
            <Container>
                <SubHeading text="Explore Our Related Services" className="md:text-center mt-5"/>
                <div className='flex flex-wrap gap-5 justify-center border-b border-black pb-10'>
                   <Link to="/floor-clean">
                      <Card src="https://i.ibb.co/NsHN5W6/Floor-Cleaning.png" alt="FloorOne" HeadingText="Floor Cleaning Service"/>
                   </Link>

                   <Link to="/carpet-clean">
                      <Card src="https://i.ibb.co/TTLmQSG/f2.png"  alt="FloorTwo" HeadingText="Carpet Cleaning Service"/>
                   </Link>

                   <Link to="/window-clean">
                    <Card src="https://i.ibb.co/JjXWPy2/florTwo.png" alt="FloorThree" HeadingText="Window Cleaning Service"/>
                   </Link>
                </div>
            </Container>
        </section>


        <section>
            <Container>
                <SubHeading className="md:text-3xl" text="Benefits of Cleaning Glasses Regularly"/>    
                <p className='font-roboto font-normal text-base my-8  text-[#444444]'>It’s no secret that cleaning your glasses regularly ensures optimal clarity and increases visibility. Regularly maintaining glass surfaces is essential to protect them from scratches, smudges, dirt, dust, and other grime. Just like you take care of your teeth at home by brushing twice a day and flossing once a day, regular glass maintenance keeps your glasses looking brand new.</p>
              
                <SubHeading className="md:text-3xl" text="Do You Offer Price Quotes Over The Phone?"/>    
                <p className='font-roboto font-normal text-base my-8  text-[#444444]'>Yes, we offer glass cleaning services at an affordable price. We guarantee that you will be satisfied with our work and would recommend us to your friends and family as well. Get in touch with us today! Call: +8801911899619</p>
              
                <SubHeading className="md:text-3xl" text="Will My Floor Get Damaged During The Cleaning Process?"/>    
                <p className='font-roboto font-normal text-base my-8  text-[#444444]'>We understand that you have many questions regarding our glass cleaning process. We can assure you that your floor will not be damaged in any way during our cleaning. We only use appropriate chemicals to ensure your floors are kept in their best condition after we are done with them. Glasses will be cleaned with the utmost care, so no worries on that front either!</p>
              
                <SubHeading className="md:text-3xl" text="Why You Should Choose Us As Your Glass Cleaning Partner"/>    
                <p className='font-roboto font-normal text-base my-8  text-[#444444]'>For all glass cleaning services, we use organic and non-toxic products only. We have been providing high-quality glass cleaning services across Bangladesh for the past several years and our customers are always happy with our work. Since we provide 24/7 glass cleaning service, you can call us anytime to schedule an appointment for your home or office. Most of our customers contact us to clean their glasses due to either allergies or just because they want a more pleasant smell in their homes.</p>
              
            </Container>

        </section>



    </>
  )
}

export default GlassCleaningContant
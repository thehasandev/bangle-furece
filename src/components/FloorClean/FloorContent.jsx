import React from 'react'

import Container from '../Common/Container'
import SubHeading from '../Common/SubHeading'
// import FloorMan from "../../assets/Floor-Cleaning.png"

import Card from '../Common/Card'
// import FloorOne from "../../assets/f1.png"
// import FloorTwo from "../../assets/f2.png"
// import FloorThree from "../../assets/f3.png"

function FloorContent() {
  return (

    <>
    
    <section>
        <Container>
            <SubHeading text="10 Reasons to Consider Hiring a Professional Floor Cleaning Service"/>
             <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>Understanding the best way to clean your floors can be confusing, especially if you aren’t sure  what will make them look their best. This is why <span className='font-extrabold'> hiring a professional floor cleaning service</span> can be so helpful – it can take away the guesswork and ensure that your flooring always looks its best. Here are 10 reasons why it might be the right decision for you and your home or business.</p>
                <div className='md:w-[650px] mx-auto'>
                    <img src="https://i.ibb.co/NsHN5W6/Floor-Cleaning.png" alt="Floor-Cleaning" />
                </div>

            <SubHeading text="1) Save Your Valuable Time" className="md:text-3xl"/>    
            <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>Instead of spending hours on your hands and knees mopping the floors, you can have professional cleaners do it for you. Our floor cleaning services will save you time.</p>
            
            <SubHeading text="2) Maintain a Clean Home" className="md:text-3xl"/>    
            <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>A dirty home is more than just unsightly—it can be unhealthy and can lower your quality of life. If you struggle with maintaining a clean home, hiring a commercial cleaning service might be what you need.</p>
            
            <SubHeading text="3) No backbreaking work" className="md:text-3xl"/> 
            <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>One of the best reasons for hiring professional tile cleaning services is that you won’t have to get down on your hands and knees to scrub away at grout. Trust us, there’s nothing better than having someone else do all that work for you!</p>
            
            <SubHeading text="4) No dangerous chemicals or fumes" className="md:text-3xl"/>    
            <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>When you’re mopping your floors, you don’t have to worry about accidentally spilling chemicals or fumes from these cleaners onto yourself. This can be dangerous if inhaled, and it can also interfere with tasks like cooking. Using our professional tile cleaner in your home, office or business is completely safe. Our cleaning process uses little-to-no water and won’t make a mess of your place!</p>
            
            <SubHeading text="5) Safe for pets, children and furniture" className="md:text-3xl"/>    
            <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>When you clean your floors with just soap and water, or with harsh chemicals, those surfaces will often come back dirty quickly. Sure, they may be clean in the short term, but mopping your floor every day—which can take up valuable time—can lead to problems down the road. When you hire a professional floor cleaning service for your floor maintenance needs, you can count on long-term results and care for your floors.</p>
         
            <SubHeading text="6) Long-term results" className="md:text-3xl"/>    
            <p className='font-roboto border-b border-black pb-8 font-normal text-base my-8 mb-5 text-[#444444]'>Mops are generally safe for pets, children, and furniture; however, many people prefer not to take any chances. For example, some floors may have coatings that scratch easily when mopped by hand. If you have pets or children who might run on your floors during your cleaning service’s visit, it’s best to be cautious about what kind of mop you use. In addition, tile and wood can get scratched if wet pads slip off your mop head onto these surfaces.</p>
         
        </Container>

    </section>

    {/* Card Part */}
        <section className='mt-5 '>
            <Container>
                <SubHeading text="Explore Our Related Services" className="md:text-center mt-5"/>
                <div className='flex flex-wrap gap-5 justify-center border-b border-black pb-10'>
                    <Card src="https://i.ibb.co/myttGvt/cleaner.png" alt="FloorOne" HeadingText="Cleaning Service"/>
                    <Card src="https://i.ibb.co/TTLmQSG/f2.png"  alt="FloorTwo" HeadingText="Carpet Cleaning"/>
                    <Card src="https://i.ibb.co/JjXWPy2/florTwo.png" alt="FloorThree" HeadingText="Window Cleaning"/>
                </div>
            </Container>
        </section>



        {/* Contant  */}
        <section className='mt-8'>
            <Container>
                <SubHeading text="7) Better than doing it yourself" className="md:text-3xl"/>
                <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>Do you like to keep your floors shiny and clean? Many people who own their homes don’t mind doing some cleaning work themselves, but if mopping and sweeping don’t fall under your definition of fun, hiring a professional floor cleaning service may be in order. Floor cleaners are trained professionals whose business is keeping tile, stone, laminate, and other floor surfaces looking spotless.</p>
                
                <SubHeading text="8) Your time is worth money" className="md:text-3xl"/>
                <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>If you’re like most people, you have enough on your plate without worrying about cleaning it. An expert floor cleaning service saves you time and money by doing all of the hard work for you. Let an expert do what they do best, while you get back to what’s important—the future of your business!</p>
                
                <SubHeading text="9) Reduce allergy symptoms" className="md:text-3xl"/>
                <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>One of the most common causes of sneezing, coughing, and itchy eyes are exposed to allergens. This is especially true for those who suffer from seasonal allergies. Although there are many over-the-counter treatments available, keep in mind that these products can have harsh chemicals and other harmful ingredients in them. While they might give you relief, they can also cause unwanted side effects. To get allergy relief without any risk, consider hiring an experienced floor cleaning service in your area!</p>
                
                <SubHeading text="10) Beautiful floors are healthier floors!" className="md:text-3xl"/>
                <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>When floors are clean, you and your family can breathe easier. Homes that get professional floor cleaning services also tend to have lower levels of dust and allergens than homes that don’t. And even better? They save you time by keeping your floors looking shiny and beautiful for years!</p>
            </Container>
        </section>
    </>



  )
}

export default FloorContent
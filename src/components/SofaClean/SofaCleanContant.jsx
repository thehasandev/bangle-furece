import React from 'react'

import Container from '../Common/Container'
import SubHeading from "../Common/SubHeading"
// import Sofa from "../../assets/Sofa-Cleaning.png"
// import SofaSet from "../../assets/Sofa-Cleaning-Service-Before-After-768x507.png"

import Card from '../Common/Card'
import { Link } from 'react-router-dom'
// import SofaOne from "../../assets/sofaOne.png"
// import SofaTwo from "../../assets/sofaTwo.png"
// import SofaThree from "../../assets/sofaThree.png"

function SofaCleanContant() {
  return (

    <>
    <section>
        <Container>
            <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>To keep your <span className='font-extrabold'> sofa clean and new looking, regular cleaning is necessary</span>. But you don’t have to lookout anyone else to do the job! We can provide you with an excellent sofa cleaning service in Dhaka at an affordable price that’s sure to fit your budget. Our well-trained and experienced sofa cleaners will take care of every detail so you don’t have to lift a finger. Give us a call today, and we’ll make sure you get our <span className='font-extrabold'> best sofa cleaning service!</span></p>
            
                <div className='md:w-[650px] mx-auto'>
                    <img src="https://i.ibb.co/TBjTj1n/Sofa-Cleaning.png" alt="Sofa" />
                </div>

            <SubHeading className="md:text-3xl" text="How We Wash Your Sofa"/>    
            <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>First, we take out all your sofas from their place and give them <span className='font-extrabold'>complete vacuuming</span>. Then our skilled professionals wash every inch of your sofa with a special cleaning solution to ensure it is thoroughly cleaned. For further <span className='text-red-600 font-bold'>protection against</span> dirt and dust, we also apply Scotchgard Protector on all fabrics of your sofas after they are dry.</p>
            
            <SubHeading className="md:text-3xl" text="Benefits of Dry Sofa Washing"/>    
            <p className='font-roboto  font-normal text-base my-8 mb-5 text-[#444444]'>If you are wondering why <span className='font-extrabold'>dry couch washing is considered as best sofa cleaning</span>, read on for the benefits of dry couch washing. Dry couch washing ensures that your sofas or couches are cleaned without causing any damage to your sofa or fabric. This technique can clean all kinds of upholstery material from natural fibers like cotton and linen to synthetic materials like polyester and microfiber.</p>
            <p className='font-roboto border-b border-black pb-8 font-normal text-base my-8 mb-5 text-[#444444]'>Our approach to <span className='font-extrabold'> cleaning furniture</span> is dry, which eliminates any risk of harm to your fabrics. We use non-toxic chemicals that are safe and effective on all fabrics, including delicate materials like silk. Dry sofa washing leaves no moisture behind and doesn’t cause shrinkage or damage to your fabrics. This means less chance of mold growth as well!</p>

        </Container>

    </section>

        {/* Card Part */}
        <section className='mt-5 '>
              <Container>
                  <SubHeading text="Explore Our Related Services" className="md:text-center mt-5"/>
                  <div className='flex flex-wrap gap-5 justify-center border-b border-black pb-10'>
                     <Link to="/cleaning">
                       <Card src="https://i.ibb.co/myttGvt/cleaner.png" alt="SofaOne" HeadingText="Cleaning Service"/>
                     </Link>

                     <Link to="/floor-clean">
                       <Card src="https://i.ibb.co/NsHN5W6/Floor-Cleaning.png" alt="SofaTwo" HeadingText="Floor Cleaning Service"/>
                     </Link>

                     <Link to="/gardern-clean">
                       <Card src="https://i.ibb.co/ZLBmsVM/sofa-Three.png" alt="SofaThree" HeadingText="Garden Cleaning Service"/>
                     </Link>
                  </div>
              </Container>
        </section>


        <section>
            <Container>
                <SubHeading className="md:text-3xl" text="Cost Of Our Couch Cleaning Services"/>    
                <p className='font-roboto font-normal text-base my-8  text-[#444444]'>– 2 Seater: 1500 TK – 3 Seater: 1700 TK – 4 Seater: 2000 TK</p>
              
                <SubHeading className="md:text-3xl" text="Before And After Pictures Of Our Sofa Washing Work"/>    
                <div className='md:w-[650px] mx-auto'>
                      <img src="https://i.ibb.co/BcznHx2/a.png" alt="SofaSet" />
                </div>
                
                <p className='font-roboto font-normal text-base my-8  text-[#444444]'>See how efficient our sofa cleaning method is. Notice that after cleaning you can barely see any dirt marks or stains on our sofas. That’s what we call a perfect job done! Don’t hesitate to give us a call for your FREE quotation today!</p>

                <SubHeading className="md:text-3xl" text="Why Choose Us"/>    
                <p className='font-roboto font-normal text-base my-8  text-[#444444]'>We at GSSL understand how precious your sofa is to you. Our expert sofa cleaning team uses a dry cleaning technique that is safe and non-toxic, it ensures that your sofa is cleaned thoroughly without causing any damage to the material. We offer our service to both domestic and commercial customers across Bangladesh.</p>

              
                <SubHeading className="md:text-3xl" text="Contact Us"/>    
                <p className='font-roboto font-normal text-base my-8  text-[#444444]'>To know more about our sofa cleaning service and to hire us, you can simply email us or call us anytime. We will try our best to answer all your questions. Visit our website and check out some of our testimonials from people who have used our service earlier. You can also check google reviews and see for yourself how many people are using <span className='font-extrabold'>our sofa cleaning services</span> in Bangladesh.</p>


                
            </Container>

        </section>
    </>
  )
}

export default SofaCleanContant
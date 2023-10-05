import React from 'react'
import Container from '../Common/Container'
import SubHeading from '../Common/SubHeading'
import Awad from "../../assets/awad.jpg"

import Sequrity from "../../assets/Security-ContantOne.png"
import BodyGurd from "../../assets/eventTwo.png"
import Cleanar from "../../assets/Cleaner-Service.png"
import Lady from "../../assets/Lady-Security-Guard.png"
import ManOne from "../../assets/c1.png"
import ManTwo from "../../assets/c2.png"
import ManThree from "../../assets/c3.png"
import Stacker from "../../assets/Stacker.png"

import { Link } from 'react-router-dom'
import Flex from '../Common/Flex'

import TrushtOne from "../../assets/tOne.png"
import TrushtTwo from "../../assets/tTwo.png"
import TrushtThree from "../../assets/tThree.png"
import TrushtFour from "../../assets/tFour.png"
import TrushtFive from "../../assets/tFive.png"
import TrushtSix from "../../assets/tSix.png"
import TrushtSeven from "../../assets/tSeven.png"
import TrushtEight from "../../assets/tEight.png"
import TrushtNine from "../../assets/tNine.png"
import TrushtTen from "../../assets/tTen.png"

import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";


function ChooseContant() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    arrows:false,
  };
  return (
    <div>
        <section className='my-8'>
            <Container>
                <div className='flex flex-wrap gap-x-16 gap-y-10'> 

                   <div className='md:w-[750px]'>
                    <SubHeading text="About Us"/>
                    <p className='font-pop font-normal mt-5 text-base text-[#444444] '>We are the <span className='font-bold text-red-800'>leading security company in Bangladesh</span>, but we aren’t afraid to admit that other great security companies are out there.</p>
                    <p className='font-pop font-normal mt-5 text-base text-[#444444]  '>However, our success comes from making your needs our top priority and giving you the best service possible regardless of the circumstance. When you choose us over another security company, you’re working with one of the most successful companies in Bangladesh that have been ranked #1 in customer service more than once & we are also ISO 9001:2015 Certified. With options like that available, how could you not choose us?</p>
                    <p className='font-pop font-normal mt-5 text-base text-[#444444] '>Contact us today to learn more about our services and how we can help you make your business safe and secure.</p>
                    <button className='font-pop font-normal mt-5 text-xl text-white  px-10 py-4 bg-primary rounded-full '>Learn More</button>
                   </div>

                   <div className='md:w-[400px]'>
                     <div className='xl:w-[380px]'>
                        <img src="https://i.ibb.co/LCG8zjQ/awad.jpg" alt="Awad" />
                     </div>
                   </div>
                  
                </div>
            </Container>
        </section>


        <section className='my-16'>
            <Container>
                    <SubHeading text="Why Choose Us" className="md:text-center md:mb-16"/>
                    <div className='flex flex-wrap gap-y-10 justify-between'>
                        <div className='w-[300px] mx-auto'>
                            <h2 className='font-pop font-bold text-center text-2xl text-primary'>Hassle Free</h2>
                            <p className='font-pop font-normal text-center mt-2 text-base text-[#444444]'>We provide hassle free security services</p>
                        </div>

                        <div className='w-[300px] mx-auto'>
                            <h2 className='font-pop font-bold text-center text-2xl text-primary'>Availability</h2>
                            <p className='font-pop font-normal text-center mt-2 text-base text-[#444444]'>We are available 24/7 - Call us anytime</p>
                        </div>

                        <div className='w-[300px] mx-auto'>
                            <h2 className='font-pop font-bold text-center text-2xl text-primary'>Emergency</h2>
                            <p className='font-pop font-normal text-center mt-2 text-base text-[#444444]'>We are ready to serve on emergency requirements</p>
                        </div>

                        <div className='w-[300px] mx-auto'>
                            <h2 className='font-pop font-bold text-center text-2xl text-primary'>Reserve Force</h2>
                            <p className='font-pop font-normal text-center mt-2 text-base text-[#444444]'>We have backup reserve force of security guards</p>
                        </div>
                    </div>

            </Container>
        </section>


        <section className='my-8'>
            <Container>
                <div className='flex flex-wrap gap-10 justify-between'> 
                   <div className='w-[500px] mx-auto'>
                     <SubHeading text="Our Relationship with Clients" className="md:w-[400px]"/>
                     <p className='font-pop font-medium mt-2 text-base text-[#444444]'>By cultivating strong, direct relationships with clients, we’re able to offer bespoke solutions that tailor to their specific needs. These relationships are one of our strengths. We work directly with clients and have a long list of satisfied customers. In fact, over 90% of our business comes from repeat clients and referrals! Our team leaders meet regularly with management teams at all our client organizations. This enables them to develop expert insight into each client’s security goals and ensure that their services meet these goals by continuously refining service plans.</p>
                   </div>

                   <div className='w-[700px] mx-auto'>
                         <div className='flex flex-wrap gap-y-10 justify-between'>

                              <div className='w-[320px] mx-auto'>
                                  <Link to="/security-guard">
                                    <img src="https://i.ibb.co/HrpNtF4/event-Three.png" alt="Sequrity" />
                                  </Link>
                                  <h2 className='font-pop font-bold my-2  text-2xl  text-primary'>Security Guard</h2>
                                  <p className='font-pop font-medium  text-base text-[#444444]'>A security guard is a trained professional who helps to protect people and property. Security guards are an important part of any organization, and they can help to keep everyone safe.</p>
                              </div>
                     
                              <div className='w-[320px] mx-auto'>
                                  <Link to="/body-gurd">
                                    <img src="https://i.ibb.co/hfBj5X4/armedTwo.png" alt="BodyGurd" />
                                  </Link>
                                  <h2 className='font-pop font-bold my-2  text-2xl  text-primary'>Close Protection</h2>
                                  <p className='font-pop font-medium  text-base text-[#444444]'>Close Protection Services are security services that are provided to protect a person or group of people. The people who are being protected are known as the "principal."</p>
                              </div>
                     
                              <div className='w-[320px] mx-auto'>
                                  <Link to="/cleaning">
                                    <img src="https://i.ibb.co/myttGvt/cleaner.png" alt="Cleanar" />
                                  </Link>
                                  <h2 className='font-pop font-bold my-2  text-2xl  text-primary'>Cleaning</h2>
                                  <p className='font-pop font-medium  text-base text-[#444444]'>Looking for a reliable and affordable cleaning service? Look no further than GSSL! We offer a wide range of cleaning services to suit your needs, and our prices are unbeatable. Contact us today to learn more!</p>
                              </div>
                     
                  
                              <div className='w-[320px] mx-auto'>
                                  <Link to="/lady-security-guard">
                                    <img src="https://i.ibb.co/F4L9yqS/ladyy.png" alt="Lady" />
                                  </Link>

                                  <h2 className='font-pop font-bold my-2  text-2xl  text-primary'>Lady Checker</h2>
                                  <p className='font-pop font-medium  text-base text-[#444444]'>Looking for a reliable and professional Lady Guard service? Look no further than GSSL! Our Lady Guards are highly trained and experienced professionals who are dedicated to providing our clients with the best possible service.</p>
                              </div>
                     
                  
                         </div>

                         
                   </div>
                </div>
            </Container>
        </section>

        <section className='my-16'>
           <Container>
               <SubHeading text="Our Team" className="md:w-[400px] mx-auto text-center" />
               <p className='font-pop font-medium text-center  text-base text-[#444444]'>At GSSL, we have a team of skilled professionals who are experts in their field. With years of experience, our team members are able to provide you with the best possible service. Whether you need help with a project or just have a question, our team is here to help you.</p>
               
               <div className='flex flex-wrap items-center justify-center my-8'>

                   <div className='w-[400px]'>
                      <Flex className="justify-center">
                        <img src="https://i.ibb.co/0JqRZJ7/c1.jpg" alt="ManOne" />

                      </Flex>
                        <h2 className='font-pop font-medium  text-center my-2 text-2xl text-primary'>Rajib Sarker</h2>
                        <p className='font-pop font-medium text-center text-base text-[#444444]'>Head of Business Development & Planning</p>
                    </div>

                   <div className='w-[400px]'>
                      <Flex className="justify-center">
                        <img src="https://i.ibb.co/Jpztgkq/c2.jpg" alt="ManTwo" />

                      </Flex>
                        <h2 className='font-pop font-medium  text-center my-2 text-2xl text-primary'>Ziad Mannan</h2>
                        <p className='font-pop font-medium text-center text-base text-[#444444]'>Head of Operation</p>
                    </div>

                   <div className='w-[400px]'>
                      <Flex className="justify-center">
                        <img src="https://i.ibb.co/mb4rqDX/c3.png"alt="ManThree" />

                      </Flex>
                        <h2 className='font-pop font-medium  text-center my-2 text-2xl text-primary'>Mashiur Rahman</h2>
                        <p className='font-pop font-medium text-center text-base text-[#444444]'>Head of IT & Digital Marketing</p>
                    </div>
               </div>
           </Container>
        </section>

        <section className='my-8'>
          
           <Container>
                <h2 className='font-roboto mb-16 text-primary font-semibold text-4xl text-center md:w-[800px] mx-auto  relative after:absolute after:content-[""] after:h-[1px] after:w-[200px] after:bg-red-600 after:bottom-[-18px] after:left-1/2 mt-16 after:translate-x-[-50%] after:rounded-full'>Trusted By</h2>
                <Slider {...settings}>
                                <div>
                                  <div className='mr-5'>
                                    <img src={TrushtOne} alt="TrushtOne" />  
                                  </div>
                                </div>

                                <div>
                                  <div className='mr-5'>
                                    <img src={TrushtTwo} alt="TrushtTwo" />
                                  </div>
                                </div>
                              
                                <div>
                                  <div className='mr-5'>
                                    <img src={TrushtThree} alt="TrushtThree" />
                                  </div>
                                </div>

                                <div>
                                  <div className='mr-5'>
                                    <img src={TrushtFour} alt="TrushtFour" />
                                  </div>
                                </div>

                                <div>
                                  <div className='mr-5'>
                                    <img src={TrushtFive} alt="TrushtFive" />
                                  </div>
                                </div>

                                <div>
                                  <div className='mr-5'>
                                    <img src={TrushtSix} alt="TrushtSix" />
                                  </div>
                                </div>

                                <div>
                                  <div className='mr-5'>
                                    <img src={TrushtSeven} alt="TrushtSeven" />
                                  </div>
                                </div>

                                <div>
                                  <div className='mr-5'>
                                    <img src={TrushtEight} alt="TrushtEight" />
                                  </div>
                                </div>

                                <div>
                                  <div className='mr-5'>
                                    <img src={TrushtNine} alt="TrushtNine" />
                                  </div>
                                </div>

                                
                                <div>
                                  <div className='mr-5'>
                                    <img src={TrushtTen} alt="TrushtTen" />
                                  </div>
                                </div>
                </Slider>
          
           </Container>
         
        </section>

        <section className='my-8'>
          <Container>
              <div className='flex flex-wrap gap-10'>
                <div className='md:w-[600px]'>
                  <h2 className='font-roboto mb-5 text-primary font-semibold text-4xl text-center '>Our Commitment to Work</h2>
                    <p className='font-pop font-medium mb-5 text-center  text-base text-[#444444]'>We take pride in keeping ourselves updated with all changes that occur in our environment. We want to be a pioneering force, promoting and introducing new techniques in our industry to make sure we provide first-class security guarding service every time.</p>
                    <p className='font-pop font-medium mb-5 text-center text-base text-[#444444]'>If you’re looking for someone who will be reliable and consistent, look no further. Our commitment to work is unshakeable; you can rely on us for whatever your needs are.</p>
                    <p className='font-pop font-medium text-center  text-base text-[#444444]'>From patrolling residential areas or corporate spaces and providing 24/7 protection from both human threats and natural disasters, we’ve got it covered. With Generation Solution of Security Ltd., you get access to a whole range of dedicated experts who can provide ongoing security services that meet your exact requirements at competitive prices.</p>
                    <Flex className="justify-center items-center">
                    <button className='font-pop font-normal mt-5 text-xl text-white  px-10 py-4 bg-primary rounded-full '>Call Now</button>

                    </Flex>
                </div>
                <div className='md:w-[500px]'>
                    <img src={Stacker} alt="Stacker" className='w-full'/>
                </div>
              </div>

          </Container>
        </section>

    </div>
  )
}

export default ChooseContant
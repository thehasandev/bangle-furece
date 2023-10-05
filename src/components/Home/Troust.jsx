import React from 'react'
import Container from '../Common/Container'

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
import Flex from '../Common/Flex'


function Troust() {
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
    <section>
        <Container>
            <h2 className='font-roboto text-[#444444] font-semibold text-4xl text-center md:w-[800px] mx-auto  relative after:absolute after:content-[""] after:h-[1px] after:w-[200px] after:bg-red-600 after:bottom-[-18px] after:left-1/2 after:translate-x-[-50%] after:rounded-full'>Trusted Partners
                <span className='relative after:absolute after:content-[""] after:h-[1px] after:md:w-[300px] after:bg-gray-600/40 after:bottom-[20px] after:right-[140px]  after:translate-x-[-50%] after:rounded-full before:absolute before:content-[""] before:h-[1px] before:md:w-[300px] before:bg-gray-600/40 before:bottom-[15px] before:right-[140px]  before:translate-x-[-50%] before:rounded-full' ></span>
                <span className='relative after:absolute after:content-[""] after:h-[1px] after:md:w-[300px] after:bg-gray-600/40 after:bottom-[20px] after:left-[185px]  after:translate-x-[-50%] after:rounded-full before:absolute before:content-[""] before:h-[1px] before:md:w-[300px] before:bg-gray-600/40 before:bottom-[15px] before:left-[185px]  before:translate-x-[-50%] before:rounded-full' ></span>
            </h2>
            
            <p className='md:w-[800px] px-2 md:px-0 text-center mx-auto font-roboto text-sm font-medium text-[#444444] mt-8 mb-16 md:mb-32'>
            The security personnel is assured, this company is non- Unionized and not subject to strike or other labor action that may adversely affect the Security of the client. We will be happy to provide our services.</p>
            
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

            {/* Image Part  */}
            <div className='bg-police bg-cover bg-center mt-16'>
               <div className='h-full py-32 px-2 md:px-16 bg-black/40'>
                    <h2 className='font-roboto text-white font-medium text-4xl md:w-[800px]   relative after:absolute after:content-[""] after:h-[1px] after:w-[200px] after:bg-red-600 after:bottom-[-18px] after:left-0  after:rounded-full'>Are You Interested In Working With Us!
                        <span className='relative after:absolute after:content-[""] after:h-[1px] after:md:w-[100px] after:bg-white after:bottom-[20px] after:left-[85px]  after:translate-x-[-50%] after:rounded-full before:absolute before:content-[""] before:h-[1px] before:md:w-[100px] before:bg-white before:bottom-[15px] before:left-[85px]  before:translate-x-[-50%] before:rounded-full' ></span>
                    </h2>
                    <div className="lg:flex justify-between">
                        <h2 className='font-roboto  text-white mt-16 font-normal text-3xl pl-5 lg:pl-0 lg:w-[800px] '>We have highly trained staff available that implement security measures around any Retail, Commercial or Industrial Site.</h2>
                        <div>
                          <Flex className="justify-center">
                             <button className='font-roboto font-medium text-base text-white mt-5 lg:mt-0 bg-primary px-8 py-4 shadow-lg overflow-hidden   border-solid  border-t-[3px] relative after:absolute after:h-[3px] after:w-full after:contents-[""] after:hover:bottom-0 after:bg-white after:bottom-[-15px] after:left-0 after:duration-200'>GET A FREE QUOTE</button>
                          </Flex>
                            <p className='font-pop font-medium text-center mt-3 text-white text-sm'>Only takes a few seconds!</p>
                        </div>
                    </div>
               </div>
            </div>
          
        </Container>

    </section>
  )
}

export default Troust
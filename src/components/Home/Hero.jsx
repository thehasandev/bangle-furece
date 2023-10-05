import React from 'react'

import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
import NextArrow from '../SlideArrow/NextArrow';
import PrevArrow from '../SlideArrow/PrevArrow';

function Hero() {
  
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };


  

  return (
    <section className='mt-[70px]'>
          <Slider {...settings}>
                <div>
                    <div className='md:h-screen bg-bgOne h-[500px] bg-cover '>
                      <div className='flex items-center justify-center h-full bg-black/70'>
                        <div>
                          <h1 className='text-3xl sm:text-5xl animate-ani font-roboto font-bold text-white  md:text-6xl text-center'>Security Guards Solution</h1>
                          <p className='font-pop text-sm text-white font-normal md:w-[400px] mx-auto text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex cum vitae nostrum dignissimos commodi quod!</p>
                        </div> 
                      </div>
                    
                    </div>
                </div>
                
                <div>
                    <div className='md:h-screen bg-bgSix h-[500px] bg-cover '>
                      <div className='flex items-center justify-center h-full bg-black/70'>
                        <div>
                          <h1 className='text-3xl sm:text-5xl animate-ani font-roboto font-bold text-white  md:text-6xl text-center'>Uniformed Security Service</h1>
                          <p className='font-pop text-sm text-white font-normal md:w-[400px] mx-auto text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex cum vitae nostrum dignissimos commodi quod!</p>
                        </div> 
                      </div>
                    
                    </div>
                </div>

                <div>
                    <div className='md:h-screen bg-bgThree h-[500px] bg-cover '>
                      <div className='flex items-center justify-center h-full bg-black/70'>
                        <div>
                          <h1 className='text-3xl sm:text-5xl animate-ani font-roboto font-bold text-white  md:text-6xl text-center'>Uniformed Armed Security Guard</h1>
                          <p className='font-pop text-sm text-white font-normal md:w-[400px] mx-auto text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex cum vitae nostrum dignissimos commodi quod!</p>
                        </div> 
                      </div>
                    
                    </div>
                </div>

                <div>
                    <div className='md:h-screen bg-bgFour h-[500px] bg-cover '>
                      <div className='flex items-center justify-center h-full bg-black/70'>
                        <div>
                          <h1 className='text-3xl sm:text-5xl animate-ani font-roboto font-bold text-white  md:text-6xl text-center'>Private Patrol Operator</h1>
                          <p className='font-pop text-sm text-white font-normal md:w-[400px] mx-auto text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex cum vitae nostrum dignissimos commodi quod!</p>
                        </div> 
                      </div>
                    
                    </div>
                </div>

  
                <div>
                    <div className='md:h-screen bg-bgFive h-[500px] bg-cover '>
                      <div className='flex items-center justify-center h-full bg-black/70'>
                        <div>
                          <h1 className='text-3xl sm:text-5xl animate-ani font-roboto font-bold text-white  md:text-6xl text-center'>Private Business Protection</h1>
                          <p className='font-pop text-sm text-white font-normal md:w-[400px] mx-auto text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex cum vitae nostrum dignissimos commodi quod!</p>
                        </div> 
                      </div>
                    
                    </div>
                </div>

  
                <div>
                    <div className='md:h-screen bg-bgSix h-[500px] bg-cover '>
                      <div className='flex items-center justify-center h-full bg-black/70'>
                        <div>
                          <h1 className='text-3xl sm:text-5xl animate-ani font-roboto font-bold text-white  md:text-6xl text-center'>Professional Cleaning Services</h1>
                          <p className='font-pop text-sm text-white font-normal md:w-[400px] mx-auto text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex cum vitae nostrum dignissimos commodi quod!</p>
                        </div> 
                      </div>
                    
                    </div>
                </div>
          </Slider>
    
    </section>


  )
}

export default Hero
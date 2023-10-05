import React from 'react'

import Container from '../Common/Container'
import ClientOne from "../../assets/clientOne.png"
import ClientTwo from "../../assets/clientThree.png"
import ClientFour from "../../assets/clientFour.png"
import ClientFive from "../../assets/clientFive.png"

import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";

function Client() {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        arrows:false,
        fade: true,
      };
  return (
    <section className='py-16'>
        <Container>
             <div className='bg-client md:clip-path-clintPlygon bg-cover bg-center '>
                  <div className='py-[100px]'>
                    
                        <h2 className='font-roboto  text-white font-medium text-4xl text-center md:w-[800px] mx-auto  relative after:absolute after:content-[""] after:h-[1px] after:w-[200px] after:bg-white after:bottom-[-18px] after:left-1/2 after:translate-x-[-50%] after:rounded-full'>Our Clients Say
                            <span className='relative after:absolute after:content-[""] after:h-[1px] after:md:w-[300px] after:bg-white after:bottom-[20px] after:right-[120px]  after:translate-x-[-50%] after:rounded-full before:absolute before:content-[""] before:h-[1px] before:md:w-[300px] before:bg-white before:bottom-[15px] before:right-[120px]  before:translate-x-[-50%] before:rounded-full' ></span>
                            <span className='relative after:absolute after:content-[""] after:h-[1px] after:md:w-[300px] after:bg-white after:bottom-[20px] after:left-[185px]  after:translate-x-[-50%] after:rounded-full before:absolute before:content-[""] before:h-[1px] before:md:w-[300px] before:bg-white before:bottom-[15px] before:left-[185px]  before:translate-x-[-50%] before:rounded-full' ></span>
                        </h2>
                        

                        {/* Slider Start  */}

                        <Slider {...settings}>
                            <div>
                                <div className=' bg-black/50 mt-16 w-[70%] mx-auto'>
                                    <img src={ClientOne} alt="ClientOne" className='w-32 mx-auto'  />
                                    <h4 className='font-pop font-normal text-white text-xs px-2 lg:px-0 lg:text-xl lg:w-[800px] text-center mx-auto '>“GSSL has implemented new security technology as our needs have grown, and stayed within our budget. They have been a good partner, knowledgeable, and responsive to our needs. I would definitely recommend GSSL to others.”</h4>
                                    <h2 className='font-roboto font-bold mt-5 pb-5 text-white text-2xl text-center'>Habibur Rahman • Dress UP Mannager</h2>
                                </div>
                            </div>

                            <div>
                              <div className='silde bg-black/50 mt-16 w-[70%] mx-auto'>
                                <img src={ClientTwo} alt="ClientTwo" className='w-32 mx-auto'  />
                                <h4 className='font-pop font-normal text-white  text-center text-xs px-2 lg:px-0 lg:text-xl lg:w-[800px] mx-auto'>“Thanks a lot for the quick response. I was really impressed, your solution is excellent! Your competence is justified!”</h4>
                                <h2 className='font-roboto font-bold mt-5 pb-5 text-white text-2xl text-center'>Anam Haq • Owner codEEnum</h2>
                              </div>
                            </div>

                            <div> 
                                <div className='silde bg-black/50 mt-16 w-[70%] mx-auto'>
                                    <img src={ClientFour} alt="ClientFour" className='w-32 mx-auto'  />
                                    <h4 className='font-pop font-normal text-white text-xs px-2 lg:px-0 lg:text-xl lg:w-[800px]  text-center mx-auto'>“Thanks a lot for the quick response. I was really impressed, your solution is excellent! Your competence is justified!”</h4>
                                    <h2 className='font-roboto font-bold mt-5 pb-5 text-white text-2xl text-center'>Anam Haq • Owner codEEnum</h2>
                                </div>
                            </div>

                            <div> 
                                <div className='silde bg-black/50 mt-16 w-[70%] mx-auto'>
                                    <img src={ClientFive} alt="ClientFive" className='w-32 mx-auto'  />
                                    <h4 className='font-pop font-normal text-white text-xs px-2 lg:px-0 lg:text-xl lg:w-[800px] text-center mx-auto'>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, beatae voluptas aperiam officiis commodi ex.”</h4>
                                    <h2 className='font-roboto font-bold mt-5 pb-5 text-white text-2xl text-center'>Anam Haq codEEnum</h2>
                                </div>
                            </div> 
                        </Slider>

                     

                     


                
                 
                  </div>
             </div>
        </Container>
    </section>
  )
}

export default Client
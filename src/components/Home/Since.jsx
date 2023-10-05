import React from 'react'
import Container from '../Common/Container'

function Since() {
  return (
    <section>
      <Container>
          <div className='bg-primary hover:bg-[#2D9274] duration-500 text-center py-16 my-4 relative after:absolute after:content-[""] after:h-[2px] after:w-[200px] after:bg-red-600 after:bottom-[-30px] after:left-1/2 after:translate-x-[-50%] after:rounded-full '>
               <h4 className='font-roboto font-medium text-white text-2xl md:w-[800px] mx-auto'>Since 2016, the most widely recognized and respected Security Guard Organization</h4>
               <h3 className='font-pop font-medium text-white text-3xl my-8'>Generation Solution of Security Ltd.</h3>
               <h2 className='font-pop font-bold text-white text-3xl md:text-5xl md:leading-[60px] md:w-[800px] mx-auto'>Top Security Guard Company in Dhaka, Bangladesh</h2>
          </div>

          <div>
             <p className='md:w-[800px] text-center px-2 md:px-0 mx-auto font-roboto text-base font-bold text-[#444444] mt-16 mb-32'>
             We have been providing security guards and cleaners for Factories, Garments, Manufacturing plants, Universities, Hospitals, Banks, Hotels, Shopping Malls, Resorts, Construction sites, Restaurants, Corporate Events, Festival Events, Concerts, National Events, Super Shops, and any kind of residential or commercial premises. We also provide <span className='text-[#C87063] hover:text-primary duration-200'>executive protection services private bodyguards</span>, or <span className='text-[#C87063] hover:text-primary duration-200'>armed security guards</span> to protect celebrities, VIPs, high-profile personnel, foreigners, and many more.

             </p>
          </div>
      </Container>
    </section>
  )
}

export default Since
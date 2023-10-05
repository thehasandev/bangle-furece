import React from 'react'
import Container from '../Common/Container'

// import AwadImg from "../../assets/awad.jpg"

function AwadContant() {
  return (
    <section className='my-8'>
        <Container>
            <p className='font-pop font-medium md:w-[550px] text-center mx-auto text-base text-[#444444]'>We achieved an ISO 9001:2015 certificate for our strong and quality management System.Stay safe with having our Quality Security Service.</p>
           <div className='md:w-[400px] hover:scale-175 duration-500 mx-auto mt-16'>
              <img src="https://i.ibb.co/LCG8zjQ/awad.jpg" alt="AwadImg" />
           </div>
        </Container>

    </section>
  )
}

export default AwadContant
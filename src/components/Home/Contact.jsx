import React from 'react'
import Container from '../Common/Container'
import Flex from '../Common/Flex'

function Contact() {
  return (
    <section className='py-16'>
        <Container>
            <Flex className="xl:justify-between flex-wrap justify-center gap-5">
                <div className='md:w-[48%] flex items-center justify-center'>
                    <div className='px-2 md:px-0'>
                        <h4 className='font-roboto font-semibold tracking-[15px] text-[#111111] text-xl'>CONTACT</h4>
                        <h2 className='font-roboto font-bold my-8 leading-[70px] text-[#111111] md:w-[580px] text-4xl md:text-6xl'>For any inquiries feel free to contact us</h2>
                        <p className='font-pop font-normal text-[red] text-sm'>info.gsslbd@gmail.com | 01911899619</p>
                    </div>
                </div>

                <div className='md:w-[48%] w-full px-4 md:px-0'>
                  <iframe className='w-full h-[500px]'  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Contact
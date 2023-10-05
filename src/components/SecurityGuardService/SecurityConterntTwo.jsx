import React from 'react'
import Container from '../Common/Container'
import Flex from '../Common/Flex'
import SubHeading from '../Common/SubHeading'

function SecurityConterntTwo() {
  return (
    <section>
     <Container>
         <SubHeading text="Why Choose GSSL For Your Security Guard Needs?"/>
        <p className='font-roboto font-normal text-base px-5 text-[#444444]'>GSSL Security has the best reputation when it comes to a security service company. Our <span className='font-extrabold'>security services organization experts</span> will initially assess the danger and countermeasures needed to ensure your most significant resources. GSSL assembled its notoriety from security preparing and giving the best-prepared staff to giving proficient security service. Our staff is handpicked and well trained to meet our customer’s security necessities. Generation Solution of Security Ltd. additionally assists our customers with tweaking a security program that addresses their site’s issues to guarantee responsibility and amazing skill from the guard staff. No other organization can tweak security as GSSL Security accomplishes for its customers. </p><br />
        
      <div className='px-5 xl:px-32 shadow-xl border'>
         <Flex className="justify-between"> 
           <SubHeading text="Wanna Talk With Us?"/> 
           <div className='flex items-center'>
            <button className='bg-primary text-pop px-4 
            w-28 xl:w-full xl:px-8 py-4 font-roboto text-white xl:text-2xl rounded-[5px]'>Call Now</button>
           </div>
         </Flex> 
      </div>
     
     </Container>
    </section>
  )
}

export default SecurityConterntTwo
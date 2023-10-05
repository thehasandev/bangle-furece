import React from 'react'

import Container from '../Common/Container'
import SubHeading from '../Common/SubHeading'
// import Supervicor from "../../assets/Cleaning-Supervisor.png"

import Card from '../Common/Card'
// import SequrityOne from "../../assets/lady.png"
// import SequrityTwo from "../../assets/security.png"
// import SequrityThree from "../../assets/Cleaner-Service (2).png"
import { Link } from 'react-router-dom'


function CleaningSupervisorContent() {
  return (
    <>
    <section>
        <Container>
            <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>A cleaning supervisor has many responsibilities, and these responsibilities should be taken seriously. A cleaning supervisor’s job includes communicating with clients, supervising staff, and making sure the work performed meets or exceeds all standards of quality set by the company that employs them. Here are some other things you should know before hiring a cleaning supervisor.</p>
            
            <SubHeading text="Responsibilities of Cleaning Supervisors"/>
            <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>Employees who supervise others generally need to ensure that their employee’s work is being performed correctly and meets company standards. A cleaning supervisor is responsible for overseeing all or most aspects of cleaning. The job can be physically demanding; as with any supervisory position, cleaning supervisors will also have less-direct responsibilities, such as hiring new workers, scheduling shifts, and dealing with customer complaints. The better you are at handling those tasks, and more specifically your relationship with your staff, the greater your effectiveness as a supervisor will be.</p>
                
                <div className='md:w-[650px] mx-auto'>
                    <img src="https://i.ibb.co/PGgjRvk/Cleaning-Supervisor.png" alt="Supervicor" />
                </div>
            
            <SubHeading text="Qualities of a Good Cleaning Supervisor"/>
            <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>When thinking about what makes a good cleaning supervisor, it’s important to first make sure that you are looking for someone who understands that no two houses are alike. All households require different kinds of cleaning services. Even something as simple as how much dust gets kicked up on the floor while vacuuming can vary from house to house. This means that your cleaning supervisor needs to be able to understand these differences and provide his services accordingly.</p>
            
            <SubHeading text="Tools Needed by Cleaning Supervisors"/>
            <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>It is quite clear that cleaning supervisors will have to use many different tools for their cleaning purposes. It is essential that you must plan well when purchasing these tools because you will be responsible for keeping them in good shape. The very necessary thing is to have an excellent <span className='font-bold text-red-600'>vacuum cleaner</span> that will help to remove all kinds of dirt and dust from home or office. Secondly, make sure that the cleaner has a nice broom and lots of dusters with him as they will be useful in cleaning large areas.</p>
            
            <SubHeading text="Are we provide Cleaning Supervisor?"/>
            <p className='font-roboto border-b border-black pb-8 font-normal text-base my-8 mb-5 text-[#444444]'>YES, We are having a team of trained staff who are very much expertise in this field. We provide all types of <span className='font-bold text-red-600'>cleaning services </span> on a monthly basis or one-time basis. As a client what you need to do is that call us at 01911-899619 we will arrange for an inspection to see your house and give you better quotes over our services. We guarantee you that we will provide the best cleaning service and quick response.</p>
           
 
        </Container>

    </section>

    <section className='mt-8'>
      <Container>
        <SubHeading text="Explore Our Related Services" className="md:text-center"/>
            <div className='flex flex-wrap gap-5 justify-center border-b border-black pb-8'>
                <Link to="/supervisor">
                  <Card src="https://i.ibb.co/nPjfQJg/incharge-One.png"  alt="sequrityTwo" HeadingText="Security Guard Supervisor"/>
                </Link>

                <Card src="https://i.ibb.co/myttGvt/cleaner.png" alt="sequrityThree" HeadingText="Professional Cleaning Service"/>
                
                <Link to="/lady-security-guard">
                  <Card src="https://i.ibb.co/F4L9yqS/ladyy.png" alt="sequrityOne" HeadingText="Female Security Officer"/> 
                </Link>
            </div>
      </Container>
    </section>

    <section>
      <Container>
         <SubHeading text="Why you should take the cleaning supervisor from us?"/>
         <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>We have been in the cleaning services business for years and we are providing cleaning supervisor service to our clients on a monthly or yearly basis. We want to make sure that our clients remain satisfied with us with their services that is why we maintain very high standards in everything that we do. Our responsibility does not end when you make an order for our service. It only begins when you place an order for our services.</p>

         <SubHeading text="What makes us different from other competitors"/>
         <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>While most cleaning companies only take care of cleaning service requirements, we go the extra mile. We make sure that our staff is accountable for all factors that have to do with cleanliness at your home or office. Not only do we provide cleaners on a regular basis, but we also ensure that they are well-equipped and trained enough to handle any unforeseen circumstances while they are at work. This further translates into safety and health in your workplace or home environment.</p>

         <SubHeading text="Contact Us"/>
         <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>If you are looking for any type of cleaning service then do get in touch with us at 01911-899619. We also have an online chatbox and a direct email form where you can write to us your queries. Our executive will reply back within 24 hours.</p>
      </Container>
    </section>
    </>



  )
}

export default CleaningSupervisorContent
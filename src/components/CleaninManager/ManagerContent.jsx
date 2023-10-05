import React from 'react'

import Container from '../Common/Container'
import SubHeading from '../Common/SubHeading'
// import Manager from "../../assets/Cleaning-incharge.png"

import Card from '../Common/Card'
import { Link } from 'react-router-dom'
// import CleaningOne from "../../assets/cleanOne.png"
// import CleaningTwo from "../../assets/cleanTwo.png"
// import CleaningThree from "../../assets/Floor-Cleaning (1).png"

function ManagerContent() {
  return (
    <>
    <section>
        <Container>
            <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>What do you look for in a good cleaning manager? While the exact requirements vary from one business to another, there are several traits that any janitorial manager should have. Here are some things to consider when hiring your next cleaning manager.</p>
            
            <SubHeading text="Why Our Clients Use Cleaning Management Services"/>
            <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>As we all know, cleaning your home or office is not exactly a thrilling experience. It’s physically demanding and time-consuming, and it can be tough on your body. But what happens when you want or need someone else to clean your home or office? That’s where our services come in! As professional janitorial management specialists, we make sure that everything is handled properly so that you can focus on other things.</p>
                
                <div className='md:w-[650px] mx-auto'>
                    <img src="https://i.ibb.co/hBPN9xL/clean-Three.png" alt="Manager" />
                </div>
            
            <SubHeading text="Do You Need Cleaning Management Service?"/>
            <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>If you need someone to <span className='font-extrabold'> oversee your cleaning staff</span>, there are several important qualities to look for in a <span className='font-extrabold'> cleaning manager</span>. First, they should be personable and trustworthy—after all, you’re entrusting them with multiple sets of keys to your facility and asking them to manage dozens of employees. Be sure that he or she has experience supervising people on their own and understands when it’s appropriate (and not appropriate) to delegate tasks. Remember, we provide both: <span className='font-extrabold'> well-trained cleaner and cleaning manger!</span></p>
            
            <SubHeading text="Things To Know Before Hiring A Cleaning Manager"/>
            <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>One of your main concerns about hiring a cleaning manager is whether or not he is reliable. A good way to test that would be by looking at his employee reviews from past jobs. You’ll want one with zero complaints, no late assignments, and excellent performance. If you’re hiring an independent contractor, look at their portfolio of work, which will show you what types of clients they serve best and if they have experience working with someone like you. </p>
            <p className='font-roboto font-normal text-base my-8 mb-5 text-[#444444]'>If you don’t like this hassle! you should contact a reliable and reputable <span className='font-bold text-red-600'> cleaning service provider </span>like us. GSSL has advanced training centers, where a cleaner is taught how to do a clean job. Our center is run by a skilled trainer. Before hiring a cleaner manager or incharge of a site, he must successfully complete the training stages at our training center. After 7 days of successful training, only those who have the qualifications to be a cleaning services management officer are deployed to facility management cleaning services.</p>
        
        </Container>

    </section>

    {/* Card Part */}
        <section className='mt-5 '>
            <Container>
                <SubHeading text="Explore Our Related Services" className="md:text-center mt-5"/>
                <div className='flex flex-wrap gap-5 justify-center border-b border-black pb-10'>
                    <Link to="/lady-cleaner">
                      <Card src="https://i.ibb.co/p4wBWDw/cleanOne.png" alt="CleaningOne" HeadingText="Lady Cleaner Service"/>
                    </Link>

                    <Link to="/cleaning-supervisor">
                      <Card src="https://i.ibb.co/PGgjRvk/Cleaning-Supervisor.png" alt="CleaningTwo" HeadingText="Cleaning Supervisor"/>
                    </Link>

                    <Link to="/floor-clean">
                      <Card src="https://i.ibb.co/NsHN5W6/Floor-Cleaning.png" alt="CleaningThree" HeadingText="Floor Cleaning Service"/>
                    </Link>
                </div>
            </Container>
        </section>


     

        <section className='mt-8'>
          <Container>
              <SubHeading text="Things To Consider When Choosing A Janitorial Management Company" className="md:text-3xl"/>
              <p>1. How many years of <span className='font-bold text-red-600'> professional cleaning</span> experience does your janitorial management company have? 2. What percentage of their clients are repeat customers? 3. How long has it been since their last complaint or negative review on Yelp, Google? 4. Does your cleaning management company offer 24/7 phone support in case anything goes wrong with your cleanup? 5. Is your cleaner manager service fully insured and bonded for general liability purposes and worker’s compensation?</p>
              
              <SubHeading text="Working with an established cleaning management company will save your time, energy and money" className="md:text-3xl"/>
              <p>If you’re struggling with hiring and training your cleaning staff, our professional team will manage your personal or business needs. It allows us to: (1) devote more time to running and growing our business (2) maintain higher standards of quality control and consistency. Our dedicated cleaning managers make sure employees are trained correctly so they can provide consistent services.</p>
          </Container>
        </section>
    </>



  )
}

export default ManagerContent
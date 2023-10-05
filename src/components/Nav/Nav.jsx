import React, { useState,useRef, useEffect } from 'react'

import  Container  from '../Common/Container'
import Logo from "../../assets/logo.png"

import {BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoPinterestAlt,BiChevronDown, BiLogoTwitter, BiLogoYoutube, BiSearch} from "react-icons/bi"
import {AiFillCaretRight, AiOutlineMenu,} from "react-icons/ai"

import Flex from '../Common/Flex'
import { Link } from 'react-router-dom'


function Nav() {
     let [open,setOpen] = useState(false)
     let [hide,setHide] =useState(false)
     let [dropOne,setDropOne] =useState(false)
     let [dropTwo,setDropTwo] =useState(false)
     let [sequrity,setSequrity]=useState(false)
     let [clean,setClean]=useState(false)
   
    
    //Drop Nav
    const [scroll, serScroll] = useState(false);
     useEffect(() => {
        const handleScroll = () => {
              if (window.scrollY > 0) {
                serScroll(true);
              } else {
                serScroll(false);
              }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


  return (
  
    <section className='nav'>
    {/* Top Part Start     */}
      <div className='bg-primary'>
            <Container>
            <div className="md:flex justify-between py-5">
                <div className='w-1/2 mx-auto'>
                    <Flex className="gap-x-4 text-white">
                        <BiLogoFacebook size={25} className='cursor-pointer'/>
                        <BiLogoTwitter size={25} className='cursor-pointer'/>
                        <BiLogoInstagram size={25} className='cursor-pointer'/>
                        <BiLogoPinterestAlt size={25} className='cursor-pointer'/>
                        <BiLogoLinkedin size={25} className='cursor-pointer'/>
                        <BiLogoYoutube size={25} className='cursor-pointer'/>
                    </Flex>
                </div>

                <div className='w-2/6 mx-auto mt-5 text-center md:mt-0 flex items-center justify-end'>
                    <p className='font-roboto font-normal text-white text-base'> +8801911899619 || info.gssl@gmail.com</p>
                </div>
            </div> 
            </Container>
      </div>  
  {/* Top Part End    */}

  {/* Nav Part Start    */}
 
    <nav className={` px-5 xl:px-0 bg-[#DDDDDD] fixed w-full z-50 ${scroll&&"top-0 duration-500"} hidden xl:block`}>
        <Container>
            <div className="flex justify-between items-center">
                
                <div className='w-[20%]'>
                    <img className='w-16' src={Logo} alt="Logo"/>
                </div>   

                <div className='w-[40%] flex justify-end '>
                
                    <ul className={`md:flex  left-0 pl-32  w-full md:h-full  h-screen  md:px-0  absolute md:static md:bg-transparent bg-white  gap-x-5 font-pop ${open? "rotate-x-90 " : "duration-500 top-[78px] origin-top rotate-x-0"}`}>
                        <Link to="/">
                          <li className='hover:text-primary cursor-pointer my-5  duration-500 '>Home</li>
                        </Link>

                        <li  className='flex items-center cursor-pointer my-5  gap-x-1 text-center hover:text-primary duration-500 group'>
                            Who we are <BiChevronDown/>
                      

                      
                      {/* Drop One  */}
                            <div className='flex flex-col gap-y-4 absolute top-[90px]  md:top-[80px] text-left md:left-[0px] left-[80px] duration-500 rotate-x-90 origin-top group-hover:rotate-x-0  bg-slate-300  w-[220px]'>
                              <ul>
                                <Link to="/about">
                                  <li className='text-black cursor-pointer pl-5 pr-2 py-2 hover:bg-[#66A37C] hover:text-white duration-500'>About Us</li>
                                </Link>

                                <Link to="/awad">
                                  <li className='text-black cursor-pointer pl-5 pr-2 py-2 hover:bg-[#66A37C] hover:text-white duration-100'>Awards & Recognition</li>
                                </Link>
                                  
                                  <Link to="/history">
                                      <li className='text-black cursor-pointer pl-5 pr-2 py-2 hover:bg-[#66A37C] hover:text-white duration-100'>History</li>
                                  </Link>
                                  
                                  <Link to="/choose">
                                    <li className='text-black cursor-pointer pl-5 pr-2 py-2 hover:bg-[#66A37C] hover:text-white duration-100'>Why Choose Us</li>
                                  </Link>
                                  
                                  <Link to="/our-team">
                                      <li className='text-black cursor-pointer pl-5 pr-2 py-2 hover:bg-[#66A37C] hover:text-white duration-100'>Our Management</li>
                                  </Link>
                                  
                                  <Link to="/gallary">
                                    <li className='text-black cursor-pointer pl-5 pr-2 py-2 hover:bg-[#66A37C] hover:text-white duration-100'>Gallery</li>

                                  </Link>
                                  
                                  <Link to="/privacy">
                                    <li className='text-black cursor-pointer pl-5 pr-2 py-2 hover:bg-[#66A37C] hover:text-white duration-100'>Privacy Policy</li>
                                  </Link>
                              </ul>
                            </div>   
                    

                        </li>

                        
                        <li className={`flex items-center gap-x-1 cursor-pointer hover:text-primary duration-500 group`}>Our Services<BiChevronDown onClick={()=>{setDropTwo()}}/>

                        {/* Dorp Down Two  */}
                        
                            
                            <div className='flex flex-col gap-y-4 absolute  top-[80px]  duration-500  bg-slate-300 group-hover:rotate-x-0 origin-top rotate-x-90 left-[-5px]  md:left-[-350px] '>
                              <div className='md:flex'>
                                  <ul className='w-[400px] border border-r'>
                                      <p className='p-5 fon-roboto text-xl font-medium text-black'>Security</p>
                                        
                                        <Link to="/security-guard">
                                          <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-500 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/>Security Guard Service</li> 
                                        </Link>

                                        <Link to="/lady-security-guard">                
                                          <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-100 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/> Lady Security Guard Service</li>
                                        </Link>

                                        <Link to="/protection">                
                                          <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-100 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/> Executive Protection Service</li>
                                        </Link>

                                        <Link to="/event">                
                                          <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-100 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/> Event Security Service</li>
                                        </Link>

                                        <Link to="/incharge">                
                                          <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-100 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/> Security Incharge</li>
                                        </Link>

                                        <Link to="/supervisor">                
                                          <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-100 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/> Security Supervisor</li>
                                        </Link>

                                        <Link to="/cash-in-transit">                
                                          <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-100 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/> Cash-In-Transit (CIT) Service</li>
                                        </Link>

                                        <Link to="/armed-sequrity-gurd">
                                          <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-100 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/>Armed Security Guard</li>
                                        </Link>
                                        
                                        <Link to="/body-gurd">
                                          <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-100 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/>Bodyguard Service</li>
                                        </Link>
                                        
                                        <Link to="/security-consultancy">
                                          <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-100 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/>Security Consultancy & Risk Management</li>
                                        </Link>
                                        
                                        <Link to="/road-protect">
                                          <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-100 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/>Road Protect Security</li>
                                        </Link>

                                        <Link to="security-guard-equipments">
                                          <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-100 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/> Security Guard Equipment</li>
                                        </Link>

                                        <Link to="background-screening">
                                          <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-100 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/> Background Screening</li>
                                        </Link>
                                    
                                  </ul>
                              
                                  <ul className='w-[420px] border border-r'>
                                      <p className='p-5 fon-roboto text-xl font-medium text-black'>Cleaning</p>
                                        
                                          <Link to="/cleaning">
                                            <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-500 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/>Professional Cleaning Service</li> 
                                          </Link>

                                          <Link to="lady-cleaner">
                                            <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-100 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/> Lady Cleaner Service</li>
                                          </Link>
                                          
                                          <Link to="cleaning-manager">
                                            <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-100 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/>Cleaning Manager</li>
                                          </Link>
                                        
                                        <Link to="/cleaning-supervisor">
                                          <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-100 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/> Cleaning Supervisor</li>
                                        </Link>

                                          <Link to="/floor-clean">
                                            <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-100 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/> Floor Cleaning Service</li>
                                          </Link>

                                          <Link to="/glass-clean">
                                              <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-100 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/> Glass Cleaning Service</li>
                                          </Link>

                                          <Link to="/carpet-clean">
                                              <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-100 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/> Carpet Cleaning Service</li>
                                          </Link>

                                          <Link to="window-clean">
                                            <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-100 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/> Window Cleaning Service</li>
                                          </Link>

                                          <Link to="sofa-clean">
                                            <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-100 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/>Sofa Cleaning Service</li>
                                          </Link>
                                          
                                          <Link to="gardern-clean">
                                              <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-100 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/>Garden Cleaning & Lawn Maintenance Service</li>     
                                          </Link>
                                  </ul>
                                  
                                  <ul className='w-[400px] border '>
                                      <p className='p-5 fon-roboto text-xl font-medium text-black'>  Pest Control</p>
                                          <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-500 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/>Termite Control Service</li> 
                                          <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-100 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/> Bed Bugs Protection</li>
                                          <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-100 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/> Cockroach Control Service</li>
                                          <li className='text-black pl-3 cursor-pointer pr-1 py-1 hover:bg-[#66A37C] hover:text-white duration-100 border border-solid border-t border-b border-white flex items-center gap-x-2'><AiFillCaretRight/> Rat Control Service</li>                    
                                  </ul>

                              </div> 

                            </div>

                      
                        </li>

                        <Link to="contract">
                            <li className='hover:text-primary cursor-pointer my-5  duration-500'>Contact Us</li>
                        </Link>
                        
                        <li className='hover:text-primary cursor-pointer my-5  duration-500'>Blog</li> 
                    </ul>
                  
                </div>

                <div className='w-[20%] flex justify-end'>
                    <Flex className="item-center gap-x-2">
                      <Flex className="items-center">
                        <AiOutlineMenu size={30} className='block md:hidden' onClick={()=>{setOpen(!open)}}/>
                      </Flex>
                        <button className='bg-primary hidden md:block overflow-hidden py-3 px-8 font-roboto font-medium text-white relative after:absolute after:contains-[" "] after:h-full after:w-full after:hover:bottom-0 after:duration-500  after:bg-black/20 after:bottom-[-100%] after:left-0'>ISO 9001:2015</button>
                        <div className='flex items-center text-black'>
                          <BiSearch size={25}/>
                        </div>
                    </Flex>
                </div>

            </div>
        </Container>
    </nav>

    <nav className={`px-5 xl:px-0 bg-[#DDDDDD] fixed w-full z-50 ${scroll&&"top-0 duration-500"} block xl:hidden`}>
        <div className="flex gap-y-4 py-2 justify-between items-center">
            <div className='w-[200px]'>
                <img className='w-[70px]' src={Logo} alt="Logo"/>
            </div>
            
            <Flex className="gap-x-5 items-center">
                <button className='bg-primary  overflow-hidden py-3 px-8 font-roboto font-medium text-white relative after:absolute after:contains-[" "] after:h-full after:w-full after:hover:bottom-0 after:duration-500  after:bg-black/20 after:bottom-[-100%] after:left-0'>ISO 9001:2015</button>
                <div onClick={()=>{setHide(!hide)}}>
                      <Flex className="justify-end">
                        <AiOutlineMenu size={30} />
                      </Flex>
                </div>

            </Flex>
           
        </div>
                {
                  hide &&
                  <ul className='flex flex-col justify-center items-center text-left gap-y-5'>
                        <Link to="/">
                          <li onClick={()=>{setHide(false)}} className='hover:text-primary  pt-5 cursor-pointer duration-500 '>Home</li>
                        </Link>

                        <li onClick={()=>{setDropOne(!dropOne)}}  className='flex items-center cursor-pointer  gap-x-1 text-center hover:text-primary duration-500 group'> Who we are <BiChevronDown/></li>
                          {/* Drop One  */}
                              {
                                dropOne &&
                              <ul>
                                <Link to="/about">
                                  <li onClick={()=>{setHide(false)}} className='text-[#444444] cursor-pointer  border-b border-[#44444] pl-[50px]  py-2'>About Us</li>
                                </Link>

                                <Link to="/awad">
                                  <li  onClick={()=>{setHide(false)}}className='text-[#444444] cursor-pointer text-center border-b border-[#44444] pl-[50px]  py-2'>Awards & Recognition</li>
                                </Link>
                                  
                                  <Link to="/history">
                                      <li onClick={()=>{setHide(false)}} className='text-[#444444] cursor-pointer  border-b border-[#44444] pl-[50px]  py-2'>History</li>
                                  </Link>
                                  
                                  <Link to="/choose">
                                    <li onClick={()=>{setHide(false)}} className='text-[#444444] cursor-pointer  border-b border-[#44444] pl-[50px]  py-2'>Why Choose Us</li>
                                  </Link>
                                  
                                  <Link to="/our-team">
                                      <li onClick={()=>{setHide(false)}} className='text-[#444444] cursor-pointer  border-b border-[#44444] pl-[50px]  py-2'>Our Management</li>
                                  </Link>
                                  
                                  <Link to="/gallary">
                                    <li onClick={()=>{setHide(false)}} className='text-[#444444] cursor-pointer  border-b border-[#44444] pl-[50px]  py-2'>Gallery</li>
                                  </Link>
                                  
                                  <Link to="/privacy">
                                    <li onClick={()=>{setHide(false)}} className='text-[#444444] cursor-pointer  border-b border-[#44444] pl-[50px] py-2'>Privacy Policy</li>
                                  </Link>
                              </ul>
                              }

                        <li onClick={()=>{setDropTwo(!dropTwo)}} className={`flex items-center gap-x-1 cursor-pointer hover:text-primary duration-500 group`}>Our Services<BiChevronDown/></li>
                        
                        {
                          dropTwo &&
                              <ul className='w-[150px]'>
                                  <li onClick={()=>{setSequrity(!sequrity)}} className='text-[#292828] cursor-pointer text-center border-b border-[#44444] pl-5 pr-2 py-2 flex items-center gap-x-2'>Security <BiChevronDown/></li>
                                  {
                                      sequrity &&
                                        <ul>                             
                                          <Link to="/security-guard">
                                          <li onClick={()=>{setHide(false)}} className='text-[#444444] text-sm cursor-pointer w-[200px]  border-b border-[#44444] pl-[20px]  py-1'>Security Guard Service</li> 
                                        </Link>

                                        <Link to="/lady-security-guard">                
                                          <li onClick={()=>{setHide(false)}} className='text-[#444444] text-sm cursor-pointer w-[200px]  border-b border-[#44444] pl-[20px]  py-1'> Lady Security Guard Service</li>
                                        </Link>

                                        <Link to="/protection">                
                                          <li onClick={()=>{setHide(false)}} className='text-[#444444] text-sm cursor-pointer w-[200px]  border-b border-[#44444] pl-[20px]  py-1'> Executive Protection Service</li>
                                        </Link>

                                        <Link to="/event">                
                                          <li onClick={()=>{setHide(false)}} className='text-[#444444] text-sm cursor-pointer w-[200px]  border-b border-[#44444] pl-[20px]  py-1'> Event Security Service</li>
                                        </Link>

                                        <Link to="/incharge">                
                                          <li onClick={()=>{setHide(false)}} className='text-[#444444] text-sm cursor-pointer w-[200px]  border-b border-[#44444] pl-[20px]  py-1'> Security Incharge</li>
                                        </Link>

                                        <Link to="/supervisor">                
                                          <li onClick={()=>{setHide(false)}} className='text-[#444444] text-sm cursor-pointer w-[200px]  border-b border-[#44444] pl-[20px]  py-1'> Security Supervisor</li>
                                        </Link>

                                        <Link to="/cash-in-transit">                
                                          <li onClick={()=>{setHide(false)}} className='text-[#444444] text-sm cursor-pointer w-[200px]  border-b border-[#44444] pl-[20px]  py-1'> Cash-In-Transit (CIT) Service</li>
                                        </Link>

                                        <Link to="/armed-sequrity-gurd">
                                          <li onClick={()=>{setHide(false)}} className='text-[#444444] text-sm cursor-pointer w-[200px]  border-b border-[#44444] pl-[20px]  py-1'>Armed Security Guard</li>
                                        </Link>
                                        
                                        <Link to="/body-gurd">
                                          <li onClick={()=>{setHide(false)}} className='text-[#444444] text-sm cursor-pointer w-[200px]  border-b border-[#44444] pl-[20px]  py-1'>Bodyguard Service</li>
                                        </Link>
                                        
                                        <Link to="/security-consultancy">
                                          <li onClick={()=>{setHide(false)}} className='text-[#444444] text-sm cursor-pointer w-[200px]  border-b border-[#44444] pl-[20px]  py-1'>Security Consultancy & Risk Management</li>
                                        </Link>
                                        
                                        <Link to="/road-protect">
                                          <li onClick={()=>{setHide(false)}} className='text-[#444444] text-sm cursor-pointer w-[200px]  border-b border-[#44444] pl-[20px]  py-1'>Road Protect Security</li>
                                        </Link>

                                        <Link to="security-guard-equipments">
                                          <li onClick={()=>{setHide(false)}} className='text-[#444444] text-sm cursor-pointer w-[200px]  border-b border-[#44444] pl-[20px]  py-1'> Security Guard Equipment</li>
                                        </Link>

                                        <Link to="background-screening">
                                          <li onClick={()=>{setHide(false)}} className='text-[#444444] text-sm cursor-pointer w-[200px]  border-b border-[#44444] pl-[20px]  pt-1'> Background Screening</li>
                                        </Link> 
                                        
                                        </ul>
                                    }

                                  <li onClick={()=>{setClean(!clean)}} className='text-[#292828] cursor-pointer text-center border-b border-[#44444] pl-5 pr-2 py-2 flex items-center gap-x-2'>Cleaning <BiChevronDown/></li>
                                  {
                                    clean &&
                                    
                                    <ul>
                                      <Link to="/cleaning">
                                        <li  onClick={()=>{setHide(false)}}  className='text-[#444444] text-sm cursor-pointer w-[200px]  border-b border-[#44444] pl-[20px]  py-1'>Professional Cleaning Service</li> 
                                      </Link>

                                      <Link to="lady-cleaner">
                                        <li  onClick={()=>{setHide(false)}}  className='text-[#444444] text-sm cursor-pointer w-[200px]  border-b border-[#44444] pl-[20px]  py-1'> Lady Cleaner Service</li>
                                      </Link>
                                      
                                      <Link to="cleaning-manager">
                                        <li  onClick={()=>{setHide(false)}}  className='text-[#444444] text-sm cursor-pointer w-[200px]  border-b border-[#44444] pl-[20px]  py-1'>Cleaning Manager</li>
                                      </Link>
                                        
                                      <Link to="/cleaning-supervisor">
                                        <li  onClick={()=>{setHide(false)}}  className='text-[#444444] text-sm cursor-pointer w-[200px]  border-b border-[#44444] pl-[20px]  py-1'> Cleaning Supervisor</li>
                                      </Link>

                                      <Link to="/floor-clean">
                                        <li   onClick={()=>{setHide(false)}} className='text-[#444444] text-sm cursor-pointer w-[200px]  border-b border-[#44444] pl-[20px]  py-1'> Floor Cleaning Service</li>
                                      </Link>

                                      <Link to="/glass-clean">
                                          <li  onClick={()=>{setHide(false)}}  className='text-[#444444] text-sm cursor-pointer w-[200px]  border-b border-[#44444] pl-[20px]  py-1'> Glass Cleaning Service</li>
                                      </Link>

                                      <Link to="/carpet-clean">
                                          <li   onClick={()=>{setHide(false)}} className='text-[#444444] text-sm cursor-pointer w-[200px]  border-b border-[#44444] pl-[20px]  py-1'> Carpet Cleaning Service</li>
                                      </Link>

                                      <Link to="window-clean">
                                        <li  onClick={()=>{setHide(false)}}  className='text-[#444444] text-sm cursor-pointer w-[200px]  border-b border-[#44444] pl-[20px]  py-1'> Window Cleaning Service</li>
                                      </Link>

                                      <Link to="sofa-clean">
                                        <li   onClick={()=>{setHide(false)}} className='text-[#444444] text-sm cursor-pointer w-[200px]  border-b border-[#44444] pl-[20px]  py-1'>Sofa Cleaning Service</li>
                                      </Link>
                                      
                                      <Link to="gardern-clean">
                                          <li   onClick={()=>{setHide(false)}} className='text-[#444444] text-sm cursor-pointer w-[200px]  border-b border-[#44444] pl-[20px]  pt-1'>Garden Cleaning & Lawn Maintenance Service</li>     
                                      </Link>
                                    </ul>
        

                                  }
                                  
                                  <li  className='text-[#292828] cursor-pointer text-center border-b border-[#44444] pl-5 pr-2 py-1 flex items-center gap-x-2'>Pest Control <BiChevronDown/></li>
                              </ul>
                              
                        }

                        <Link to="contract">
                            <li onClick={()=>{setHide(false)}} className='hover:text-primary cursor-pointer   duration-500'>Contact Us</li>
                        </Link>
                        
                        <li className='hover:text-primary cursor-pointer pb-5   duration-500'>Blog</li> 
                    </ul>
                }
    </nav>

    </section>
     

     
     
  )
}

export default Nav
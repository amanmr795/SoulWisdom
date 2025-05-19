import React, { useEffect, useState } from 'react'    // type -> rafce
import { BiMenu } from "react-icons/bi";
import { motion } from "framer-motion"

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const handelToggle = () => {
        setIsOpen(!isOpen)
    }
    const handelCloseMenu = () => {
        setIsOpen(false)
    }
    const handleScroll = () => {
        const section = ['home','services','about','pricing','testimonia'];
        const scrollPostion = window.scrollY + 100;

        section.forEach(section => {
            const element = document.getElementById(section);
            if(element){
                const offsetTop = element.offsetTop;
                const height = element.offsetHeight;
                if(scrollPostion >= offsetTop && scrollPostion < offsetTop + height){
                    setActiveSection(section)
                }
            }
        })
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[]);

    const handleScrollTo = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if(targetElement){
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            })
        }
    }
    const navLink = (
        <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0'>
            <li>
                <motion.a
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                onClick={(e) => {
                    e.preventDefault();
                    handelCloseMenu();
                    handleScrollTo('home')
                }}
                href="#home"
                
                className={`text-white ${activeSection === 'home' ? 'isActive' : ''}`}>Home</motion.a>
            </li>
            <li>
                <motion.a href="#services"
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                onClick={(e) => {
                    e.preventDefault();
                    handelCloseMenu();
                    handleScrollTo('services')
                }}
                className={`text-white ${activeSection === 'services' ? 'isActive' : ''}`}>Services</motion.a>
            </li>
            <li>
                <motion.a href="#about"
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                onClick={(e) => {
                    e.preventDefault();
                    handelCloseMenu();
                    handleScrollTo('about')
                }}
                className={`text-white ${activeSection === 'about' ? 'isActive' : ''}`}>About Us</motion.a>
            </li>
            <li>
                <motion.a href="#pricing"
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                onClick={(e) => {
                    e.preventDefault();
                    handelCloseMenu();
                    handleScrollTo('pricing')
                }} 
                className={`text-white ${activeSection === 'pricing' ? 'isActive' : ''}`}>Pricing</motion.a>
            </li>
            <li>
                <motion.a href="#testimonial"
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                onClick={(e) => {
                    e.preventDefault();
                    handelCloseMenu();
                    handleScrollTo('testimonial')
                }} 
                className={`text-white ${activeSection === 'testimonial' ? 'isActive' : ''}`}>Testimonial</motion.a>
            </li>
        </ul>
    )
  return (
    <header className='bg-[#2F3E46] text-white py-6 px-4 fixed top-0 left-0 right-0 z-10'>
      <div className='container mx-auto flex justify-between items-center h-full'>
        {/* logo */}
        <div >
            <a href="">
                <div className='text-white font-bold text-xl hover:bg-[#223A5E]/90'>SoulWisdom</div> 
            </a>
        </div>

        {/* navitems */}
        <div className='hidden md:flex flex-grow justify-center'>
            <nav>
                {navLink}
            </nav>
        </div>
          {/* button */}
          <div className='hidden md:block'>
              <a
              onClick={e => {
                e.preventDefault();
                handleScrollTo('contact')
              }} 
              href="#contact" className='text-white bg-[#223A5E] hover:bg-[#223A5E]/60 px-4 py-2 rounded'>Contact Us</a>
          </div>

          {/* hamburger menu */}
          <div className='block md:hidden'>
            <button 
            onClick={handelToggle}
            className={`text-white focus:outline-none ${isOpen ? "border border-white" : ""}`}>
            <BiMenu className='size-6'/>
            </button>
          </div>
      </div>

      {/* Mobile nav items */}
      {
        isOpen && (
            <nav className='absolute top-full left-0 w-full bg-[#2F3E46] z-20 md:hidden'>
                <ul className='flex flex-col p-4 space-y-3'>
                    {navLink.props.children}
                    <li className='py-2 '>
                    <a href="#contact"
                    className='text-white bg-[#223A5E] hover:bg-[#223A5E]/90 px-4 py-2 rounded'
                    onClick={(e)=>{
                        e.preventDefault();
                        handelCloseMenu();
                        handleScrollTo('contact')
                    }
                    } 
                    >Contact Us</a>
                </li>
                </ul>
                
            </nav>
        )
      }
    </header>
  )
}

export default Navbar



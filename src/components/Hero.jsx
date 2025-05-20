import React from 'react'
import { FaCircleArrowRight } from "react-icons/fa6";
import heroImg from "../assets/img.png";

const Hero = () => {
  return (
    <section id='home' className='h-screen bg-[#EDF4F2] text-black flex items-center pt-28 md:h-screen'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full'>
        {/* left side */}
        <div className='md:w-1/2'>
        <h2 className='text-4x1 text-lg font-serif font-bold mb-4 md:w-3/5 leading-snug'>Start Your Journey to Mental Wellness</h2>
        <p className='mb-10 md:pr-8'>Experience lower stress, greater self-awareness, improved focus, and deeper self-compassion. Our mindful guide introduces you to the basics of meditation, helping you build a foundation for lasting well-being.</p>
        <button className='bg-[#223A5E] text-white py-3.5 px-8 font-medium rounded hover:bg-[#223A5E]/80'>
            <a href="#contact" className='flex gap-1 items-center'>
                <span>Get Started</span>
                <FaCircleArrowRight />
            </a>
        </button>
         
        </div>
        {/* right side */}
        <div className='md:w-1/2 h-full'>
        <img src={heroImg} alt="hero image" className='w-full object-cover' />

        </div>
      </div>
    </section>
  )
}

export default Hero

import React from 'react'
import { FaCircleArrowRight } from "react-icons/fa6";
import heroImg from "../assets/hero.webp"

const Hero = () => {
  return (
    <section id='home' className='h-screen bg-indigo-950 text-white flex items-center pt-28 md:h-screen'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full'>
        {/* left side */}
        <div className='md:w-1/2'>
        <h2 className='text-4x1 text-lg font-serif font-bold mb-4 md:w-3/5 leading-snug'>Start Your Journey to Mental Wellness</h2>
        <p className='mb-10 md:pr-8'>We lower our stress levels, we get to know our pain, we connect better, we improve our focus, and we're kinder to ourselves. let us walk through the basics in our new mindful guide on how to meditate.</p>
        <button className='bg-green-600 text-white py-3.5 px-8 font-medium rounded hover:bg-green-600/90'>
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

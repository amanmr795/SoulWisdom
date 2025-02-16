import React, { useState } from 'react'
import thumbnailImg from '../assets/video-thumbnail.webp'
import { FaPlayCircle } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";


const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
  }

  const handleCloseVideo = () => {
    setIsVideoPlaying(false)
  }
  return (
    <div id='about' className='bg-[#f7f8fc] pb-16 pt-20'>
      <div className='container mx-auto'>
      <div className='py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8'>
         {/* left side */}
         <div className='md:w-1/2 w-full mb-8 md:mb-0'>
         {
          !isVideoPlaying ? (
            <div className='relative'>
              <img src={thumbnailImg} alt="video thumbnail" className='w-full md:h-[446px] h-auto rounded-lg object-cover'/>
              <button 
              onClick={handleVideoPlay}
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 p-3 rounded-full shadow-lg cursor-pointer'><FaPlayCircle className='size-12 text-white'/></button>
            </div>
          ) : (null)
         }
         </div>
         {/* right side */}
         <div className='md:w-1/2 w-full'>
         <h2 className='text-4x1 text-lg font-serif font-bold mb-4 md:w-3/5 leading-snug'>Start Your Journey to Mental Wellness</h2>
        <p className='mb-10 md:pr-8'>We lower our stress levels, we get to know our pain, we connect better, we improve our focus, and we're kinder to ourselves. let us walk through the basics in our new mindful guide on how to meditate.</p>
        <button className='bg-green-600 text-white py-3.5 px-8 font-medium rounded hover:bg-green-600/90'>
            <a href="#contact" className='flex gap-1 items-center'>
                <span>Get Started</span>
                <FaCircleArrowRight />
            </a>
        </button>
         </div>
      </div>
      {
        isVideoPlaying && (
          <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 '>
            <div className='relative w-full h-full flex items-center justify-center z-50'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/JepLZh_dMeY?si=ASkbKVWGsmgljMZT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <button onClick={handleCloseVideo} className='absolute top-4 right-4 text-white text-2xl cursor-pointer'>
              X
            </button>
          </div>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default About

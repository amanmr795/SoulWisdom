import React from 'react'
import { FaUserGroup } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { FaGlobe } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className='bg-indigo-950 flex items-center justify-center py-28 px-8' id='contact'>
      <div className='container mx-auto'>
        <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8'>
          {/* left side */}
          <div className='space-y-8'>
            <h2 className='text-3xl font-bold font-serif mb-4 text-white'>Make an appointment</h2>
            <div className='grid grid-cols-6 md:grid-cols-2 gap-8 text-white'> 
                {/* first one */}
                <div className='flex items-start gap-4'>
                    <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                        {<FaUserGroup className=''/>}
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-lg font-medium'>24 Hours Services</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                {/* 2 */}
                <div className='flex items-start gap-4'>
                    <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                        {<IoMail className=''/>}
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-lg font-medium'>Expert Therapist</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                {/* 3 */}
                <div className='flex items-start gap-4'>
                    <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                        {<MdCall className=''/>}
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-lg font-medium'>High Quality Core</h3>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
                {/* 4 */}
                <div className='flex items-start gap-4'>
                    <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                        {<FaGlobe className=''/>}
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-lg font-medium'>Trusted Clinic</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
          </div>

          {/* right side */}
          <div className='space-y-6 p-6 bg-white shadow-x1 rounded-md'>
            <h2 className='text-2xl font-bold mb-4'>Book Appointment</h2>
            <form action="" className='space-y-4'>
                <div className='flex sm:flex-row flex-col gap-2'>
                    <input type="text" placeholder='Name' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 shadow'/>
                    <input type="email" placeholder='Email Address' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 shadow'/>
                </div>
                <div className='flex sm:flex-row flex-col gap-2'>
                    <input type="tel" placeholder='Contact Number' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 shadow'/>
                    <input type="text" placeholder='Country' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 shadow'/>
                </div>
                <textarea 
                rows = "4"
                name="" id="" placeholder='Write your message...' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 shadow'></textarea>
                <button type='submit' className='w-full p-3 bg-green-600 text-white rounded-md hover:bg-green-600/90'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

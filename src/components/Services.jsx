import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import serviceImg1 from "../assets/service1.webp"
import serviceImg2 from "../assets/service2.webp"
import serviceImg3 from "../assets/service3.webp"
import serviceImg4 from "../assets/service4.webp"


const Services = () => {
  return (
    <div id='services' className='bg-[#EDF4F2] '>
      <div className='pt-28 px-4 container mx-auto'>
        <div className='text-center space-y-5'>
          <h2 className='text-4xl font-bold font-serif text-[#223A5E]'>What Can We Do Together</h2>
          <p className='md:w-3/4 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia suscipit cumque qui hic tempore molestiae fugiat, quidem consectetur corporis dolores?</p>
        </div>

        {/* Serviece category */}
        <div className='py-12 md:w-4/5 mx-auto'>
          <Tabs>
            <TabList className='flex flex-wrap justify-between items-center md:gap-8.5 gap-4'>
              <Tab>Couple Counseling</Tab>
              <Tab>Parenting Skills</Tab>
              <Tab>Feeling Stuck</Tab>
              <Tab>Self-Confidence</Tab>
            </TabList>

            <TabPanel >
              <div className='flex flex-col md:flex-row gap-2 mt-8'>
              <div className='md:w-2/3 bg-white/80 rounded-lg p-8'>
                <h3 className='text-3xl  font-semibold text-gray-600 mb-4'>Couple Counseling</h3>
                <p className='mb-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, excepturi.</p>
                <h4 className='text-xl font-medium text-black mb-2'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>
                </ul>
              </div>
              <div className='md:w-1/2 '>
                <img src={serviceImg1} alt="" className='w-full h-auto rounded-2xl object-cover'/>
              </div>
              </div>
            </TabPanel>

            <TabPanel >
              <div className='flex flex-col md:flex-row gap-2 mt-8'>
              <div className='md:w-2/3 bg-white/80 rounded-lg p-8'>
                <h3 className='text-3xl  font-semibold text-gray-600 mb-4'>Parenting Skills</h3>
                <p className='mb-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, excepturi.</p>
                <h4 className='text-xl font-medium text-black mb-2'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>
                </ul>
              </div>
              <div className='md:w-1/2 '>
                <img src={serviceImg2} alt="" className='w-full h-auto rounded-2xl object-cover'/>
              </div>
              </div>
            </TabPanel>

            <TabPanel >
              <div className='flex flex-col md:flex-row gap-2 mt-8'>
              <div className='md:w-2/3 bg-white/80 rounded-lg p-8'>
                <h3 className='text-3xl  font-semibold text-gray-600 mb-4'>Feeling Stuck</h3>
                <p className='mb-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, excepturi.</p>
                <h4 className='text-xl font-medium text-black mb-2'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>
                </ul>
              </div>
              <div className='md:w-1/2 '>
                <img src={serviceImg3} alt="" className='w-full h-auto rounded-2xl object-cover'/>
              </div>
              </div>
            </TabPanel>
            
            <TabPanel >
              <div className='flex flex-col md:flex-row gap-2 mt-8'>
              <div className='md:w-2/3 bg-white/80 rounded-lg p-8'>
                <h3 className='text-3xl  font-semibold text-gray-600 mb-4'>Self-Confidence</h3>
                <p className='mb-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, excepturi.</p>
                <h4 className='text-xl font-medium text-black mb-2'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>
                </ul>
              </div>
              <div className='md:w-1/2 '>
                <img src={serviceImg4} alt="" className='w-full h-auto rounded-2xl object-cover'/>
              </div>
              </div>
            </TabPanel>
          </Tabs>

        </div>
      </div>
    </div>
  )
}

export default Services

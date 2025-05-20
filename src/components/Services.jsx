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
          <h2 className='text-4xl font-bold font-serif text-[#223A5E]'>What We Offer</h2>
          <p className='md:w-3/4 mx-auto'>Our platform provides a range of services designed to support your mental wellness journey.</p>
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
                <p className='mb-6'>Strengthen your relationship with expert guidance.</p>
                <h4 className='text-xl font-medium text-black mb-2'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Understand relationships better.</li>
                  <li>Boost emotional and verbal ties.</li>
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
                <p className='mb-6'>Enhance your parenting approach for a healthier family environment.</p>
                <h4 className='text-xl font-medium text-black mb-2'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Learn effective parenting strategies</li>
                  <li>Foster stronger parent-child relationships</li>
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
                <p className='mb-6'>Move forward with clarity and confidence.</p>
                <h4 className='text-xl font-medium text-black mb-2'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Identify barriers to growth</li>
                  <li>Create a plan to reach goals</li>
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
                <p className='mb-6'>Unlock your potential and embrace self-assurance.</p>
                <h4 className='text-xl font-medium text-black mb-2'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Boost self-esteem</li>
                  <li>Cultivate a positive self-image</li>
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

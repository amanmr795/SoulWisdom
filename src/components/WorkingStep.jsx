import React from 'react'

const WorkingStep = () => {
  return (
    <div className='relative bg-cover bg-center py-12 bg-working-img'>
      <div className='absolute inset-0 bg-indigo-950 bg-opacity-70'></div>
      <div className='relative container mx-auto px-4 py-20'>
        <div className='text-white text-center mb-20'>
          <h2 className='text-4xl font-bold font-serif'>How It Works</h2>
          <p className='md:w-3/4 w-full mx-auto'>Getting started is simple—just follow these three easy steps to begin your mental wellness journey.</p>
        </div>

        <div className='flex flex-col md:w-4/5 mx-auto md:flex-row gap-8'>
          <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#223A5E] text-white size-14 rounded-full flex items-center justify-center'>1</div>
            <h3 className='text-lg font-medium mt-8'>Fill a Form</h3>
            <p className='my-2'>Step 1 : Tell us about your needs and preferences so we can understand how to support you best.</p>
          </div>
          <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#223A5E] text-white size-14 rounded-full flex items-center justify-center'>2</div>
            <h3 className='text-lg font-medium mt-8'>Get Matched</h3>
            <p className='my-2'>Step 2 : We’ll connect you with the right expert or resource tailored to your goals.</p>
          </div>
          <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#223A5E] text-white size-14 rounded-full flex items-center justify-center'>3</div>
            <h3 className='text-lg font-medium mt-8'>Schedule</h3>
            <p className='my-2'>Step 3 : Pick a time that works for you and start your personalized mental wellness journey.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkingStep

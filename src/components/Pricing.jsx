import React from 'react'

const packages = [
  {
    name: 'Bronze Package',
    price: '₹199',
    description: 'A great starter package for individuals or small businesses to begin their mental wellness journey with essential resources and community support.',
    features: [
      'Access to basic wellness resources',
      'Weekly mental wellness tips',
      'Community support group access',
      
    ],
  },
  {
    name: 'Silver Package',
    price: '₹299',
    description: 'A great choice for growing businesses with additional features and support for mental wellness.',
    features: [
      'All Bronze Package features',
      'Monthly guided meditation sessions',
      'Personalized wellness plan',
      'Access to expert webinars',
    ],
  },
  {
    name: 'Gold Package',
    price: '₹499',
    description: 'Perfect for larger businesses needing advanced mental wellness features and premium support.',
    features: [
      'All Silver Package features',
      'Weekly one-on-one coaching sessions',
      'Advanced mental wellness tracking tools',
      '24/7 access to mental wellness experts',
    ],
  },
]

const Pricing = () => { 
  function handleScrollToContact() {
  // Example implementation: scroll to an element with id "contact"
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn('Contact section not found');
  }
}

  return (
    <div id='pricing' className='bg-[#EDF4F2] pt-32'>
      <div className='container mx-auto px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold font-serif mb-3'>Choose Your Wellness Plan</h2>
          <p className='text-lg mb-12 md:w-2/2 mx-auto'>Whether you're an individual seeking balance or a business building a culture of wellness, we have a plan designed to support your journey.</p>
        </div>

        {/* Package section */}
        <div className='flex flex-col md:w-11/12 mx-auto md:flex-row gap-6 pb-12'>
          {
            packages.map((pkg, index) => (
              <div key={index} className='bg-white/80 rounded-lg p-6 flex-1 shadow-lg flex flex-col'>
                <h3 className='text-2xl font-semibold mb-4'>{pkg.name}</h3>
                <hr className='w-24 border text-[#223A5E] border-[#223A5E]' />
                <p className='text-3xl font-bold mb-4'>{pkg.price} <span className='text-lg font-normal'>/mo</span></p>
                <p className='text-lg mb-4'>{pkg.description}</p>
                <ul className='list-disc list-inside space-y-2 mb-6'>
                {
                  pkg.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                  ))
                }
              </ul>
                <button
                  onClick={handleScrollToContact}
                  className='bg-[#223A5E] text-white px-4 py-2 rounded mt-auto'
                >
                  Get Started
                </button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Pricing

import React from 'react'

function Hero() {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between items-center px-6 md:px-32 py-10'>
        <div className='space-y-5 text-center md:text-left'> 
            <h1 className='text-3xl md:text-6xl font-bold'>Simply explained with illustrations</h1>
            <p className='text-lg md:text-xl'>There are a lot of different components that will help you create the perfect look for your project</p>
            <div className='flex flex-col md:flex-row gap-4 justify-center md:justify-start'>
                <button className='p-3 bg-[#5F62E2] text-white hover:bg-blue-700 transition duration-300'>Get Started</button>
                <button className='p-3 bg-[#5F62E226] text-[#5F62E2] hover:text-white hover:bg-blue-700 transition duration-300'>Learn More</button>
            </div>
        </div>
        <div className='mt-8 md:mt-0'>
            <img src="/rocake.png" alt="Illustration" className='w-full max-w-md md:max-w-lg' />
        </div>
      </div>
    </>
  )
}

export default Hero

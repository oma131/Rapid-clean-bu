import React from 'react'
import '../index.css'

const HeroPricingPage = () => {
  return (
    <div className='bg-[#ECF0F5] w-full h-[45rem] '>
       <div className='absolute  overflow-hidden flex hidden py-[3rem] lg:flex'>
              <div className='h-[6rem] z-20 w-[6rem] relative -top-[5.7rem] -left-[2.7rem] rounded-full opacity-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F4F4F6] via-[#C6C6FA]  to-[#9291FE]'></div>
              <div className='h-[9rem] z-10 w-[9rem] relative -top-[rem0] -left-[7.2rem] rounded-full opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F4F4F6] via-[#C6C6FA]  to-[#9291FE]'></div>
              <div className='h-[12rem] z-0 w-[12rem] relative -top-[5rem] -left-[13.8rem] rounded-full opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F4F4F6] via-[#C6C6FA]  to-[#9291FE]'></div>
              
            </div>
            <div className='flex justify-center items-center h-[40rem]'>
          <div className='w-[40rem] lg:w-[35rem]'>
              <p className=''> 
                <span className='text-[4rem] lg:text-[3.5rem] font-semibold text-[#0100BB] '> Laundry Piles Got  <br /><span className='-mt-[1rem] block '>You Down? <span className='text-[3rem] lg:text-[2.5rem] font-medium text-[#646468] '>Get </span></span></span> <span className='-mt-[1rem] lg:text-[2.5rem] block text-[#646468] text-[3rem] font-medium '> Sparkling Clothes Today <span className='-mt-[1rem] lg:text-[2.5rem] block text-[#646468] text-[3rem] font-medium '>with Easy Online Booking </span> <span className='-mt-[1rem] block lg:text-[2.5rem] text-[#646468] text-[3rem] font-medium '>& Transparent Pricing1</span></span>
              </p>
              <button className="text-white bg-[#0100BB] mt-[1.5rem] hover:text-white px-14 py-1 rounded-md lg:text-[1.9rem] text-[2.3rem] font-medium">Schedule Pickup</button>
          </div>
          <div className='h-[30rem] w-[40rem] lg:h-[30rem] lg:w-[35rem]'>
            <div className='absolute z-10 hero-image h-[35rem] w-[40rem] lg:h-[30rem] lg:w-[35rem]'>

            </div>
            <div className='relative z-0 top-[16.2rem] left-[21.5rem] h-[15rem] w-[15rem] bg-[#0100BB] '>

            </div>
          </div>
        </div>
    </div>
  )
}

export default HeroPricingPage;
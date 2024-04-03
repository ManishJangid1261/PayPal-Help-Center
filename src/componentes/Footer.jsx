import React from 'react'
import logo from './imgs/paypallogo.png'
import flag from './imgs/united-states.png'

function Footer() {
    return (
        <div>
          <div className='mb-5'><img src={logo} alt="PayPal" className="w-32 h-11" /></div> 
          <div className='flex justify-between'>   
          <div className='text-xs flex-wrap flex gap-5 font-bold text-bglite  '>
            <a href="#">Help</a>
            <a href="#">Contact</a>
            <a href="#">Fees</a>
            <a href="#">Security</a>
            <a href="#">Apps</a>
            <a href="#">Shop</a>
            <a href="#">EnterPrise</a>
            <a href="#">Partners</a>
          </div>
          <div>
            <img src={flag} alt="" className='w-9 sm:w-6 h-6' />
          </div>
            </div> 
          <div className='w-full h-1 my-4 border-t-2 border-gray-300'></div>
          <div className='flex justify-between mb-10'>
            <div className='flex gap-5 text-xs font-bold text-bglite flex-col lg:flex-row md:flex-wrap'>
                <a href="#">About</a>
                <a href="#">Newsroom</a>
                <a href="#">Jobs</a>
                <a href="#">Investor Relations</a>
                <a href="#">Values in Acion</a>
                <a href="#">Public Policy</a>
                <a href="#">Sitemap</a>
            </div>
            <div className='flex flex-col lg:flex-row gap-5 text-xs font-bold text-bglite '>
                <a href="#"  className='text-gray-500'>&#169; 1999-2022</a>
                <a href="#">Accessibility</a>
                <a href="#">Privacy</a>
                <a href="#">Cookies</a>
                <a href="#">Legal</a>
            </div>
          </div>
        </div>
    )
}

export default Footer

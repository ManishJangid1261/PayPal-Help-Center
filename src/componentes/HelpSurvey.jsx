import React from 'react'
import img1 from './imgs/ask.png'
import img2 from './imgs/hand-shake.png'
import img3 from './imgs/group.png'

function HelpServey() {
    return (
        <div className='w-full text-center flex flex-col justify-center items-center mb-16'>
            <h1 className='text-2xl xl:mt-12 pb-10'>More ways to get help</h1>
            <div className='flex justify-evenly xl:w-3/4 items-center'> 
                <div className='w-1/4 flex flex-col gap-2 items-center'>
                    <img src={img3} alt="" className='w-12' />
                    <h1 className='text-sm font-bold text-textcolor cursor-pointer'>Community Forum</h1>
                    <p className='text-xs font-semibold tracking-wide opacity-65'>Find answers or join the conversation</p>
                </div>
                <div className='w-1/4 flex gap-2 flex-col items-center'>
                    <img src={img2} alt="" className='w-12' />
                    <h1 className='text-sm font-bold text-textcolor cursor-pointer'>Resolution Center</h1>
                    <p className='text-xs font-semibold tracking-wide opacity-65'>Resolve transaction or account issues </p>
                </div>
                <div className='w-1/4 flex gap-2 flex-col items-center'>
                    <img src={img1} alt="" className='w-12' />
                    <h1 className='text-sm font-bold text-textcolor cursor-pointer' >Contact us</h1>
                    <p className='text-xs font-semibold tracking-wide opacity-65'>Contact Customer Service</p>
                </div>
            </div>
            <div className='mt-12 flex justify-evenly w-full sm:w-3/4 rounded-sm text-start  bg-gray-100 items-center py-5'>
            <div className='w-3/6 '>
            <h1 className='text-sm pb-2 font-medium'>How are we doing? </h1>
            <p className='text-xs hidden sm:block font-medium text-gray-700 w-4/6'>Help imrove the <b className=' font-bold text-black opacity-80' >PayPal Help Center experience</b> with some quick feedback</p>
            </div>
            <div>
                <button className='bg-bglite text-white text-xs px-4 py-2 font-medium rounded-full'>Take the survey</button>
            </div>
            </div>
        </div>
    )
}

export default HelpServey

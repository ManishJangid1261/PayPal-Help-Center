import React from 'react'
import { AlertCircle, Search, X } from 'react-feather'
import img1 from './imgs/teamwork.png'
import img2 from './imgs/love.png'
import img3 from './imgs/comment.png'
import Slidebuttons from './SlideButton'
import HelpServey from './HelpSurvey'
import Footer from './Footer'

function Home() {
    const remove = () => {
        document.querySelector('.searchbar').style.display = 'none';
    }
    return (
       <>
       <div className='pt-3'>
        <h1 className='text-xs font-semibold text-textcolor hover:underline cursor-pointer '>Help Center</h1>
       </div>
       <div className='flex flex-col justify-center items-center'>
        <div className= 'text-black flex flex-col justify-center items-center w-full  text-xl xl:text-2xl font-semibold pt-6'>
            <h1>How can we help?</h1>
            <div className='flex items-center gap-3 pl-2 border-[1.5px] border-gray-400 rounded-3xl w-3/4 xl:py-3 py-2 mt-4'>
                <Search size={20} className='text-gray-500'/>
            <input type="text" placeholder="Search by keyword " className='border-gray-500 outline-none text-sm  '/>

            </div>
        </div>

        <div className='searchbar w-11/12 flex gap-2  mt-8 bg-noticbg px-4 py-4 text-notictext rounded-xl'>
            <AlertCircle className='w-32  sm:w-14 sm:-mt-1 lg:w-6 lg:-mt-1 rounded-full text-notictext'/> <div>
            <p className='text-xs tracking-wide font-medium'>Received a suspicious email, fake invoice, or message? Don't reply, open links, download attachments, or call any listed phone numbers. We'll never ask for your PayPal password or financial details by email or message, or over the phone. Forward suspicious messages to <a href="#" className='text-textcolor font-bold'>phishing@paypal.com</a> and then delete them. </p></div>
            <X className='w-32 lg:w-6 lg:-mt-1  sm:w-14 sm:-mt-1 cursor-pointer' onClick={remove}/>
            </div>
            <div className='flex flex-col lg:flex-row mt-10 w-full items-center lg:justify-evenly gap-6'>
                <div className=' bg-white hover:drop-shadow-lg cursor-pointer drop-shadow-3xl rounded-xl flex items-center gap-6 w-full md:w-2/5 py-4 px-4 '>
                <div className='bg-gray-200 rounded-full w-10 h-10 flex justify-center items-center '>
                    <img src={img1} alt="" className='w-10  opacity-80 p-1 ' /> 
                    </div>
                    <div>
                    <h1 className='text-md font-bold' >Resolution Center</h1>
                    <p className='text-sm opacity-70  font-medium'>Resolve transaction or account issues </p>
                    </div>
                    </div>
                <div className=' bg-white drop-shadow-3xl rounded-xl flex items-center hover:drop-shadow-lg cursor-pointer gap-6 w-full md:w-2/5 py-4 px-4'>
                <div className='bg-gray-200 rounded-full w-10 h-10 flex justify-center items-center'>
                    <img src={img2} alt="" className='w-8 opacity-80 p-1 ' />
                    </div> 
                    
                    <div>
                    <h1 className='text-md font-bold'>Ask the Community</h1>
                    <p className='text-sm opacity-80  font-medium'>Find answers or join the conversation</p>
                    </div></div>
                <div className=' bg-white drop-shadow-3xl rounded-xl flex items-center cursor-pointer hover:drop-shadow-lg gap-6 w-full md:w-2/5 py-4 px-4 '>
                    <div className='bg-gray-200 rounded-full w-10 h-10 flex justify-center items-center'>
                        <img src={img3} alt="" className='w-8 p-1  ' /> 
                        
                        </div>
                        <div>
                    <h1 className='text-md font-bold'>Message Center</h1>
                    <p className='text-sm opacity-80  font-medium'>Send, receive. and view your PayPal messages</p>
                    </div></div>
            </div>
            
       </div>
       <Slidebuttons/>
       <HelpServey/>
       <Footer/>
       </> 
    )
}

export default Home

import React, { useState } from 'react'
import logo from './imgs/paypal.png'
import { Menu, X } from 'react-feather'
import { animated, useSpring } from 'react-spring'
function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuAnimation = useSpring({
        transform: isMenuOpen ? 'translateX(0%)' : 'translateX(-100%)',
    });

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (

        <div className='w-full h-20 border-b-2 border-gray-300 items-center flex px-4 justify-between md:px-16'>
              <div className='flex items-center gap-2 px-2 py-1 border-2 border-bgcolor rounded-full cursor-pointer hover:bg-gray-100 md:hidden' onClick={handleMenuToggle}>
                        <div className='flex text-center  md:justify-evenly md:w-40'>
                            <Menu onClick={handleMenuToggle} className='text-black mt-1 w-7 h-6 cursor-pointer' />
                            
                            
                            <animated.div style={menuAnimation} className="fixed top-0 left-0 bg-bgcolor sm:w-2/5 w-3/5 overflow-y-auto z-10 h-full ">
                                <div className='w-full flex justify-end p-3  mb-14 '>
                            <X onClick={handleMenuToggle}   className='text-white mt-1 w-7 h-6 cursor-pointer' />
                            </div>
                            <ul className=' pt-1 text-sm font-semibold  text-white'>
                        <li className='py-6 hover:border-y-[1px] border-white hover:text-gray-400'>Personal</li>
                        <li className='py-6 hover:border-y-[1px] border-white hover:text-gray-400'>Business</li>
                        <li className='py-6 hover:border-y-[1px] border-white hover:text-gray-400'>Developer</li>
                        <li className='py-6 hover:border-y-[1px] border-white hover:text-gray-400'>Help</li>
                    </ul>

                    <div className='fixed inset-x-0 bottom-20 '>
                    <button className='text-sm font-semibold text-white bg-bgcolor border-2 border-white px-14 py-3 rounded-full hover:text-gray-300'>Sign Up</button>
                    </div>
                            </animated.div>

                        </div>
                        <h1 className='text-sm font-semibold text-bgcolor '>menu</h1>
                    </div>
            <div className='md:w-3/4'>
                <div className=' flex md:10 xl:gap-20 justify-evenly xl:justify-normal'>
                  
                    <img src={logo} alt="logo" className='w-8' />
                    <ul className='md:flex md:gap-10 xl::gap-20 pt-1 text-sm font-semibold hidden  text-lite'>
                        <li className='hover:underline cursor-pointer hover:text-bgcolor'>Personal</li>
                        <li className='hover:underline cursor-pointer hover:text-bgcolor'>Business</li>
                        <li className='hover:underline cursor-pointer hover:text-bgcolor'>Developer</li>
                        <li className='hover:underline cursor-pointer hover:text-bgcolor'>Help</li>
                    </ul>

                </div>

            </div>
            <div className='flex gap-3'>
            <button className='text-sm font-semibold text-bgcolor border-2 border-bgcolor px-5 py-1 rounded-full hover:bg-gray-200'>Log In</button>
            <button className='text-sm hidden md:block font-semibold text-white bg-bgcolor border-2 border-bgcolor px-5 py-1 rounded-full hover:text-gray-300'>Sign Up</button>
            </div>
        </div>

        // </div>




    )
}

export default Navbar

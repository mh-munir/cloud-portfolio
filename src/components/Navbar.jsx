import React, {useState} from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const handleClose = () => setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-sm'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>
                <ul className='hidden md:flex'>
                    <li className='cursor-pointer'>
                        <Link to="home" spy={true} smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className='cursor-pointer'>
                        <Link to="about" spy={true} smooth={true} offset={-200} duration={500}>About</Link>
                    </li>
                    <li className='cursor-pointer'>
                        <Link to="support" spy={true} smooth={true} offset={-50} duration={500}>Support</Link>
                    </li>
                    <li className='cursor-pointer'>
                        <Link to="platform" spy={true} smooth={true} offset={-100} duration={500}>Platforms</Link>
                    </li>
                    <li className='cursor-pointer'>
                        <Link to="pricing" spy={true} smooth={true} offset={-50} duration={500}>Pricing</Link>
                    </li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                <button className='px-6 py-2'>Sign Up</button>
            </div>
            <div onClick={handleClick} className='md:hidden'>
                {!nav?  <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
            </div>
        </div>
        <ul className={!nav? 'hidden': 'absolute bg-zinc-200 w-full px-8 md:hidden'}>
            <li className='border-b-2 border-zinc-300 cursor-pointer'>
                <Link onClick={handleClose} to="home" spy={true} smooth={true} duration={500}>Home</Link>
            </li>
            <li className='border-b-2 border-zinc-300 cursor-pointer'>
                <Link onClick={handleClose} to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
            </li>
            <li className='border-b-2 border-zinc-300 cursor-pointer'>
                <Link onClick={handleClose} to="support" spy={true} smooth={true} offset={-50} duration={500}>Support</Link>
            </li>
            <li className='border-b-2 border-zinc-300 cursor-pointer'>
                <Link onClick={handleClose} to="platform" spy={true} smooth={true} offset={-100} duration={500}>Platforms</Link>
            </li>
            <li className='cursor-pointer'>
                <Link onClick={handleClose} to="pricing" spy={true} smooth={true} offset={-50} duration={500}>Pricing</Link>
            </li>
            <div className='flex flex-col my-4'>
                <button className='bg-transparent text-indigo-600 px-6 py-2 mb-4'>Sign In</button>
                <button className='px-6 py-2'>Sign Up</button>
            </div>
        </ul>
    </div>
  )
}

export default Navbar;
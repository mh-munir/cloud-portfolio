import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon
} from '@heroicons/react/solid'
import bgImg from '../assests/cyber-bg.png'

const Hero = () => {
  return (
    <div name="home" className='w-full min-h-screen bg-zinc-200 flex flex-col pt-16 justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl text-zinc-800 capitalize'>Unique Sequencing & Production</p>
                <h1 className='py-5 text-5xl md:text-7xl font-bold text-zinc-800 capitalize'>Cloud Management</h1>
                <p className='text-2xl text-zinc-800'>This is our Tech brand.</p>
                <button className='py-3 px-6 sm:w-[40%] my-5'>Get Started</button>
            </div>
            <div>
                <img src={bgImg}className="w-[80%] mx-auto" alt="/" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] sm:bottom-[5%] bottom-[-10%] mx-1 md:left-1/2 transform md:-translate-x-1/2
                bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl'>
                <p className='mb-2 font-bold text-zinc-600'>Data Services</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex items-center px-4 py-2 text-slate-500 gap-2'><CloudUploadIcon className='w-5 text-indigo-600'/> App Security</p>
                    <p className='flex items-center px-4 py-2 text-slate-500 gap-2'><DatabaseIcon className='w-5 text-indigo-600'/> Dashboard Desig</p>
                    <p className='flex items-center px-4 py-2 text-slate-500 gap-2'><PaperAirplaneIcon className='w-5 text-indigo-600'/> Cloud Data</p>
                    <p className='flex items-center px-4 py-2 text-slate-500 gap-2'><ServerIcon className='w-5 text-indigo-600'/> API</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
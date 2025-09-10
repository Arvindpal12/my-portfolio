import React from 'react'
import studentA from "../../assets/studentA.png"
import TextChange from '../TextChange'


const Home = () => {
    return (
        <div className='text-white flex flex-wrap w-full h-auto justify-between item-start p-10 md:p-20'>
            <div className='md:w-2/4 md:pt-10'>
                <h1 className='text=3xl md:text-6xl font-bold flex leading-normal tracking-tighter'><TextChange /></h1>
                <p className='text-sm md:text-2xl tracking-tight'>I’m a Freelance Web Developer skilled in HTML, CSS, JavaScript, React.js, Tailwind CSS, WordPress, and PHP. I create modern, responsive, and user-friendly websites that help businesses grow and stand out online.
                   
                </p>
                <button className=' mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:px-4 hover:opacity-85
            duration-300 hover:scale-105  font-semibold rounded-3xl bg-[#465697]'>Contact Me</button>
            </div>
            <div className='flex flex-wrap item-center justify-around '><img className='w-full h-auto animate-updown ' src={studentA} alt="" /></div>
        </div>
    )
}

export default Home
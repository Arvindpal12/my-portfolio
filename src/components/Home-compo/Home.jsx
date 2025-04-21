import React from 'react'
import studentA from "../../assets/studentA.png"
import TextChange from '../TextChange'


const Home = () => {
    return (
        <div className='text-white flex flex-wrap w-full h-auto justify-between item-start p-10 md:p-20'>
            <div className='md:w-2/4 md:pt-10'>
                <h1 className='text=3xl md:text-6xl font-bold flex leading-normal tracking-tighter'><TextChange /></h1>
                <p className='text-sm md:text-2xl tracking-tight'>Seeking an entry-level front-end devloper role where i can apply my skill in html, css, js, and reactjs and responsive degine to create visually apperaling and user-friendly website
                    or Looking to join a team where i can contribute to real-world application and grow my technical skill
                </p>
                <button className=' mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:px-4 hover:opacity-85
            duration-300 hover:scale-105  font-semibold rounded-3xl bg-[#465697]'>Contact Me</button>
            </div>
            <div className='flex flex-wrap item-center justify-around '><img className='w-full h-auto animate-updown ' src={studentA} alt="" /></div>
        </div>
    )
}

export default Home
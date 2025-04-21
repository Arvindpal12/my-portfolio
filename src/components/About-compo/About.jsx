import React from 'react'
import { IoArrowForward } from "react-icons/io5"
import avtar3 from "../../assets/avtar3.webp"



const About = () => {
    return (
        <div id='About' className='text-white md:flex overflow-hidden item-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
            <div><h2 className='text-2xl md:text-4xl font-bold text-left'>About</h2>
                <div className='md:flex flex-wrap flex-col md:flex-row'>
                    <img className='md:h-80 transition-transform duration-700 ease-in-out hover:scale-125' src={avtar3} alt="About img" />
                    <ul>
                        <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className="mt-1" />
                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend developer</h1>
                                <p className='text-sm md:text-md leading-tight'>
                                   To obtain a front-end development position that allows me to apply my knowledge of modern web technologies and framwork like tailwind css aand react to build efficient,scalble user interface

                                </p>
                            </span>
                        </div>
                        <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className="mt-1" />
                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend engineer</h1>
                                <p className='text-sm md:text-md leading-tight'>
                                    Seeking a role as a frontend engineer to contribute to high-quality web application using technologies like
                                    react, tailwind css and git while continously learning and growing in a collaborative devlopment enviroment

                                </p>
                            </span>
                        </div>
                        <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className="mt-1" />
                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Softwere developer</h1>
                                <p className='text-sm md:text-md leading-tight'>
                                    Looking  for a challenging softwere devlopment role that allow me to work on meaningful solution collabrate with experienced devlopers and
                                    continously enhance my technical skill

                                </p>
                            </span>
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default About
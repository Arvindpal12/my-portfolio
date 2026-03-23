import React from 'react'
import { MdOutlineEmail } from "react-icons/md"
import { FaGithub } from 'react-icons/fa'
import { CiLinkedin } from "react-icons/ci"
import { HiPhone } from 'react-icons/hi'
import { FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div id='Footer' className='flex flex-col md:flex-row justify-around items-center gap-6 md:gap-0 bg-[#0e1946] text-white p-10 md:p-12'>
            <div className='text-center md:text-left'>
                <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
                <h3 className='text-sm md:text-2xl font-normal'>Feel free to reach out</h3>

            </div>
            <ul className='text-sm md:text-xl'>
                 <li className='flex gap-1 items-center'>
                    <MdOutlineEmail size={30}/><a href='mailto:arvindpal6706@gmail.com' target='_blank' rel='noopener noreferrer'>arvindpal6706@gmail.com</a>
                    </li>
             
                <li className='flex gap-1 items-center'>
                    <CiLinkedin size={30} /><a href='https://www.linkedin.com/in/mohit-15743a352' target='_blank' rel='noopener noreferrer'>
                   www.linkedin.com/in/mohit-15743a352 </a>
                </li>
                <li className='flex gap-1 items-center'>
                    <FaGithub size={30} /><a href='https://github.com/Arvindpal12' target='_blank' rel='noopener noreferrer'>
                    github.com/Arvindpal12</a>
                </li>
                <a href=''target='_blank' rel=''>
                <li className='flex gap-2 items-center'>
                    <HiPhone size={25} /> 
                    7398696706
                </li></a>
            </ul>
        </div>
    )
}

export default Footer

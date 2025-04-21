import React from 'react'
import { MdOutlineEmail } from "react-icons/md"
import { FaGithub } from 'react-icons/fa'
import { CiLinkedin } from "react-icons/ci"
import { HiPhone } from 'react-icons/hi'
import { FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div id='Footer' className='flex justify-around bg-[#0e1946] text-white p-10 md:p-12 items-center'>
            <div>
                <h1 className='text-2xl md:text-6xl font-bold'>Contect</h1>
                <h3 className='text-sm md:text-2xl font-normal'>Feel free to reach out</h3>

            </div>
            <ul className='text-sm md:text-xl'>
                <li className='flex gap-1 items-center'>
                    <MdOutlineEmail size={30} />
                    arvindpal6706@gmail.com
                </li>
                <li className='flex gap-1 items-center'>
                    <CiLinkedin size={30} />
                    linkedin.com/arvindpal
                </li>
                <li className='flex gap-1 items-center'>
                    <FaGithub size={30} />
                    github.com/Arvindpal12
                </li>
                <li className='flex gap-2 items-center'>
                    <HiPhone size={25} />
                    7398696706
                </li>
                <li className='flex gap-2 items-center'>
                    <FaTwitter size={25} />
                    @ArvindPal696706

                </li>
            </ul>
        </div>
    )
}

export default Footer
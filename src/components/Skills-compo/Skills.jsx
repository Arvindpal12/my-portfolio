import React from 'react';
import avtar from "../../assets/avtar.png"
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiGithub, SiMysql } from "react-icons/si";
import { UserIcon } from '@heroicons/react/24/solid'
import { SiTailwindcss } from 'react-icons/si';
import { FaWordpress, FaPhp } from "react-icons/fa";

// import { FaGoogle } from "react-icons/fa";
import { SiPython } from "react-icons/si";
// import { RiNetflixFill } from "@remixicon/react";
// import { FaAmazon } from "react-icons/fa";


const Exprince = () => {
  return (
    <div id='Skills' className='p-10 md:p-24'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Skills</h1>
      <div className='flex flex-wrap item-center justify-around'>
        <div className='flex flex-wrap md:w-2/5 gap-8 md:p-20 py-10'>
          <span className='p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <FaCss3 color="#1572b6" size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <SiTailwindcss color="#3b82f6" size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            < SiPython color="#3776AB" size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <SiGithub color="#FF4438" size={50} />
          </span>
           <span className='p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <FaWordpress color="#00749C" size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <FaPhp color="#777BB4" size={50} />
          </span>
             <span className='p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <SiMysql color="#F29111" size={50} />
          </span>

        </div>
        <div >
          <div className='flex flex-col md:flex-row gap-4 md:gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center md:items-start'>
            {/* <FaGoogle color='#4285FA' size={50} /> */}
            <div className='flex flex-wrap group [perspective:1000px] w-full md:w-auto'>
              <img className='w-full max-w-xs h-auto transition-transform duration-700 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]' src={avtar} alt="" />
            </div>
            <span className='text-white w-full md:w-96'>
              <div className='pr-0 md:pr-4'>
                <h2 className='leading-tight text-center md:text-left'>Qualification</h2>
                <p className='text-sm md:text-base leading-tight font-bold'>
                   Diploma in  : Computer Science Engineering
                </p>
                <ul className='text-sm md:text-base p-2'>
                  <li>1.  12th from HBSE Board :- G.M.Sr.Sec.School</li>
                  <li>2.  Over All Diploma percentage are (78%)
                  </li>
                </ul>
              </div>
            </span>
          </div>
          {/*<div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center transition-transform duration-200 ease-in-out hover:scale-125'>
            <RiNetflixFill color='#E50914' size={50} />
            <span className='text-white'>
              <h2 className='leading-tight'>Softwere Engineer,Google</h2>
              <p className='text-sm leading-tight font-thin'>
                Sept 2023 - Present
              </p>
              <ul className='text-sm p-2'>
                <li>work as softwere devloper</li>
                <li>work as SDE devloper</li>
              </ul>
            </span>
          </div>
          <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center transition-transform duration-200 ease-in-out hover:scale-125'>
            <FaAmazon color='#FF9900' size={50} />
            <span className='text-white'>
              <h2 className='leading-tight'>Softwere Engineer,Google</h2>
              <p className='text-sm leading-tight font-thin'>
                Sept 2023 - Present
              </p>
              <ul className='text-sm p-2'>
                <li>work as softwere devloper</li>
                <li>work as SDE devloper</li>
              </ul>
            </span>
          </div>
        </div> */}
          {/* <div>
            <div className=' flex flex-wrap group [perspective:1000px] w-100 h-100' >
              <img className='w-full h-full transition-transform duration-700 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]' src={avtar} alt="" />
            </div>

          </div> */}


        </div>
      </div >
    </div>
  )
}


export default Exprince
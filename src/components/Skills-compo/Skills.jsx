import React from 'react';
import avtar from "../../assets/avtar.png"
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiGithub, SiMysql } from "react-icons/si";
import { UserIcon } from '@heroicons/react/24/solid'
import { SiTailwindcss } from 'react-icons/si';
import { FaWordpress, FaPhp } from "react-icons/fa";
import { SiShopify, SiMongodb, SiNodedotjs, SiExpress } from 'react-icons/si';

// import { FaGoogle } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { TbSql } from 'react-icons/tb';
// import { RiNetflixFill } from "@remixicon/react";
// import { FaAmazon } from "react-icons/fa";


const Exprince = () => {
  return (
    <div id='Skills' className='p-10 md:p-24'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Skills</h1>
      <div className='flex flex-wrap item-center justify-around'>
        <div className='grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-8 md:p-20 py-10'>
          <span className='p-2 sm:p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className='p-2 sm:p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <FaCss3 color="#1572b6" size={50} />
          </span>
          <span className='p-2 sm:p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className='p-2 sm:p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <SiTailwindcss color="#3b82f6" size={50} />
          </span>
          <span className='p-2 sm:p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <TbSql color=" #00758F" size={50} />
          </span>
          <span className='p-2 sm:p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className='p-2 sm:p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className='p-2 sm:p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            < SiPython color="#3776AB" size={50} />
          </span>
          <span className='p-2 sm:p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <SiGithub color="#FF4438" size={50} />
          </span>
           <span className='p-2 sm:p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <FaWordpress color="#00749C" size={50} />
          </span>
          <span className='p-2 sm:p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <FaPhp color="#777BB4" size={50} />
          </span>
             <span className='p-2 sm:p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <SiMysql color="#F29111" size={50} />
          </span>
          <span className='p-2 sm:p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <SiNodedotjs color="#339933" size={50} />
          </span> 
          <span className='p-2 sm:p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>    
        <SiExpress color="#44883e" size={50} />
          </span>
          <span className='p-2 sm:p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className='p-2 sm:p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <SiShopify color="#96BF48" size={50} />
          </span>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-10 md:gap-20 mt-10 md:mt-20 justify-center items-center'>

          

        </div>
        {/* <div className='w-full'>
          <div className='flex flex-col md:flex-row gap-4 md:gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center md:items-center'>
        
            <div className='flex flex-wrap group [perspective:1000px] w-full md:w-auto'>
              <img className='w-full max-w-xs h-auto transition-transform duration-700 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]' src={avtar} alt="" />
            </div>
            <span className='text-white w-full md:w-96'>
              <div className="text-white w-full md:w-80 lg:w-96 p-4 sm:p-6 flex flex-col items-center lg:items-start">
              <h2 className="leading-tight text-xl sm:text-2xl font-bold mb-4 text-center lg:text-left">
                Qualification
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-tight font-bold mb-2">
                Diploma :- Computer Science Engg.,Govt.Polytechnic Mandi Adampur,Hisar
              </p>
              <ul className="text-xs sm:text-sm md:text-base lg:text-lg space-y-1">
                <li>SENIOR SECONDARY EDUCATION:-G.M.S.S.School</li>
                <li>SECONDARY EDUCATION:-G.M.S.S.SchoolL</li>
              </ul>
            </div>
            </span>
          </div>
        </div> */}
         {/* <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 bg-slate-950/70 backdrop-blur-md rounded-3xl p-8 md:p-12 lg:p-16 items-center lg:items-start w-full max-w-6xl mx-auto shadow-2xl">
            <div className="flex flex-wrap group [perspective:1000px] w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0">
              <img
                className="max-w-48 sm:max-w-56 md:max-w-64 h-auto mx-auto transition-transform duration-700 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d] rounded-lg shadow-lg"
                src={avtar}
                alt=""
              />
            </div>
            <div className="text-white w-full md:w-80 lg:w-96 p-4 sm:p-6 flex flex-col items-center lg:items-start">
              <h2 className="leading-tight text-xl sm:text-2xl font-bold mb-4 text-center lg:text-left">
                Qualification
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-tight font-bold mb-2">
                Diploma :- Computer Science Engg.,Govt.Polytechnic Mandi Adampur,Hisar
              </p>
              <ul className="text-xs sm:text-sm md:text-base lg:text-lg space-y-1">
                <li>SENIOR SECONDARY EDUCATION:-G.M.S.S.School</li>
                <li>SECONDARY EDUCATION:-G.M.S.S.SchoolL</li>
              </ul>
            </div>
          </div>
        </div> */}
         <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 bg-slate-950/70 backdrop-blur-md rounded-3xl p-8 md:p-12 lg:p-16 items-center lg:items-start w-full max-w-6xl mx-auto shadow-2xl">
            <div className="flex flex-wrap group [perspective:1000px] w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0">
              <img
                className="max-w-48 sm:max-w-56 md:max-w-64 h-auto mx-auto transition-transform duration-700 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d] rounded-lg shadow-lg"
                src={avtar}
                alt=""
              />
            </div>
            <div className="text-white w-full md:w-80 lg:w-96 p-4 sm:p-6 flex flex-col items-center lg:items-start">
              <h2 className="leading-tight text-xl sm:text-2xl font-bold mb-4 text-center lg:text-left">
                Qualification
              </h2>
               <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-tight font-bold mb-2 whitespace-nowrap">
                PURSUING B.TECH :- Computer Science Engg.<br/>IES UNIVERSITY, Bhopal
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-tight font-bold mb-2 whitespace-nowrap">
                Diploma :- Computer Science Engg.<br/>G.P.M.A,Hisar
              </p>
              <ul className="text-xs sm:text-sm md:text-base lg:text-lg space-y-1">
                <li>SENIOR SECONDARY EDUCATION:-G.M.S.S.School</li>
                <li>SECONDARY EDUCATION:-G.M.S.S.School</li>
              </ul>
            </div>
          </div>
        </div>
      </div >
  
  )
}


export default Exprince

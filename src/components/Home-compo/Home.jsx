import React from "react";
import studentA from "../../assets/studentA.png";
import TextChange from "../TextChange";
import { motion } from "framer-motion";

const Home = () => {
  return (
  

    // <div className="text-white flex flex-wrap w-full h-auto justify-between item-start p-10 md:p-20">
    //   <div className="md:w-2/4 md:pt-10">
    //     <h1 className="text=3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
    //       <TextChange />
    //     </h1>
    //     <p className="text-sm md:text-2xl tracking-tight">
    //       I’m a Web Developer skilled in HTML, CSS, JavaScript, React.js,
    //       Tailwind CSS, WordPress, and PHP. I create modern, responsive, and
    //       user-friendly websites that help businesses grow and stand out online.
    //     </p>
      <motion.div
      className="text-white flex flex-wrap w-full h-auto justify-between item-start p-10 md:p-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      
      {/* LEFT SECTION */}
      <motion.div
        className="md:w-2/4 md:pt-10"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>

        <p className="text-sm md:text-2xl tracking-tight">
          I’m a Web Developer skilled in HTML, CSS, JavaScript, React.js,
          Tailwind CSS, WordPress, and PHP. I create modern, responsive, and
          user-friendly websites that help businesses grow and stand out online.
        </p>

       
        {/* <a href='https://wa.me/7398696706'target='blank'>
                <button className=' mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:px-4 hover:opacity-85
            duration-300 hover:scale-105  font-semibold rounded-3xl bg-[#465697]'>Contact Me</button></a> */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:px-4 hover:opacity-85 duration-300 font-semibold rounded-3xl bg-[#465697]"
        >
          Contact Me
        </motion.button>
      </motion.div>
      <div className="flex flex-wrap item-center justify-around ">
        <img className="w-full h-auto animate-updown " src={studentA} alt="" />
      </div>
    </motion.div>
  );
};

export default Home;

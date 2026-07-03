// import React from "react";
// import { IoArrowForward } from "react-icons/io5";
// import avtar3 from "../../assets/avtar3.webp";
// import { motion } from "framer-motion";


// const About = () => {
//   return (
//     <div
//       id="About"
//       className="text-white md:flex overflow-hidden item-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
//     >
//       <motion.div
//         id="About"
//         className="text-white md:flex overflow-hidden item-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={container}
//       ></motion.div>
//       <div>
//         <motion.h2
//           className="text-2xl md:text-4xl font-bold text-left"
//           variants={fadeInUp}
//         >
//           About
//         </motion.h2>
//         <div className="md:flex flex-wrap flex-col md:flex-row">
//           <img
//             className="md:h-80 transition-transform duration-700 ease-in-out hover:scale-125"
//             src={avtar3}
//             alt="About img"
//           />
//           <ul>
//             <div className="flex gap-3 py-4">
//               <IoArrowForward size={30} className="mt-1" />
//               <span className="w-96">
//                 <h1 className="text-xl md:text-2xl font-semibold leading-normal">
//                   Frontend developer
//                 </h1>
//                 <p className="text-sm md:text-md leading-tight">
//                   To obtain a front-end development position that allows me to
//                   apply my knowledge of modern web technologies and framwork
//                   like tailwind css aand react to build efficient,scalble user
//                   interface
//                 </p>
//               </span>
//             </div>
//             <div className="flex gap-3 py-4">
//               <IoArrowForward size={30} className="mt-1" />
//               <span className="w-96">
//                 <h1 className="text-xl md:text-2xl font-semibold leading-normal">
//                   WordPress Developer
//                 </h1>
//                 <p className="text-sm md:text-md leading-tight">
//                   I specialize in WordPress customization, theme development,
//                   plugin integration, and website optimization to deliver a
//                   smooth user experience and professional online presence. My
//                   goal is to help businesses and individuals build websites that
//                   are both visually appealing and highly functional.
//                 </p>
//               </span>
//             </div>
//             <div className="flex gap-3 py-4">
//               <IoArrowForward size={30} className="mt-1" />
//               <span className="w-full md:w-96">
//                 <h1 className="text-xl md:text-2xl font-semibold leading-normal">
//                   Softwere developer
//                 </h1>
//                 <p className="text-sm md:text-md leading-tight">
//                   Looking for a challenging softwere devlopment role that allow
//                   me to work on meaningful solution collabrate with experienced
//                   devlopers and continously enhance my technical skill
//                 </p>
//                 <div className="pt-4 flex justify-start md:justify-start">
//                   <a
//                     href="/Arvind wordpress developer-2.pdf"
//                     download="Arvind-Resume.pdf"
//                     className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-base rounded-lg shadow-lg shadow-blue-900/50 hover:from-blue-500 hover:to-purple-500 hover:shadow-xl hover:scale-105 transition-all duration-300 hover:-translate-y-1 group"
//                   >
//                     Download Resume
//                     <IoArrowForward
//                       className="ml-2 group-hover:translate-x-2 transition-transform duration-300"
//                       size={20}
//                     />
//                   </a>
//                 </div>
//               </span>
//             </div>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from "react";
import { IoArrowForward } from "react-icons/io5";
import avtar3 from "../../assets/avtar3.webp";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden item-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-left">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row">
          <div className="flex justify-center pt-8">
            <img
              className="md:h-80 transition-transform duration-700 ease-in-out hover:scale-125 pt-4 md:pt-6 max-w-sm w-full"
              src={avtar3}
              alt="About img"
            />
          </div>
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                 Full-Stack Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Full-Stack Developer with a strong track record of designing,
                building, and deploying scalable, end-to-end web applications. 
                Proficient across the entire stack—from intuitive frontend user 
                interfaces to robust backend architectures and cloud infrastructure.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                   WordPress & Shopify Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                 WordPress & Shopify Developer specialized in
                 building high-converting e-commerce storefronts and custom CMS solutions.
                 Expert at transforming design mockups into fast, 
                 responsive, and SEO-optimized web experiences using PHP,
                 Liquid, and modern frontend tools.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Softwere Developer 
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Looking for a challenging softwere devlopment role that allow
                   me to work on meaningful solution collabrate with experienced
                   devlopers and continously enhance my technical skill
                </p>
                <div className="text-sm pt-4 flex justify-start">
                  <a
                    href="/Arvind wordpress developer-2.pdf"
                    download="Fullstack developer.pdf"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-base rounded-lg shadow-lg shadow-blue-900/50 hover:from-blue-500 hover:to-purple-500 hover:shadow-xl hover:scale-105 transition-all duration-300 hover:-translate-y-1 group"
                  >
                    Download Resume
                    <IoArrowForward
                      className="ml-2 group-hover:translate-x-2 transition-transform duration-300"
                      size={20}
                    />
                  </a>
                </div>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;


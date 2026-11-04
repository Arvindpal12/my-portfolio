import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
   const handleDemo1 = () => {
    window.open('https://bmstool.vercel.app/') // Placeholder for demo
  };
  const handleSource1 = () => {
    window.open('https://github.com/Arvindpal12/Business-management-tool.git')
  };
  const handleDemo2 = () => {
    window.open('https://ai-ap-projects.netlify.app/')
  };
  const handleSource2 = () => {
    window.open('https://github.com/Arvindpal12/AI-based-Project.git')
  };

  const handleDemo3 = () => {
    window.open('https://apdigital.netlify.app/')
  };
  const handleSource3 = () => {
    window.open('https://github.com/Arvindpal12/AP-Solutions-.git')
  };
   const handleDemo4 = () => {
    window.open('https://lightcoral-eagle-166290.hostingersite.com/') // Placeholder for demo
  };
  const handleSource4 = () => {
    window.open('https://github.com/Arvindpal12')
  };
  const handleDemo5 = () => {
    window.open('https://ritikjha-portfolio.netlify.app/')
  };
   const handleSource5 = () => {
    window.open('https://github.com/Arvindpal12/ritu-portfolio-.git')
  };
  const handleDemo6 = () => {
    window.open('https://thoughtwilldigital.com/')
  };
   const handleSource6 = () => {
    window.open('https://github.com/Arvindpal12')
  };

  return (
    <div id='projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'> Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5 justify-center'>
             <ProjectCard title="BMS TOOL"
            main="Developing a scalable full-stack business management application featuring user authentication, inventory management, sales, and purchase tracking. Integrated MongoDB and RESTful APIs for efficient data management and automated stock updates." onDemoClick={handleDemo1} onSourceClick={handleSource1} />
            <ProjectCard title="Institute Website "
            main="Developed a fully functional, responsive institute website using WordPress and custom coding, featuring course management, student-focused content, and an intuitive user interface to enhance the online learning experience." onDemoClick={handleDemo2} onSourceClick={handleSource2} />
          
              <ProjectCard title="DM Website"
            main="Developed a responsive full-stack digital agency website featuring a modern UI, smooth animations, and dynamic functionality. Integrated RESTful APIs using Node.js, Express.js, and MongoDB for data management, along with Resend API for contact form email functionality." onDemoClick={handleDemo3} onSourceClick={handleSource3}
            />



        </div>
         <div className='py-12 px-8 flex flex-wrap gap-5 justify-center'>
             <ProjectCard title="AI Assistent"
            main="An AI-powered assistant built with JavaScript, andinteractive user interface. Designed with modular, feature-rich functionality to provide seamless user experience and efficient task automation." onDemoClick={handleDemo4} onSourceClick={handleSource4} />
            <ProjectCard title="Portfolio website"
            main="A fully-featured, professional website built with React.js, enhanced with GSAP for smooth, high-performance animations. Developed using a modern tech stack to deliver a responsive, visually engaging, " onDemoClick={handleDemo5} onSourceClick={handleSource5} />
          
              <ProjectCard title="Business Website"
            main="Developing a responsive digital marketing website using WordPress, WooCommerce, Elementor Pro, and custom coding, featuring modern UI/UX, service showcases, and e-commerce functionality to deliver a seamless user experience." onDemoClick={handleDemo6} onSourceClick={handleSource6}
            />



        </div>
        
        
       </div>
  )
}

export default Projects
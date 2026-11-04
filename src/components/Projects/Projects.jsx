import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const handleDemo1 = () => {
    window.open('https://apdigital.netlify.app/') // Placeholder for demo
  };
  const handleSource1 = () => {
    window.open('https://github.com/Arvindpal12/AP-Solutions-.git')
  };

  const handleDemo2 = () => {
    window.open('https://ritikjha-portfolio.netlify.app/')
  };
  const handleSource2 = () => {
    window.open('https://github.com/Arvindpal12/IITan-portfolio.git')
  };

  const handleDemo3 = () => {
    window.open('https://ai-ap-projects.netlify.app/')
  };
  const handleSource3 = () => {
    window.open('https://github.com/Arvindpal12/AI-based-Project.git')
  };

  return (
    <div id='projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'> Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5 justify-center'>
             <ProjectCard title="BMS TOOL"
            main="Developing a scalable full-stack business management application featuring user authentication, inventory management, sales, and purchase tracking. Integrated MongoDB and RESTful APIs for efficient data management and automated stock updates." onDemoClick={handleDemo3} onSourceClick={handleSource3} />
            <ProjectCard title="Institute Website "
            main="Developed a fully functional, responsive institute website using WordPress and custom coding, featuring course management, student-focused content, and an intuitive user interface to enhance the online learning experience." onDemoClick={handleDemo2} onSourceClick={handleSource2} />
          
              <ProjectCard title="DM Website"
            main="Developed a responsive full-stack digital agency website featuring a modern UI, smooth animations, and dynamic functionality. Integrated RESTful APIs using Node.js, Express.js, and MongoDB for data management, along with Resend API for contact form email functionality." onDemoClick={handleDemo1} onSourceClick={handleSource1}
            />



        </div>
         <div className='py-12 px-8 flex flex-wrap gap-5 justify-center'>
             <ProjectCard title="AI Assistent"
            main="An AI-powered assistant built with JavaScript, andinteractive user interface. Designed with modular, feature-rich functionality to provide seamless user experience and efficient task automation." onDemoClick={handleDemo3} onSourceClick={handleSource3} />
            <ProjectCard title="Professional website"
            main="A fully-featured, professional website built with React.js, enhanced with GSAP for smooth, high-performance animations. Developed using a modern tech stack to deliver a responsive, visually engaging, " onDemoClick={handleDemo2} onSourceClick={handleSource2} />
          
              <ProjectCard title="Business Website"
            main="Developing a responsive digital marketing website using WordPress, WooCommerce, Elementor Pro, and custom coding, featuring modern UI/UX, service showcases, and e-commerce functionality to deliver a seamless user experience." onDemoClick={handleDemo1} onSourceClick={handleSource1}
            />



        </div>
        
        
       </div>
  )
}

export default Projects
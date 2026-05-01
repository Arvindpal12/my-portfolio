import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const handleDemo1 = () => {
    window.open('https://rscadworks.com/') // Placeholder for demo
  };
  const handleSource1 = () => {
    window.open('https://github.com/Arvindpal12/Tic-toc-game.git')
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
             <ProjectCard title="AI Assistent"
            main="This is a AI Assistent create in js and use some features and using  css and html" onDemoClick={handleDemo3} onSourceClick={handleSource3} />
            <ProjectCard title="Professional website"
            main="This is a Professional website create in Reactjs and fully featured website using Reactjs and gsap and more langunage " onDemoClick={handleDemo2} onSourceClick={handleSource2} />
          
              <ProjectCard title="Interior Design Services Website"
            main="Developed a Interior website using wordPress Plugin and Theame" onDemoClick={handleDemo1} onSourceClick={handleSource1}
            />



        </div>
       </div>
  )
}

export default Projects
import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const handleDemo1 = () => {
    window.open('https://tic-toc-teo-game.netlify.app/') // Placeholder for demo
  };
  const handleSource1 = () => {
    window.open('https://github.com/Arvindpal12/Tic-toc-game.git')
  };

  const handleDemo2 = () => {
    window.open('https://currencyap.netlify.app/')
  };
  const handleSource2 = () => {
    window.open('https://github.com/Arvindpal12/project-currency-converter.git')
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
            <ProjectCard title="Currency Converter"
            main="This is a Currency Convertor create in js and use some features and using  css and html" onDemoClick={handleDemo2} onSourceClick={handleSource2} />
          
              <ProjectCard title="Tic-Toc-Teo Game"
            main="This is a Tic-Toc-Teo developed using ReactJS, Tailwind CSS, and core HTML/CSS/JavaScript." onDemoClick={handleDemo1} onSourceClick={handleSource1}
            />



        </div>
       </div>
  )
}

export default Projects
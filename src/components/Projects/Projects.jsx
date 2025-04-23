import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const handleClick1=()=>{
    window.open('https://github.com/Arvindpal12/Restaurant-project.git')

  };
  const handleClick2=()=>{
    window.open('https://github.com/Arvindpal12/project-currency-converter.git')

  };
  const handleClick3=()=>{
    window.open('https://github.com/Arvindpal12/AI-based-Project.git')

  }

  return (
    <div id='projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'> Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5 justify-center'>
            <ProjectCard title="Resturant Website"
            main="this is a rasturent website create in bootstrap and use some features and using basic css and html" onClick={handleClick1}/>
            <ProjectCard title="Currency Converter"
            main="this is a Currency Convertor create in js and use some features and using  css and html" onClick={handleClick2}/>
            <ProjectCard title="AI Assistent"
            main="this is a AI Assistent create in js and use some features and using  css and html"onClick={handleClick3}/>



        </div>
       </div>
  )
}

export default Projects
import React, { useEffect, useState } from 'react'
import ProjectApi from '../api/ProjectApi'
import SingleProject from './SingleProject'


function Project() {
    const [project,setProject] = useState([])
    useEffect(() => {
        setProject(ProjectApi)
    },[])
    console.log(project)
  return (
    <div className='flex flex-col gap-16 justify-center items-center mt-20'>
        <strong className='text-white'>PROJELER</strong>
        <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 gap-10'>
            {
                project.map((dt,i) => (
                    <SingleProject projectName={dt.projectName} projectImg={dt.projectImg} link={dt.link} i={i} />
                ))
            }
        </div>
    </div>
  )
}

export default Project
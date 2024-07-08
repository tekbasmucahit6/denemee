import React from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
function SingleProject( { projectName,projectImg,link,i } ) {
  return (
    <div className='grid p-5' key={i}>
        <a href={link}>
            <div className='flex justify-center items-center'>
                <img src={projectImg} className='w-72 hover:scale-125 transition-all' alt="" />
            </div>


            <div className='flex justify-center items-center mt-5 ml-6'>

                <div className='flex text-white'>
                    <h1>{projectName}</h1>
                </div>

            </div>
        </a>
    </div>
  )
}

export default SingleProject
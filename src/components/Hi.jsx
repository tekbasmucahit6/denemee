import React from 'react'
import { FaRegStar } from "react-icons/fa";


function Hi() {

  return (
    <>
    <div className='flex justify-center items-center text-center h-screen'>
        <div className='grid gap-10'>
           <strong className='rounded-xl text-white text-3xl'>Hİ I'M MÜCAHİT TEKBAŞ</strong>
            <i className='flex justify-center items-center gap-5 text-white bg-amber-500 border p-3 border-white rounded-tr-3xl rounded-br-3xl'> fullstack web developer <FaRegStar /> <FaRegStar /> <FaRegStar /></i>
        </div>

    </div>
    </>
  )
}

export default Hi
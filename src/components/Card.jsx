import React from 'react'
import mucahittekbas from '../img/mucahittekbas.jpg'

function Card() {
  return (
    <>
        <div className='flex justify-center items-center mt-16'>
            <div className='grid grid-cols-2 max-w-80 shadow-2xl bg-blue-950  border-white rounded-tl-3xl rounded-br-3xl py-5'>

                <div className='flex justify-center items-center w-48'>
                    <img src={mucahittekbas} alt="" />
                </div>


                <div className='flex justify-center place-items-center'>
                    <strong className='text-xl text-white'>MÜCAHİT TEKBAŞ  <strong className='text-[#DC217A] transition-colors font-serif'>FULLSTACK WEB DEVELOPER</strong></strong>
                </div>


            </div>
        </div>
    </>
  )
}

export default Card
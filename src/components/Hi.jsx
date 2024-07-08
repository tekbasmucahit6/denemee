import React, { useEffect, useState } from 'react'
import SocialApi from '../api/SocialApi';
import SocialCard from './SocialCard';


function Hi() {
  const [social,setSocial] = useState([])
  const [imgurl,setİmgUrl] = useState()
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    // sayfa hızını arttırabilmek için resmi sayfa yüklendikten sonra yüklüyoruz
    setLoading(true)
    setİmgUrl("../img/mucahittekbas.jpg")
    setSocial(SocialApi)
    setLoading(false)
  },[])
  console.log(social)
  return (
    <>
    <div className='flex justify-center items-between xl:items-center lg:items-center md:items-center text-center h-screen'>
      <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-16'>
          
          
          <div className='flex flex-col justify-center items-center xl:items-center lg:items-center md:items-center gap-5'>
            <h1 className='text-white text-2xl xl:text-3xl lg:text-3xl md:text-3xl flex justify-center items-center gap-2'>Hİ I'M<strong className='text-amber-600'>MÜCAHİT TEKBAŞ</strong></h1>
            <i className='text-white text-xl'>full-stack web developer</i>
          </div>


          <div className='grid gap-10'>
            
            
            <div className='flex justify-center items-center'>
              {
                loading?<div className='w-full h-full border border-white bg-white opacity-50 animate-pulse'>jflşsdaf</div>
                :
                <img src={imgurl} className='border-b-2 border-white xl:hover:scale-105 lg:hover:scale-110 md:hover:scale-110 transition-all' alt="" />

              }
            </div>

            {
              loading?<div className='border border-white bg-white w-60 h-60 rounded-full'></div>
              :
              <div className='flex justify-center items-center gap-10'>
              {
                social.map((dt,i) => (
                  <SocialCard link={dt.link} icon={dt.icon} features={dt.features} />
                ))
              }
            </div>
            }


          </div>


      </div>
    </div>
    </>
  )
}

export default Hi
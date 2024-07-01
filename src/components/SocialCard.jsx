import React from 'react'
function SocialCard({ socialmedia , link , icon  , features , i}) {
  return (
    <div className='grid jusitfy-center items-center text-center' key={i}>
        <a href={link}>

          <div key={i} className={features}>
            {icon}
          </div>


          <div className='text-white mt-10'>
            {socialmedia}
          </div>
        </a>
    </div>
  )
}

export default SocialCard
import { useState } from "react"
import Card from "./components/Card"
import Content from "./components/Content"
import Hi from "./components/Hi"
import { useEffect } from "react"
import SocialApi from "./api/SocialApi"
import SocialCard from "./components/SocialCard"

import { AiOutlineLoading3Quarters } from "react-icons/ai";

function App() {

  const [social,setSocial] = useState([])
  const [loading , setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setSocial(SocialApi)
    setLoading(false)
  },[])

  return (
    <>
      <Hi />

      <Content />




      {/* socail media başlangıç */}
      <div className="flex justify-center items-center mt-20">
        <hr className="" />
        <em className="text-white text-2xl shadow-xl">social media</em>
      </div>

      <div className="flex justify-center items-center">
        <div className="grid grid-rows-3 gap-20 mt-20 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3">

      {
        loading?
        <div className="flex justify-center items-center"><AiOutlineLoading3Quarters className="text-white text-3xl" /></div>
        :
        social.map((dt,i) => (
          <SocialCard socialmedia={dt.socialmedia} link={dt.link} icon={dt.icon} features={dt.features} i={i} />
        ))
        
        
      }

      </div>
      </div>
      {/* social media bitiş */}
     


      <Card />
    </>
  )
}

export default App

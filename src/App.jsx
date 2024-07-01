import { useState } from "react"
import Card from "./components/Card"
import Content from "./components/Content"
import Hi from "./components/Hi"
import { useEffect } from "react"
import SocialApi from "./api/SocialApi"
import SocialCard from "./components/SocialCard"

function App() {

  const [social,setSocial] = useState([])

  useEffect(() => {
    setSocial(SocialApi)
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

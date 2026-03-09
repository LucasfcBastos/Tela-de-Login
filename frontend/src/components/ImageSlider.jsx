import { useState, useEffect } from "react"

import img1 from "../assets/img/Frame1.png"
import img2 from "../assets/img/Frame2.png"
import img3 from "../assets/img/Frame3.png"

import "../styles/ImageSlider.css"

function ImageSlider(){

  const images = [img1, img2, img3]

  const [index,setIndex] = useState(0)

  useEffect(()=>{

    const interval = setInterval(()=>{

      setIndex(prev => (prev + 1) % images.length)

    },3000)

    return () => clearInterval(interval)

  },[])

  return(

    <div className="slider">

      {images.map((img,i)=>(
        <img
          key={i}
          src={img}
          className={i === index ? "active" : ""}
        />
      ))}

    </div>

  )

}

export default ImageSlider
import { useState, useEffect } from "react"

import img1 from "../assets/img/Frame1.png"
import img2 from "../assets/img/Frame2.png"
import img3 from "../assets/img/Frame3.png"
import img4 from "../assets/img/Frame4.png"
import img5 from "../assets/img/Frame5.png"
import img6 from "../assets/img/Frame6.png"
import img7 from "../assets/img/Frame7.png"
import img8 from "../assets/img/Frame8.png"
import img9 from "../assets/img/Frame9.png"
import img10 from "../assets/img/Frame10.png"
import img_fundo from "../assets/img/fundo.jpeg"

import "../styles/ImageSlider.css"

function ImageSlider(){

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

  const [index,setIndex] = useState(0)

  useEffect(()=>{

    const interval = setInterval(()=>{

      setIndex(prev => (prev + 1) % images.length)

    },3000)

    return () => clearInterval(interval)

  },[])

  return(

    <div className="slider">

      <div className="aget">
        {images.map((img,i)=>(
          <img
            key={i}
            src={img}
            className={i === index ? "active" : ""}
          />
        ))}
      </div>

      <div className="fund">
        <img src={img_fundo} />
      </div>

    </div>

  )

}

export default ImageSlider
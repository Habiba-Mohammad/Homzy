import React from 'react'
import{Swiper,SwiperSlide,useSwiper} from "swiper/react"
import "swiper/css"
import "./Residencies.css"
import data from "../../utils/slider"
import fImage1 from "../../images/r1.png"
import fImage2 from "../../images/r2.png"
import fImage3 from "../../images/r3.png"
import { sliderSettings } from '../../utils/common'
const Residencies = () => {
    const images=[
        fImage1,
        fImage2,
        fImage3,
        fImage1,
        fImage2,
        fImage3

    ]
  return (
<section className='r-wrapper'>
    <div className='paddings innerWidth r-container'>
<div className='r-head flexColStart'>
    <span className='orangeText'>Best Choices</span>
    <span className='primaryText'> Popular Residencies</span>
</div>

<Swiper className='swiper '{...sliderSettings} >
    {
data.map((card,i)=>(
    <SwiperSlide key={i}>
        <div className='r-card flexColStart'>
            <img className="flex"src= {images[i]} alt=" try to get the correct "/>
            <span className='secondary-Text r-price'><span>{}</span>
            <span style={{color:"orange"}}>$<span>{card.price}</span></span>
</span>
<span className='primaryText'>{card.name}</span>
<span className='secondaryText'>{card.detail}</span>

        </div>
    </SwiperSlide>
))

    }
</Swiper>
    </div>
</section>
  )
}

export default Residencies
const SliderButtons=()=>{
    const swiper= useSwiper()
    return(
        <div className='r-button'>
<button onClick={()=> swiper.slidePrev}>&lt;</button>
<button onClick={()=> swiper.slidePrev}>&gt;</button>

        </div>
    )
}

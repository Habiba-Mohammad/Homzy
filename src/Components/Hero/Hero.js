import React from 'react'
import "./Hero.css"
import{animate, motion} from "framer-motion"
import {CountUp} from "use-count-up"
import {BsFillSearchHeartFill} from "react-icons/bs"
import HeroImage from "../../images/hero-image (1).png"
const Hero = () => {
  return (
    <>
    <section className='hero-wrapper'>
        <div className='paddings innerWidth flexCenter hero-container'>
<div className='flexColStart hero-left'>
    <div className='hero-title'>
        <div className='orange-circle'>

        <div className='white-gradient'/>

        <motion.h1 
    initial={{y:"2rem",opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{duration:2,
    type:"spring"}}>
            Discover <br/>
            Most Suitable <br/> property
        </motion.h1>
        </div>
    </div>
<div className='flexColStart hero-des'>
    <span className='secondry-text'>  Find a variety of properties that suit you  very easilty </span>
    <span className='secondry-text'>Forget all difficulties in finding a residence for you
</span>
</div>
<div className=' flexCenter search-bar'>
<BsFillSearchHeartFill color="var(--blue)" size={25} /> 
<input type='text'/>
<button className='button'> Search </button>
    </div>
    <div className='flexCenter stats'>
<div className='flexColStart stat'>
    <span>    <span className='plus'>+</span><CountUp isCounting start={80} end={1000} duration={4}/></span>

    <span>Premium Products</span>
</div>
<div className='flexColStart stat'>
    <span>     <span className='plus'>+</span>
<CountUp isCounting start={166} end={290} duration={4}/></span>

    <span>Happy Customers</span>

</div>
<div className='flexColStart stat'>
    <span>    <span className='plus'>+</span>
<CountUp isCounting start={80} end={100} duration={4}/></span>

    <span>Award Winners</span>

</div>
    </div>
</div>
<div className='flexCenter hero-right'>
    <div className='image-container'>
        <img src={HeroImage} alt=""/>
    </div>
</div>
</div>
    </section>
    </>
  )
}

export default Hero
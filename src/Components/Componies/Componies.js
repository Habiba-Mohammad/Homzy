import React from 'react'
import "./Componies.css"
import prologis from "../../images/prologis.png"
import tower from "../../images/tower.png"
import equinix from "../../images/equinix.png"
import realty from "../../images/realty.png"



const Componies = () => {
  return (
<>
<section className='c-wrapper'>
    <div className='paddings innerWidth flexCenter c-container'>
        <img src={prologis} alt=""/>
        <img src={tower} alt=""/>
        <img src={equinix} alt=""/>
        <img src={realty} alt=""/>

    </div>
</section>
</>
  )
}

export default Componies
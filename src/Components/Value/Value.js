import React, { useState } from 'react'
import "react-accessible-accordion/dist/es/index"
import {MdOutlineArrowDropDown} from "react-icons/md"
import"./Value.css"
import { SetStateAction } from 'react'
import image from "../../images/value.png"
import {data} from "../../utils/accordion"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  AccordionItemPanel
} from "react-accessible-accordion"
const Value = () => {
  const [className,setClassName]=useState(null)

  return (
    <>
    <section className='v-wrapper'>
<div className='paddings innerWidth v-container flexCenter'>
  <div className='v-left'>
    <div className='image-container'>
      <img src={image} alt="main flat"/>
    </div>
  </div>
<div className='flexColStart v-right'>
  <span className='orangeText'>Our value</span>
  <span className='primaryText'>Value We Give to You</span>
  <span className='secondryText'>
    We always ready to help by Providing the best services for you <br/>
    We beleive a good blace to live can make your life better
  </span>
  <Accordion className=''
  allowMultipleExpanded={false}
  preExpanded={[0]}> 
{data.map((item,i)=>{
  return(
    <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
<AccordionItemHeading>
  <AccordionItemButton className='accordionButton flexCenter'>
    <AccordionItemState>
      {({expanded})=>
      expanded
      ? setClassName ("expanded")
      : setClassName("collapsed")}
    </AccordionItemState>
    <div className='flexCenter icon'>{item.icon}</div>
  <span className='primaryText'>
    {item.heading}</span>
    <div className='flexCenter icon'>
      <MdOutlineArrowDropDown size={20}></MdOutlineArrowDropDown>
    </div>
  </AccordionItemButton>
</AccordionItemHeading>
<AccordionItemPanel>
  <p className='secondaryText'>{item.detail}</p>
</AccordionItemPanel>
    </AccordionItem>
  )
})}
  </Accordion>
</div>


</div>
    </section>
    </>
  )
}

export default Value
import {React,useState} from 'react'
import logo from "../../images/logo.png"
import {BiMenuAltRight} from "react-icons/bi"
import css from "../../index.css"
import OutsideClickHandler from "react-outside-click-handler"
import "./Header.css"
const Header = () => {
  const[menuOpen,setMenuOpen]=useState(false)
const getMenuStyles=(menuOpen)=>{
  if (document.documentElement.clientWidth<= 800)
return{
  right:!menuOpen&&"-100%"
}}
  return (
    
<>
<section className='h-wrapper'>
<div className='flexCenter paddings innerWidth h-container'>
    <img src={logo} alt="" width={100}/>
    <OutsideClickHandler  
      
onOutsideClick={()=>{
  setMenuOpen(false)
}}>
<div className='flexCenter h-menu' style={getMenuStyles(menuOpen)}>
    <a href=''> Residencies</a>
    <a href=''>Our Value </a>
    <a href=''>Contact Us</a>
    <a href=''> </a>
    <a href=''>Get started</a>

    <button className='button'>Contact</button>
    
</div>
</OutsideClickHandler>

</div>
<div className='menu-icon' onClick={()=>setMenuOpen((prev)=>!prev)}>
  <BiMenuAltRight size={30}/>
</div>
</section>
</>  )
}

export default Header
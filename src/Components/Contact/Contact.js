import React from 'react'
import "./Contact.css"
import {MdCall, MdChat, MdMessage, MdVideoCall} from "react-icons/md"
import {BsFillChatDotsFill} from "react-icons/bs"
import {HiChatBubbleBottomCenter} from "react-icons/hi"
import image from "../../images/contact.jpg"
const Contact = () => {
  return (
<>
<section className='c-wrapper'>
<div className='paddings innerWidth flexCenter c-container'>
    <div className='flexColStart c-left'>
        <span className='orangeText'> Our Contacts</span>
        <span className='primaryText'>Easy to Contact us</span>
        <span className='secondaryText'>We always ready to help by providing the best serviec </span>
<div className='flexColStart contactModes'>
    <div className='flexStart row'>
        <div className='flexColCenter mode'>
            <div className='flexStart'>
                <div className='flexCenter icon'>
                    <MdCall size={25}/>
                </div>
                <div className='flexColStar detail'>
                    <span className='primaryText'>Call</span>
                </div>
            </div>

            <div className='flexCenter button '> Call Now</div>
        </div>
        <div className='flexColCenter mode'>
            <div className='flexStart'>
                <div className='flexCenter icon'>
                    <MdChat size={25}/>
                </div>
                <div className='flexColStar detail'>
                    <span className='primaryText'>Chat</span>
                </div>
            </div>

            <div className='flexCenter button '> Chat Now</div>
        </div>
        </div>
        <div className='flexStart row'>

        <div className='flexColCenter mode'>
            <div className='flexStart'>
                <div className='flexCenter icon'>
                    <MdVideoCall size={25}/>
                </div>
                <div className='flexColStar detail'>
                    <span className='primaryText'>Video Call</span>
                </div>
            </div>

            <div className='flexCenter button '> Video Call Now</div>
        </div>

        <div className='flexColCenter mode'>
            <div className='flexStart'>
                <div className='flexCenter icon'>
                    <MdMessage size={25}/>
                </div>
                <div className='flexColStar detail'>
                    <span className='primaryText'>Message</span>
                </div>
            </div>

            <div className='flexCenter button '> Message Now</div>
        </div>
        </div>
   
</div>




    </div>
    <div className='c-right'>
        <div className='image-container'>
            <img src={image} alt=""/>
        </div>
    </div>

</div>
</section>
</>  )
}

export default Contact
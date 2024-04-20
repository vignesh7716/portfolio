import React from 'react'

import { MdNoteAlt } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiCoffeeCup } from "react-icons/gi";
import v from "./v.jpg"
import { Link } from 'react-router-dom';

export default function Page3() {
  
  return (
    <>

    <div className='flex-pic' >
      <div><img className='pic' src={v}></img></div>
      <div>
        <h2 className='vignesh'>Hello ! This is Vignesh</h2>
        <p className='para-2'> I am a web developer from chennai, India. I enjoy building everything from small business sites to rich interactive web apps. If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me <mask>here</mask> I design and build digital products with simple and buitiful code. I specialize in custom web theme development and love what i do.</p>
        <p className='para-3'>Adaptable quickly and organized well. Interested in learning the latest web & Software technologies quickly.
Able to work well in team as well as individually. My future goal is to become a Senior full-stack developer.</p>

<a href='https://drive.google.com/file/d/1cRYib519QEQZ9nrgx7RvYYOGBr4bcHM5/view?usp=drive_link'><button className='resume'> Resume</button></a>
      <button className='hire'>Hire me</button>
      </div>
      <hr className='hr'></hr>
    </div>

    <div className='flex-3'>
       
        <div className='b5'><span></span>
            <p className='icon-5'><MdNoteAlt/></p>
            <h1 className='n1'>0011</h1>
            <p className='s5'>Web Design Created</p>
            
        </div>
        

        <div className='b6'><span></span>
            <p className='icon-6'>< AiFillThunderbolt/></p>
            <h1 className='n2'>0007</h1>
            <p className='s6'>WebSite Created </p>
        </div>

        <div className='b7'><span></span>
            <p className='icon-7'><GiCoffeeCup/></p>
            
            <h1 className='n3'>0027</h1>
            <p className='s7'>Coffee Taken</p>
        </div>

        
    </div>



    </>
  )
  
}


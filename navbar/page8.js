import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDesktopWindows } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";

function Page8(){
    return(
        <>
        
        <div className="box-9">
            <h1 className="ct-h">Contact me</h1>
            <p className="ct-p">I'm always open to discussing product design work or partnership opportunities</p>
        </div>
<div className="flex-9">
        <div>
            <p className="logo-7"><FaLocationDot/></p>
            <h2 className="hh">Address</h2>
            <p className="ppp">Chennai,Tamil nadu, India</p>
        </div>
        <div>
            <p className="logo-7"><MdEmail/></p>
            <h2  className="hh">Email</h2>
            <p className="ppp">vignesh7716@gmail.com</p>
        </div>
        <div>
            <p className="logo-7"><FaPhoneAlt/></p>
            <h2  className="hh">Phone</h2>
            <p className="ppp">+91 9345318906</p>
        </div>
        <div>
            <p className="logo-7"><MdDesktopWindows/></p>
            <h2  className="hh">Portfolio</h2>
            <p className="ppp">https://vignesh777.github.io/</p>
        </div>
</div>

<div>
<iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.1313108536!2d80.0442004437293!3d13.047473317659957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1707457030725!5m2!1sen!2sin" width={600} height={450}></iframe>
</div>

<div className="end">
    <p >Every day is a chance to be Better</p><p className="end-logo">< FaHandHoldingHeart/></p> </div>
        </>
    )
}
export default Page8
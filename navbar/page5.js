import React from "react";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { CgArrowLongRightR } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { MdMonetizationOn } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdOutlineImportantDevices } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { MdContentPasteSearch } from "react-icons/md";
import webdesign from './webdesign.png'
import best from './best.png'
import lang from './lang.png'
import undraw5 from './undraw5.png'
import undraw3 from './undraw3.png'
import undraw4 from './undraw4.png'
import undraw2 from './undraw2.png'
import undraw6 from './undraw6.png'
import undraw from './undraw.png'

function Page5(params) {
    return(
        <>
        
        <div className="work-box">
            <h1 className="exp">Service List</h1>
            <p className="work-p">I always want to make things that make a different</p>
        </div>
<div className="flex-6">
        <div className="bx-1">
            <img className="webdeg1" src={undraw4}></img>
            <p className="logo-1"><BsFillHouseHeartFill/></p>
            <h2 className="head-1">Design + Development</h2>
            <p className="line-1"><CgArrowLongRightR/></p>
            <p className="prg-1">Clean, modern designs - optimized for performance, Search engines, and converting users to customers.</p>
         </div>
         <div className="bx-2">
            <img className="webdeg2" src={undraw5}></img>
            <p className="logo-2"><FaShoppingCart /></p>
            <h2 className="head-2">eCommerce</h2>
            <p className="line-1"><CgArrowLongRightR/></p>
            <p className="prg-2">Integration of eCommerce platforms, payment gateways, custum product templates, and more.</p>
         </div>
         <div className="bx-3">
            <img className="webdeg3" src={undraw3}></img>
            <p className="logo-3">< IoStatsChartSharp /></p>
            <h2 className="head-3">Analytics</h2>
            <p  className="line-1"> <CgArrowLongRightR/></p>
            <p  className="prg-3">Get insights into who is browsing your site so that you can make smarter business decisions.</p>
        </div>
</div>
<div className="flex-7">
        <div className="bx-4">
            <img className="webdeg4" src={undraw2}></img>
            <p className="logo-4"><MdOutlineImportantDevices/></p>
            <h2 className="head-4">Mobile-friendly</h2>
            <p className="line-1"><CgArrowLongRightR/></p>
            <p className="prg-4">A responsibile design makes your, website accessible to all users, regardless of their device.</p>
        </div>
        <div className="bx-5">
            <img className="webdeg5" src={undraw6}></img>
            <p className="logo-5"><FaChartLine/></p>
            <h2 className="head-5">Website Rank</h2>
            <p className="line-1"><CgArrowLongRightR/></p>
            <p className="prg-5">Looking to improve your page performance, or user experience? Request a free site audit.</p>
        </div>
        <div className="bx-6">
            <img className="webdeg6" src={undraw}></img>
            <p  className="logo-6"><MdContentPasteSearch/></p>
            <h2 className="head-6">Content Management</h2>
            <p className="line-1"><CgArrowLongRightR/></p>
            <p className="prg-6">Custum theme and plugin development. Easily update site Content with knowledge of powerful code.</p>

        </div>
</div>
        </>
    )
}
export default Page5
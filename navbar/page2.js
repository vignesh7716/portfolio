import React from "react";

import { FaLaptopCode } from "react-icons/fa6";
import { IoLogoPython } from "react-icons/io5";
import { GiWorld } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";

function Page2(params) {
    return(
        <>
        <div className="flex-2">
        <div className="b1">
            <p className="icon-1">< FaLaptopCode/></p>
            <h2 className="h2">Working Hard</h2>
            <p className="s1">Always believe in my work</p>

        </div>

        <div className="b2">
        <p className="icon-2"><IoLogoPython /></p>
        <h2  className="h3">Python Developer</h2>
        <p className="s2">Love to use OOPS in python</p>
        </div>

        <div className="b3">
            <p className="icon-3">< GiWorld/></p>
            <h2  className="h4">Web Design</h2>
            <p className="s3">Passionate about web design from start</p>
        </div>

        <div className="b4">
        <p className="icon-4">< IoSettings/></p>
            <h2  className="h5">Web Development</h2>
            <p className="s4"> Created all types of modern web development</p>

        </div>
        </div>

        </>
    )
}
export default Page2
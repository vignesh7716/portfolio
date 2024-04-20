import React from "react"
import { FaSchool } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";

export default function Edu(){

    return(
        <>
<div className="box-5">
    <h1 className="education">Educational Story</h1>
    <p className="p9"> I like to code things from scratch and Enjoy bringing ideas to life in the browser</p>
</div>
<div className="flex-5">

    <div className="b8">
    <p className="icon-8">< FaSchool /></p>
    <h1 className="school">School</h1>
    <p className="year-1">2008 - 2020</p>
    <p className="topic">Completed my school life from Mohamed Sathak School, Chennai, Tamil nadu, India.</p>

    </div>

    <div className="b9">
        <p className="icon-9">< IoSchoolSharp/></p>
        <h1 className="college">Graduation</h1>
        <p className="year-2">2020 - 2023</p>
        <p className="topic">Achive my Graduation Degree from Vel Tech Arts College, Avadi, Tamil nadu, India.</p>

    </div>

    <div className="b10">
        <p className="icon-10"><FaLaptopCode/></p>
        <h1 className="trainning">Training | Skill</h1>
        <p className="year-3">2023 - 2024</p>
        <p className="topic">Completed Full-Stack Web Development from FITA Acadamy, Anna nagar, Chennai, India.</p>

    </div>
</div>
</>
)
}
import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BiMoveHorizontal } from "react-icons/bi";

import { RiChatQuoteFill } from "react-icons/ri";
import { Navigation, Pagination, Scrollbar, A11y,EffectFlip } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Page6(params) {
   
    return(
        <>
    
    <div>   
        <div className="box-7">
            <h2 className="exp-2">Testimonials</h2>
            <p className="line-2">< BiMoveHorizontal /></p>
            <p className="exp-3">People I've worked with have said some nice things.</p>

        </div>
    </div>
        <div className="bg">
           <p className="line-3">< RiChatQuoteFill/></p>
        </div>
         
        <Swiper
           modules={[Navigation, Pagination, Scrollbar, A11y,EffectFlip]}
           
           spaceBetween={0}
           slidesPerView={1}
           navigation
           
        //    pagination={{ clickable: true }}
           
        >
            <SwiperSlide >
        <p className="tst-1">" Vignesh was a real pleasure to work with and we look forward to working with him again. He's definitely the kind of developer you can trust with a project from start to finish."</p>
        <h2 className="suffi">Suffiyan</h2> 
        </SwiperSlide>
            <SwiperSlide>
                <p className="tst-2">" Vignesh is a good communicator with the tenacity and confidence to create a design scenarios and he put's full efforts to the project to make different from the croud."</p>
                <h2 className="Aju">Aju</h2>
            </SwiperSlide>
            <SwiperSlide >
                <p className="tst-3">" Vignesh has done a fantastic job overall. Not only the site is to design, but the code is also very clean. Love the way of his confidence , hard word and smart work."</p>
                <h2 className="Anand">Anand</h2>
            </SwiperSlide>
            

        </Swiper> 
                   
          
        </> 
    )

}
export default Page6
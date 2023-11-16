import React from 'react'
import {offer} from "../assets/Data"
import {Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules';
import './Offer.css'

function Offer() {
  return (
    <section className="offer section" id="offer">
        <h2 className="section-title" data-title='Offers'>Spcial Offer For You</h2>

        <Swiper spaceBetween={30} pagination={{clickable: true}} modules={[Pagination]} className='container'>

            {offer.map(({img,title,discount,description},index)=>{
                return(
                    <SwiperSlide className='offer-item' key={index}>
                    <div className="offer-img-wrapper">
                        <img src={img} alt="" className="offer-img" />
                    </div>

                    <div className="offer-content">
                        <h3 className="offer-title">{title}</h3>
                        <span className="offer-discount">{discount}</span>
                        <p className="offer-desc">{description}</p>

                        <a href="/" className="btn">Order Now</a>
                    </div>
                </SwiperSlide>
                )
                
            })}
            {/* <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide> */}
        </Swiper>

        
    </section>
  )
}

export default Offer
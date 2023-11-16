import './Home.css';
import React, { useState, useRef } from 'react';
import video from "../assets/Coffee.mp4"
import {Link} from "react-scroll"

export default function Home() {
   
    const videoStyle = {
        width: '100%', // 50% of the container's width
        height: '100vh', // Automatically maintain the aspect ratio
    // overflow: 'hidden',
    objectFit:"cover",
    zIndex:'-1'
      };
    
  return (
    <section className="home" id="home">
      <div className="bg-video">
        <video autoPlay loop muted id='video' style={videoStyle} >
            <source src={video} type='video/mp4'/>
        </video>
        </div>
      <div className="home-container container">
        
      
        <div className="home-content">
          <span className="home-subtitle">Welcome to Sleepy Bunny Cafe!</span>
          <h1 className='home-title'>Recharge yourself for the day with the best Coffee.</h1>
          <p className="home-description">Indulge in the rich aroma of freshly brewed coffee and savor delectable pastries at our cozy cafe, where every cup tells a story of warmth and flavor.</p>

          <div className="home-btns">
            <Link 
            spy={true}
            offset={-60}
            hashSpy={true}
            duration={500}
            to="menu" className="btn">Check Menu</Link>
            <Link
            spy={true}
            offset={-60}
            hashSpy={true}
            duration={500} to="reservation" className="btn home-btn">Book Table</Link>
          </div>
        </div>

      </div>
    </section>
    
  )
}

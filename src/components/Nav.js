import React, {useState, useEffect } from 'react'
import logo from '../sleepy logo.png'
import {Link} from "react-scroll"
import {animateScroll} from 'react-scroll'
import { links} from "../assets/Data"
import {FaStream} from "react-icons/fa"
import './Nav.css'
// import { a, Route,Routes } from 'react-router-dom';



export default function Nav() {
  const [scrollHeader,setScrollHeader]=useState(false);
  const [showMenu,setShowMenu]=useState(false);

  const changeHeader= () =>{
    if(window.scrollY >= 80){
      setScrollHeader(true);
    }
    else{
      setScrollHeader(false);
    }
  };

  const scrollTop=()=>{
    animateScroll.scrollToTop();
  }


  useEffect(()=>{
    window.addEventListener('scroll',changeHeader);
  },[])
  return (
    <>
    <header className={`${scrollHeader? 'scroll-header': ''} header`}>
      <nav className="nav container">
        <Link to="/" onClick={scrollTop} className="nav-logo">
          <img src={logo} alt="" className="nav-logo-img" />
          <h2 className="nav-logo-title">Sleepy Bunny</h2>
        </Link>

        <div className={`${showMenu? 'show-menu': ''} nav-menu`}>
          <ul className="nav-list">
            {links.map(({name,path},index)=>{
              return(
                <li className="nav-item" key={index}>
                  <Link 
                  to={path}
                  spy={true}
                  offset={-60}
                  hashSpy={true}
                  duration={500}
                  className="nav-link">{name}
                  </Link>
                </li>
              )
            })}

           

          </ul>
        </div>
        <div className="nav-toggle" onClick={()=>setShowMenu(!showMenu)}>
              <FaStream />
            </div>
      </nav>
    </header>
    {/* <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about-me' element={<AboutMe />}/>
    </Routes> */}
    </>
    // <div>
    //     <nav id='navbar'>
    //         <div className="logo">
    //           a to="/">
    //           <img src={logo} alt="logo" />
    //           </a>
              
    //           <h1>Sleepy Bunny Cafe</h1></div>
    //         <div className="right">
    //         <ul>
    //           {as.map(({name,path},index)=>{
    //             return(
    //               <li key={index}>
    //                 a to={path}>{name} </a>
    //               </li>
    //             )
    //           })}
    //             <li>Home </li>|
    //             <li>Our Story</li>|
    //             <li>Menu</li>|
    //             <li>Gallery</li>|
    //             <li>Contact Us</li>
    //         </ul>
    //         <button className="btn">Order now</button>
    //         </div>
    //     </nav>
    // </div>
  )
}

import React from 'react'
import logo from '../sleepy logo.png';
import { FaRegEnvelope, FaCaretRight,FaFacebookF, FaTwitter,FaLinkedinIn ,FaInstagram,FaYoutube} from 'react-icons/fa';

import {AiOutlinePhone} from "react-icons/ai"
import {MdOutlineLocationOn} from "react-icons/md"
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid container grid">
        <div className="footer-content">
          <a href="/" className="footer-logo">
            <img src={logo} alt="" className="footer-logo-img" />
          </a>

          <p className="footer-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum possimus nemo cupiditate rem perspiciatis nesciunt modi, deleniti sequi ipsam distinctio exercitationem, dignissimos voluptas!
          </p>

          <ul className="footer-contact">
            <li className="footer-contact-item">
              <AiOutlinePhone className='icon'/> +3 687 978 2343
            </li>
            <li className="footer-contact-item">
              <MdOutlineLocationOn className='icon'/> F7 Islamabad,Pakistan
            </li>
            <li className="footer-contact-item">
              <FaRegEnvelope className='icon'/> info@sleepybunny.com
            </li>

          </ul>
        </div>

        <div className="footer-content">
          <h3 className="footer-title">Quick Links</h3>

          <ul className="footer-links">
            <li>
              <a href="#about" className="footer-link">
                <FaCaretRight className='icon' /> About Us
              </a>
            </li>
            
            <li>
              <a href="#menu" className="footer-link">
                <FaCaretRight className='icon' /> Menu
              </a>
            </li>
            
            <li>
              <a href="#features" className="footer-link">
                <FaCaretRight className='icon' /> Features
              </a>
            </li>

            <li>
              <a href="#gallery" className="footer-link">
                <FaCaretRight className='icon' /> Gallery
              </a>
            </li>

            <li>
              <a href="#team" className="footer-link">
                <FaCaretRight className='icon' /> Team
              </a>
            </li>

            <li>
              <a href="#reservation" className="footer-link">
                <FaCaretRight className='icon' /> Reservation
              </a>
            </li>


          </ul>
        </div>

        <div className="footer-content">
        <h3 className="footer-title">Opening Hours</h3>

        <div className="footer-opening-hour">
          <ul className="opening-hour-list">
            <li className="opening-hour-item">
              <span>Saturday:</span>
              <span>09AM - 06PM</span>
            </li>
            <li className="opening-hour-item">
              <span>Monday:</span>
              <span>09AM - 06PM</span>
            </li>
            <li className="opening-hour-item">
              <span>Tuesday:</span>
              <span>09AM - 06PM</span>
            </li>
            <li className="opening-hour-item">
              <span>Wednesday:</span>
              <span>09AM - 06PM</span>
            </li>
            <li className="opening-hour-item">
              <span>Thursday:</span>
              <span>09AM - 06PM</span>
            </li>
            <li className="opening-hour-item">
              <span>Friday:</span>
              <span>Closed</span>
            </li>
            <li className="opening-hour-item">
              <span>Sunday:</span>
              <span>09AM - 06PM</span>
            </li>
          </ul>
        </div>
        </div>

        <div className="footer-content">
        <h3 className="footer-title">Newsletter</h3>

        <p className="footer-desc">
          Subscribe Our Newsletter To Get Latest Updates and News
        </p>

        <form action="" className="subscribe-form">
          <input type="text" placeholder="Your Email" className="form-input subscribe-input" />

          <button className="btn btn-flex subscribe-btn">
            <FaRegEnvelope /> Subscribe Now
          </button>
        </form>

        <div className="footer-socials">
          <h3 className="footer-social-follow">Follow Us:</h3>

          <div className="footer-social-links">
            <a href="/" className="footer-social-link">
              <FaInstagram />
              </a>
            
            <a href="/" className="footer-social-link">
              <FaFacebookF />
              </a>
            
            <a href="/" className="footer-social-link">
              <FaTwitter />
              </a>
            
            <a href="/" className="footer-social-link">
              <FaLinkedinIn />
              </a>
            
            <a href="/" className="footer-social-link">
              <FaYoutube />
              </a>
            
          </div>
        </div>
        </div>

      </div>

      <p className="copyright-text">
        &copy; Copyright 2023 <span>Sleepy Bunny</span> All Rights Reserved.
      </p>
    </footer>
  )
}
export default Footer;
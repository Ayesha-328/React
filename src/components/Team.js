import React from 'react'
import chef1 from '../assets/team-1.jpg'
import chef2 from '../assets/team-2.jpg'
import chef3 from '../assets/team-3.jpg'
import chef4 from '../assets/team-4.jpg'
import './Team.css'

import {FaFacebook, FaTwitter, FaLinkedin, FaYoutube} from "react-icons/fa"

function Team() {
  return (
    <section className="team section" id="team">
        <h2 className="section-title" data-title='Chefs'>Meet Our Experts</h2>

        <div className="team-grid grid container">
            <div className="team-item">
                <img src={chef1} alt="" className="team-img" />

                <div className="team-data">
                    <h3 className="team-title">Malissa Katie</h3>
                    <p className="team-job">Senior Chef</p>
                </div>

                <div className="team-socials">
                    <a href="/" className="team-social-link">
                        <FaFacebook />
                    </a>
                    <a href="/" className="team-social-link">
                        <FaTwitter />
                    </a>
                    <a href="/" className="team-social-link">
                        <FaLinkedin />
                    </a>
                    <a href="/" className="team-social-link">
                        <FaYoutube />
                    </a>
                </div>
            </div>
            <div className="team-item">
                <img src={chef2} alt="" className="team-img" />

                <div className="team-data">
                    <h3 className="team-title">Charlie Smith</h3>
                    <p className="team-job">Senior Chef</p>
                </div>

                <div className="team-socials">
                    <a href="/" className="team-social-link">
                        <FaFacebook />
                    </a>
                    <a href="/" className="team-social-link">
                        <FaTwitter />
                    </a>
                    <a href="/" className="team-social-link">
                        <FaLinkedin />
                    </a>
                    <a href="/" className="team-social-link">
                        <FaYoutube />
                    </a>
                </div>
            </div>
            <div className="team-item">
                <img src={chef3} alt="" className="team-img" />

                <div className="team-data">
                    <h3 className="team-title">Antonio John</h3>
                    <p className="team-job">Senior Chef</p>
                </div>

                <div className="team-socials">
                    <a href="/" className="team-social-link">
                        <FaFacebook />
                    </a>
                    <a href="/" className="team-social-link">
                        <FaTwitter />
                    </a>
                    <a href="/" className="team-social-link">
                        <FaLinkedin />
                    </a>
                    <a href="/" className="team-social-link">
                        <FaYoutube />
                    </a>
                </div>
            </div>
            <div className="team-item">
                <img src={chef4} alt="" className="team-img" />

                <div className="team-data">
                    <h3 className="team-title">Kate Winsley</h3>
                    <p className="team-job">Senior Chef</p>
                </div>

                <div className="team-socials">
                    <a href="/" className="team-social-link">
                        <FaFacebook />
                    </a>
                    <a href="/" className="team-social-link">
                        <FaTwitter />
                    </a>
                    <a href="/" className="team-social-link">
                        <FaLinkedin />
                    </a>
                    <a href="/" className="team-social-link">
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Team
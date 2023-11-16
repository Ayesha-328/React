import React from 'react'
import aboutImg from '../assets/about-img.jpg'
import {FiCheck} from 'react-icons/fi'
import './About.css'

function About() {
  return (
    <section className="about section" id="about">
        <div className="about-grid container grid">
            <div className="about-img-wrapper">
                <img src={aboutImg} alt="" className="about-img" />
            </div>

            <div className="about-content">
                <h2 className="section-title title-left" data-title='About Us'>Fresh Quality and Organic Tasty Coffe House For You</h2>

                <p className="about-description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde iste asperiores incidunt. Est placeat cum nisi officia, voluptate vitae delectus eum adipisci doloribus facere tenetur animi earum a, quisquam iste, quas eius ipsa quod.
                </p>

                <div className="about-details grid">
                    <p className="about-details-desc">
                        <FiCheck />
                        Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </p>
                    <p className="about-details-desc">
                        <FiCheck />
                        Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </p>
                    <p className="about-details-desc">
                        <FiCheck />
                        Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </p>
                    
                </div>

                <a href="" className="btn">Our Experts</a>
            </div>
        </div>
    </section>
  )
}
export default About;
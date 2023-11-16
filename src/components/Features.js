import React from 'react'
import {features} from "../assets/Data"
import shape from "../assets/shape.png"
import "./Features.css"

function Features() {
  return (
   <section className="features section" id="features">
        <h2 className="section-title" data-title='Features'>Our Best Features</h2>
        <div className="features-grid container grid">
            {features.map(({img,title,description},index)=>{
                return(
                    <div className="features-item" key={index}>
                        <img src={img} alt="" className="feature-img" />

                        <h3 className="feature-title">{title}</h3>
                        <p className="feature-desc">{description}</p>

                        <img src={shape} alt="" className="feature-shape" />
                    </div>
                )
            })}

        </div>
   </section>
  )
}

export default Features
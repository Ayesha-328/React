import React from 'react'
import chooseImg from "../assets/choose.jpg"
import coffeeMug from "../assets/coffee-mug.svg"
import coffeeBeans2 from "../assets/coffee-beans-2.svg"
import coffeeBeans3 from "../assets/coffee-beans-3.svg"
import "./Choose.css"


function Choose() {
  return (
    <section className="choose section">
        <div className="choose-grid container grid">
            <div className="choose-content">
            <h2 className="section-title title-left" data-title='Why Choose Us'>Sleepy Bunny Most Out of Your Favorite & Tasty Coffee House</h2>

            <p className="choose-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolores repellat nesciunt voluptatum ex alias, vero facere ducimus quas harum qui corporis dolorum doloribus.</p>

            <div className="choose-details grid">
                <div className="choose-details-item">
                    <div className="choose-details-img-wrapper">
                        <img src={coffeeMug} alt="" className="choose-details-img" />
                    </div>

                    <div>
                        <h3 className="choose-details-title">Awesome Aroma 
                        </h3>
                        <p className="choose-details-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatibus praesentium vitae hic.</p>
                    </div>
                </div>
                <div className="choose-details-item">
                    <div className="choose-details-img-wrapper">
                        <img src={coffeeBeans2} alt="" className="choose-details-img" />
                    </div>

                    <div>
                        <h3 className="choose-details-title">
                            Pure Grades
                        </h3>
                        <p className="choose-details-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatibus praesentium vitae hic.</p>
                    </div>
                </div>
                <div className="choose-details-item">
                    <div className="choose-details-img-wrapper">
                        <img src={coffeeBeans3} alt="" className="choose-details-img" />
                    </div>

                    <div>
                        <h3 className="choose-details-title">
                            Healthy Coffee
                        </h3>
                        <p className="choose-details-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatibus praesentium vitae hic.</p>
                    </div>
                </div>
            </div>

            </div>

            <img src={chooseImg} alt="" className="choose-img" />
        </div>
    </section>
  )
}

export default Choose
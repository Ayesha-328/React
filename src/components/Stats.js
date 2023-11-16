import React from 'react'
import coffeeShop from '../assets/coffee-shop.svg'
// import experience from '../assets/experience.svg'
import coffeeCup from '../assets/coffee-cup.svg'
import chef from '../assets/chef.svg'
import './Stats.css'

function Stats() {
  return (
    <section className="stats section">
      <div className="stats-grid container grid">
        <div className="stats-item">
          <div className="stats-img-wrapper">
            <img src={coffeeShop} alt="" className="stats-img" />
          </div>
          
          <div>
          <p className="stats-no">50</p>
          <h3 className="stats-title">+ Total Branches</h3>
          </div>
        </div>
        <div className="stats-item">
          <div className="stats-img-wrapper">
            <img src={coffeeCup} alt="" className="stats-img" />
          </div>
          
          <div>
          <p className="stats-no">25K</p>
          <h3 className="stats-title">+ Happy Customers</h3>
          </div>
        </div>
        <div className="stats-item">
          <div className="stats-img-wrapper">
            <img src={chef} alt="" className="stats-img" />
          </div>
          
          <div>
          <p className="stats-no">350</p>
          <h3 className="stats-title">+ Professional Chefs</h3>
          </div>
        </div>
        <div className="stats-item">
          <div className="stats-img-wrapper">
            <img src={coffeeCup} alt="" className="stats-img" />
          </div>
          
          <div>
          <p className="stats-no">70</p>
          <h3 className="stats-title">+ Years of Experience</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
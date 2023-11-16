import React from 'react'
import { FaRegBookmark } from 'react-icons/fa'
import shapeTwo from '../assets/shape-2.png'
import shapeThree from '../assets/shape-3.png'
import './Reservation.css'

function Reservation() {
  return (
   <section className="reservation container" id="reservation">
    <h2 className="section-title" data-title='Reservation'>Book A Table</h2>

    <form  className="reservation-form grid">
        <div className="form-input-div">
            <input type="text" placeholder='Your Name' className="form-input" />
        </div>
        <div className="form-input-div">
            <input type="email" placeholder='Your Email Address' className="form-input" />
        </div>
        <div className="form-input-div">
            <input type="text" placeholder='Your Phone Number' className="form-input" />
        </div>
        <div className="form-input-div">
            <input type="text" placeholder='Date Ex: DD/MM/YY' className="form-input" />
        </div>
        <div className="form-input-div">
            <input type="text" placeholder='Time Ex: 01:25PM' className="form-input" />
        </div>
        <div className="form-input-div">
            <input type="text" placeholder='Number of People' className="form-input" />
        </div>
        <div className="form-input-div form-input-textarea">
            <textarea name="" id="" cols="30" rows="10" className="form-input" placeholder='Your Message'></textarea>
        </div>

        <button className="btn byn-flex reservation-btn">
            <FaRegBookmark /> Book A Table
        </button>
    </form>

    <img src={shapeTwo} alt="" className="shape-two" />
    <img src={shapeThree} alt="" className="shape-three" />


   </section>
        

  )
}

export default Reservation
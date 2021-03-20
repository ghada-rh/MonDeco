import React from 'react'
import img1 from '../images/img-1.png'
import img2 from '../images/img.png'
import img3 from '../images/img-3.png'
import img4 from '../images/img-4.png'
import img from '../images/imag.png'

import './Cards.css'
const Cards = () => {
    return (
        <div className="cards">
            <div className="card" style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              opacity: 1
            }} >
               <p className="text">lampe</p>
            </div>
            <div className="card" style={{
              backgroundImage: `url(${img1})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              opacity: 1
            }}>
              <p className="text">lampe</p>
            </div>

            <div className="card" style={{
              backgroundImage: `url(${img2})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              opacity: 1
            }}>
               <p className="text">lampe</p>
            </div>
            <div className="card" style={{
              backgroundImage: `url(${img3})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              opacity: 1
            }}>
               <p className="text">lampe</p>
            </div>
            <div className="card" style={{
              backgroundImage: `url(${img4})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              opacity: 1
            }}>
              <p className="text">lampe</p>
            </div>
        </div>
    )
}

export default Cards

import React from 'react'
import banner from '../images/banner.png'
import "./Banner.css";

const Banner = () => {
    return (
        <header className="banner"
         style={{
             background: "transparent 0% 0% no-repeat padding-box",
             backgroundSize:"cover",
             backgroundImage: `url(${banner})`,
             backgroundPosition: "center center",
             opacity: 1

         }}>
            <div className="banner__contents">
              
              
            </div>
        </header>
        
    )
}

export default Banner

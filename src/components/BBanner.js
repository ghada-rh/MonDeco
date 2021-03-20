import React from 'react'
import bbanner from '../images/bbanner.png'
import "./Bbanner.css";

const Bbanner = () => {
    return (
        <header className="bbanner"
         style={{
             background: "transparent 0% 0% no-repeat padding-box",
             backgroundSize:"cover",
             backgroundImage: `url(${bbanner})`,
             backgroundPosition: "center center",
             opacity: 1

         }}>
            <div className="banner__contents">
              <h1>Boutique</h1>
              <p>Acceuil{'>'}Boutique</p>
            </div>
        </header>
        
    )
}

export default Bbanner

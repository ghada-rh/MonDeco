import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    return (
        <>
          <ul className="nav">  
             <li className="nav__item"><Link className="nav__link" to="/">Acceuil</Link></li> 
             <li className="nav__item"><Link className="nav__link" to="/boutique">Boutique</Link></li> 
             <li className="nav__item"><Link className="nav__link" to="#">Nos réalisations</Link></li> 
             <li className="nav__item"><Link className="nav__link" to="#">Contactez-nous</Link></li> 
        </ul>
        </>
    )
}

export default Navbar

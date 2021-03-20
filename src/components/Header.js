import React from 'react'
import './Header.css';
import Search from '../images/searchIcon.svg'
import location from '../images/location.svg'
import config from '../images/config.svg'

const Header = () => {
    return (
        <div className="header">
            {/*img* */}
                <div>
                <h3>Mon Exterieur.fr</h3>
                </div>
                {/**search icon */}
                <div className="header__search">
                    <img src={Search}/>
                    <input type="text" placeholder="Recherche"/>
                 
                </div>
                {/**localisation icon */}
                <div className="header__loc">
                   <img src={location}/>
                   <p>Notre magasin</p>
                </div>
                {/*config ocalisation icon */}
                <div className="header__config">
                  <img src={config}/>
                  <p>Configuration</p>
                </div>
                
            
            
        </div>
    )
}

export default Header

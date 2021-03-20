import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
            <div>
                <h2>Mon Exterieur.fr</h2>
            </div>
            <div className="footer__box">
                    <h3>Lien utiles</h3>
                    <ul>
                        <li><a href="#">Configurateur</a></li>
                        <li><a href="#">Notre magasin</a></li>
                        <li><a href="#">Notice et installation</a></li>
                        <li><a href="#">Livraison Transport</a></li>
                    
                    </ul>
            </div>
            <div className="footer__box">
                    <address>
                        <h3>Nous contacter</h3>
                        <p>Adresse <span>3 rue des champ, france</span> </p>
                        <p>Telephone<a href="tel:21625572444">+21625572444</a></p>
                    </address>
                    
            </div>
            <div className="footer__box">
                    <div>
                        <h3>Horaire</h3>
                        <p>Lundi à Vendredi<span> <img/> 08-09</span> <span> <img/> 08-09</span></p>
                        <p>Samedi<span> <img/> 08-09</span> </p>
                    </div>
                    
            </div>
            </div>
        </div>
    )
}

export default Footer

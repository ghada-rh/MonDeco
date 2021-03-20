import React from 'react';
import config from '../images/config.svg';
import './Config.css'
const Config = () => {
    return (
        <div className="config__container">
            <div className="config" >
                <div>
                   <img src={config}/>
                </div>
                <div className="config__text">
                    <h3>hello world</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, hic eius. Ad, exercitationem error natus sed pariatur quis dicta libero blanditiis dolore. Aliquid ratione sed sint ipsam inventore eveniet porro?</p>
                </div>
            </div>
        </div>
        
        
    )
}

export default Config

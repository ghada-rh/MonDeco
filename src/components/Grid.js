import React from 'react'
import './Grid.css'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'
import img7 from '../images/img7.png'
import img8 from '../images/img8.png'
import img9 from '../images/img9.png'
import img10 from '../images/img10.png'

const Grid = () => {
    return (
        <div className="grid__container">
           <div className="grid">
            <img src={img5}/>
            <img src={img6}/>
            <img src={img7}/>
            <img src={img8}/>
            <img src={img9}/>
            <img src={img9}/>
        </div>
        </div>
        
    )
}

export default Grid

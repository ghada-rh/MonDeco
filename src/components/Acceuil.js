import React from 'react'
import Cards from './Cards'
import Config from './Config'
import Realisation from './Realisation';
import Grid from './Grid';
import Banner from './Banner'

const Acceuil = () => {
    return (
        <div>
            <Banner/>
            <Cards/>
            <Config/>
            <Realisation />
            <Grid /> 
        </div>
    )
}

export default Acceuil

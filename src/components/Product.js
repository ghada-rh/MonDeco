import React from 'react'

const Product = ({product}) => {
    return (
        <div className="item">
            <img src={product.picture} alt="img"/>
            <p className="item__name">{product.product_name}</p>
            <p className="item__price">{product.price}</p>
        </div>
    )
}

export default Product

import React, {useEffect} from 'react'
import Product from './Product';
import {connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';
import './ProductList.css'
const ProductList = (props) => {
    useEffect(() => {
        props.fetchPosts();
    }, [fetchPosts])
    
    const displayCards = props.posts.isLoading ? (
        <h1>Loading ...</h1>
    )
    : props.posts.error ? (
        <p>{props.posts.error}</p>
    )
    : 
    (
        props.posts.items.map( product => {
            return <Product key={product.id} product= {product}/>
        })
    )

    return (
        <div className="list__container">
            <div className="list">
            
            {displayCards}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    posts: state.posts
});

//export default ProductList
export default connect(mapStateToProps, { fetchPosts })(ProductList);
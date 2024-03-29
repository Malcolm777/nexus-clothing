import React from 'react'; 
import { connect } from 'react-redux'; 

import { clearItemFromCart } from '../../redux/cart/cart.actions'; 

import './checkout-item.styles.scss'; 

const CheckoutItem = ({cartItem}) => { 
    const {name, imageUrl, price, quantity} = cartItem; 
    return (
    <div className = 'checkout-item'>
        <div className = 'image-container'> 
            <img src = {imageUrl} alt = 'item'>
            </img>
        </div>
        <span className = 'name'>{name} </span>
        <span className = 'quantity'>{quantity} </span>
        <span className = 'price'> {price}</span>
        <div className = 'remove-button'>&#10005; </div>
    </div> 
)};

const mapDispatchToProps = dispatch => ({ 
    clearItem: item => dispatch(clearItemFromCart(item))
})

export default (null, mapDispatchToProps)(CheckoutItem); 
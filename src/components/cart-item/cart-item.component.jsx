import React from 'react'; 

import './cart-item.styles.scss'; 

//functional component 
//destructure props we need for the item 
//returns a div with className cart item 
const CartItem = ({ item: {imageUrl, price, name, quantity } }) => (
    <div className = 'cart-item'> 
        <img src = { imageUrl } alt = 'item' /> 
        <div className = 'item-details'> 
            <span className = 'name'> { name } </span>
            <span className = 'price'> { quantity } x $ { price } </span>
        </div> 
    </div> 
);
        
export default CartItem; 
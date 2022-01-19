import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({ 
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

//in reducer we're not using payload
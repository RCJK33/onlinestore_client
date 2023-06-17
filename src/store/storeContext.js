import { createContext } from "react";

/* 
    Context is a description of the data
    Interface / Plan / BluePrint

    also should be a Modules or presets
*/

const StoreContext = createContext({
    cart: [],
    user: {},
    addToCart: () => {},
    removeFromCart: () => {},
    getCartCount: () => {}

});

export default StoreContext;
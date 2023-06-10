import { useState } from "react";
import StoreContext from "./storeContext";

const GlobalState = (props) => {
    const [cart,setCart] = useState([]);
    const [user,setUser] = useState({id: 122215, name: "Rafael Chavez", email: "rafael.cahvez29@uabc.edu.mx"});

    const addToCart = (product) => {
        let copy = [...cart]
        copy.push(product)
        setCart(copy);
    };
    
    const removeFromCart = () => {
        console.log("global remove");
    };

    return (
        <StoreContext.Provider value={{
            cart: cart,
            user: user,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
        }}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default GlobalState;
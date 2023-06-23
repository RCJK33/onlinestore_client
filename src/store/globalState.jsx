import { useState } from "react";
import StoreContext from "./storeContext";

const GlobalState = (props) => {
    const [cart,setCart] = useState([]);
    // eslint-disable-next-line
    const [user,setUser] = useState({id: 122215, name: "Rafael Chavez", email: "rafael.cahvez29@uabc.edu.mx"});

    const addToCart = (product) => {
        console.log(product)
        let copy = [...cart];
        let index = copy.findIndex((p) => p._id === product._id);
        if (index === -1){
            copy.push(product);
        } else {
            copy[index].quantity += product.quantity;
        }
        setCart(copy);
    };

    const removeFromCart = (_id) => {
        let copy = cart.filter((prod) => prod._id !== _id);
        setCart(copy);
    };

    const getCartCount = () => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            let prod = cart[i];
            total += prod.quantity;
        }
        return total;
    };

    return (
        <StoreContext.Provider value={{
            cart: cart,
            user: user,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            getCartCount: getCartCount
        }}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default GlobalState;
import { useState } from "react";
import StoreContext from "./storeContext";

const GlobalState = (props) => {
    const [cart,setCart] = useState([]);
    const [user,setUser] = useState({id: 122215, name: "Rafael Chavez", email: "rafael.cahvez29@uabc.edu.mx"});

    const addToCart = (product) => {
        let copy = [...cart];
        let index = copy.findIndex((p) => parseFloat(p._id) == parseFloat(product._id));
        if (index == -1){
            copy.push(product);
        } else {
            copy[index].quantity += product.quantity;
        }
        setCart(copy);
    };

    const removeFromCart = (param) => {
        let copy = [...cart];
        let index = copy.findIndex((prod) => prod === param);
        copy.splice(index,1);
        setCart(copy);
    };

    const getCartCount = () => {

        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            let prod = cart[i];
            total += prod.quantity;
        }

        return total;
    }

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
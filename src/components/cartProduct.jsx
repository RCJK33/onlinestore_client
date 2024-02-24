import { useContext } from "react";
import StoreContext from "../store/storeContext";
import './cssStyles/cartProduct.css';

function CartProduct(params) {
    const {removeFromCart} = useContext(StoreContext);

    return(
        <div className="cart-product">
            <div className="image"><img src={"/images/"+params.data.img+".jpg"} alt="" srcset="" /></div>
            <div className="title">{params.title}</div>
            <div className="quantity"><p>Quantity</p>{params.quantity}</div>
            <div className="price"><p>Total</p>${parseFloat(params.quantity * params.data.price).toFixed(2)}</div>
            <button className="btn btn-sm btn-outline-danger" onClick={() => removeFromCart(params.data._id)}><i className="fa-solid fa-trash"></i></button>
        </div>
    );
}

export default CartProduct;
import QuantityPicker from "./quantityPicker";
import "./cssStyles/product.css"
import { useContext, useState } from "react";
import StoreContext from "../store/storeContext";

function Product(product) {
    const [quantity,setQuantity] = useState(1);
    const addToCart = useContext(StoreContext).addToCart;

    function handleAdd(pdn){
        const prod2Cart = {...product.data, quantity};
        addToCart(prod2Cart);
    }

    function onChangeQP(quantity) {
        setQuantity(quantity)
    }

    return (
        <div className="product f-column">
            <img src={"/images/"+product.data.img} alt="" srcset="" />
            <div className="product-element f-column">
                <h5>{product.data.name}</h5>
            </div>
            <div className="f-column">
                <div className="f-row">
                    <label className="lbl-price f-column"><span>Price</span> ${product.data.price.toFixed(2)}</label>
                    <label className="lbl-total f-column"><span>Total</span> ${(product.data.price*quantity).toFixed(2)}</label>
                </div>
                <QuantityPicker onChange={onChangeQP}/>
                <button className="btn btn-success btn-sm" onClick={() => handleAdd(product.data.name)}>
                    <i className="fa-solid fa-cart-plus"></i>
                </button>
            </div>
        </div>
    );
}

export default Product;
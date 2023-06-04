import QuantityPicker from "./quantityPicker";
import "./cssStyles/product.css"
import { useState } from "react";

function Product(product) {

    const [quant,setQuantity] = useState(1);

    function handleAdd(pdn){
        console.log("Adding "+quant+" "+pdn+" to cart.");
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
                    <label className="lbl-total f-column"><span>Total</span> ${(product.data.price*quant).toFixed(2)}</label>
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
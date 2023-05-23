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
            <div className="product-element">
                <h5>{product.data.name}</h5>
                <div className="f-column">
                    <label>Price ${product.data.price.toFixed(2)}</label>
                    <label>Total ${(product.data.price*quant).toFixed(2)}</label>
                </div>
            </div>
            <div className="f-column">
                <QuantityPicker onChange={onChangeQP}/>
                <button className="btn btn-success btn-sm" onClick={() => handleAdd(product.data.name)}>
                    <i className="fa-solid fa-cart-plus"></i>
                </button>
            </div>
        </div>
    );
}

export default Product;
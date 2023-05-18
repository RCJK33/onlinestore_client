import QuantityPicker from "./quantityPicker";
import "./cssStyles/product.css"

function Product(product) {

    const handleAdd = () => {
        console.log("Added to cart");
    }

    return (
        <div className="product f-column">
            <img src={"/images/"+product.data.img} alt="" srcset="" />
            <div className="product-element">
                <h5>{product.data.name}</h5>
                <label>${product.data.price.toFixed(2)}</label>
            </div>
            <div className="f-column">
                <QuantityPicker/>
                <button className="btn btn-success btn-sm" onClick={handleAdd}>
                    <i className="fa-solid fa-cart-plus"></i>
                </button>
            </div>
        </div>
    );
}

export default Product;
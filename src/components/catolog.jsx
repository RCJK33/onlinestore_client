import Product from "./product";
import "./cssStyles/catalog.css"

import DataService from "../Services/DataService";
import { useEffect, useState } from "react";

const Catalog = () => {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        let service = new DataService();
        let prods = service.getProducts();
        setAllProducts(prods);
    }, []);

    return (
        <div className="catalog">
            <h3>Check our amazing catalog below</h3>
            <h3>We currently have {allProducts.length} products ready form you</h3>
            <div className="products">
                {allProducts.map(prod => <Product data={prod} />)}
            </div>
        </div>
    );
};
export default Catalog;
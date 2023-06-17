import Product from "../components/product";
import "./cssStyles/catalog.css"

import DataService from "../Services/DataService";
import { useEffect, useState } from "react";

const Catalog = () => {

    const [allProducts, setAllProducts] = useState([]);

    const [categories,setCategories] = useState([]);
    const [productsToDisplay,setProductsToDisplay] = useState([]);

    useEffect(() => {
        loadCatalog();
    }, []);

    async function loadCatalog() {
        let service = new DataService();
        let prods = await service.getProducts();
        setAllProducts(prods);
        setProductsToDisplay(prods);

        let catalg = await service.getCategories();
        setCategories(catalg);
    }

    function filter(category) {
        let list = [];
        allProducts.forEach(product => {
            if (product.category === category) list.push(product);
        });
        setProductsToDisplay(list);
    };

    return (
        <div className="catalog">
            <h3>Check our amazing catalog below</h3>
            <h3>We currently have {allProducts.length} products ready form you</h3>
            <div className="filters">
                <button onClick={() => setProductsToDisplay(allProducts)} className="btn btn-dark">All</button>
                {categories.map( filtr => <button onClick={() => filter(filtr)} className="btn btn-dark">{filtr}</button>)}
            </div>
            <div className="products">
                {productsToDisplay.map(prod => <Product data={prod} />)}
            </div>
        </div>
    );
};
export default Catalog;
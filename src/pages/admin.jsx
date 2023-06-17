import { useEffect, useState } from 'react';
import './cssStyles/admin.css';
import DataService from '../Services/DataService';

function Admin(params) {

    const [product, setProduct] = useState({});
    const [coupon, setCoupon] = useState({});
    const [allProducts, setAllProducts] = useState([]);
    const [allCoupons, setAllCoupons] = useState([]);

    useEffect(() => {
        loadProducts();
        loadCoupons();
    }, []);

    async function loadProducts() {
        let service = new DataService();
        let prods = await service.getProducts();
        setAllProducts(prods);
    }
    
    async function loadCoupons() {
        let service = new DataService();
        let coupons = await service.getCoupons();
        setAllCoupons(coupons);
    }

    const handleTextChange = (e) => {
        let text = e.target.value;
        const name = e.target.name;

        console.log(name)
        console.log(text);

        if (name === 'price') {
            text = parseFloat(text)
        }

        let copy = { ...product };
        copy[name] = text;
        setProduct(copy);
    };

    const saveProduct = async () => {
        const service = new DataService();
        const savedProduct = await service.postProduct({...product});

        /* ... operator is New in other langueges */
        let copy = [...allProducts];
        copy.push(savedProduct);
        setAllProducts(copy);
    };

    const deleteProduct = (p) => {
        let copy = [...allProducts];
        let index = copy.findIndex((prod) => prod === p );
        copy.splice(index,1);
        setAllProducts(copy);
    }

    const handleCouponChange = (e) => {
        let text = e.target.value;
        const name = e.target.name;

        console.log(text);

        if (text === 'discount') {
            text = parseFloat(text);
        }

        let copy = { ...coupon};
        copy[name] = text;
        setCoupon(copy);
    };

    const saveCoupon = () => {
        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    };

    const deleteCoupon = (c) => {
        let copy = [...allCoupons];
        let index = copy.findIndex((prod) => prod === c );
        copy.splice(index,1);
        setAllCoupons(copy);
    }
    
    return (
        <div className="admin">
            <h1>Store Administration</h1>

            <div className="sections">

                <section className="Admin-Products">
                    <h3>Products</h3>

                    <div className='form'>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input onBlur={handleTextChange} type="text" className="form-control" name="name" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input onBlur={handleTextChange} type="number" className="form-control" name="price" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Category</label>
                            <input onBlur={handleTextChange} type="text" className="form-control" name="category" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Image</label>
                            <input onBlur={handleTextChange} type="text" className="form-control" name="img" />
                        </div>
                        <div className="form-buttons">
                            <button className="btn btn-dark" onClick={saveProduct} cli>Save Product</button>
                        </div>
                    </div>

                    <ul className="product-list">
                        {allProducts.map((p) => (
                        <li>
                            <span className='title'>{p.name}</span>
                            <span className='price'>${parseFloat(p.price).toFixed(2)}</span>
                            <span className='price'>{p.category}</span>
                            <button className="btn btn-sm btn-outline-danger" onClick={() => deleteProduct(p)}><i className="fa-solid fa-trash"></i></button>
                        </li>))}
                    </ul>

                </section>

                <section className="Admin-Coupons">
                    <h3>Coupon Code</h3>
                    <div className='form'>
                        <div className="mb-3">
                            <label className="form-label">Coupon Code</label>
                            <input onBlur={handleCouponChange} type="text" className="form-control" name="code" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Discount</label>
                            <input onBlur={handleCouponChange} type="number" className="form-control" name="discount" />
                        </div>
                        <div className="form-buttons">
                            <button className="btn btn-dark" onClick={saveCoupon} cli>Save Coupon Code</button>
                        </div>
                    </div>

                    <ul className="product-list">
                        {allCoupons.map((c) => (
                        <li>
                            <span className='title'>{c.code}</span>
                            <span className='price'>${parseFloat(c.discount).toFixed(2)}</span>
                            <button className="btn btn-sm btn-outline-danger" onClick={() => deleteCoupon(c)}><i className="fa-solid fa-trash"></i></button>
                        </li>))}
                    </ul>
                </section>

            </div>
        </div>
    );
}

export default Admin;
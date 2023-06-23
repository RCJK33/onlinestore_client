import { useEffect, useState } from 'react';
import './cssStyles/admin.css';
import DataService from '../../Services/DataService';

function Admin(params) {

    const [product, setProduct] = useState({});
    const [coupon, setCoupon] = useState({});
    const [allProducts, setAllProducts] = useState([]);
    const [allCoupons, setAllCoupons] = useState([]);
    
    const [invalidCouponCode, setInvalidCouponCode] = useState(false);

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

    const handleProductTextChange = (e) => {
        let text = e.target.value;
        const name = e.target.name;

        if (name === 'price') {
            text = parseFloat(text)
        }

        let copy = { ...product };
        copy[name] = text;
        setProduct(copy);
    };

    const saveProduct = async () => {
        try {
            const service = new DataService();
            const savedProduct = await service.postProduct({ ...product });
            /* ... operator is New in other langueges */
            if (savedProduct) {
                let copy = [...allProducts];
                copy.push(savedProduct);
                setAllProducts(copy);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteProduct = async (_id) => {
        let database = new DataService();
        // eslint-disable-next-line
        const response = await database.deleteProduct(_id);
        if (response['deleted'] === true) {
            let copy = allProducts.filter((coupon) => coupon._id !== _id);
            setAllProducts(copy);
       }
    }

    const handleCouponTextChange = (e) => {
        let text = e.target.value;
        const name = e.target.name;

        if (name === 'discount') {
            text = parseFloat(text);
            if (text < 3 || text > 40) {
                setInvalidCouponCode(true);
                return;
            }
            setInvalidCouponCode(false);
        }

        let copy = { ...coupon };
        copy[name] = text;
        setCoupon(copy);
    };

    const saveCoupon = async () => {
        try {
            const service = new DataService();
            const savedCoupon = await service.postCoupon({ ...coupon });
            if (savedCoupon) {
                setInvalidCouponCode(false);
                let copy = [...allCoupons];
                copy.push(savedCoupon);
                setAllCoupons(copy);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteCoupon = async (_id) => {
        let database = new DataService();
        // eslint-disable-next-line
        const response = await database.deleteCoupon(_id);
       if (response['deleted'] === true) {
            let copy = allCoupons.filter((coupon) => coupon._id !== _id);
            setAllCoupons(copy);
       }
    };

    return (
        <div className="admin">
            <h1>Store Administration</h1>

            <div className="sections">

                <section className="Admin-Products">
                    <h3>Products</h3>
                    {}
                    <div className='form'>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input onBlur={handleProductTextChange} type="text" className="form-control" name="name" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input onBlur={handleProductTextChange} type="number" className="form-control" name="price" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Category</label>
                            <input onBlur={handleProductTextChange} type="text" className="form-control" name="category" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Image</label>
                            <input onBlur={handleProductTextChange} type="text" className="form-control" name="img" />
                        </div>
                        <div className="form-buttons">
                            <button className="btn btn-dark" onClick={saveProduct} cli="true">Save Product</button>
                        </div>
                    </div>

                    <ul className="product-list">
                        {allProducts.map((p) => (
                            <li>
                                <span className='title'>{p.name}</span>
                                <span className='price'>${parseFloat(p.price).toFixed(2)}</span>
                                <span className='price'>{p.category}</span>
                                <button className="btn btn-sm btn-outline-danger" onClick={() => deleteProduct(p._id)} cli="true"><i className="fa-solid fa-trash"></i></button>
                            </li>))}
                    </ul>

                </section>

                <section className="Admin-Coupons">
                    <h3>Coupon Code</h3>
                    <div className='form'>
                        <div className="mb-3">
                            <label className="form-label">Coupon Code</label>
                            <input onBlur={handleCouponTextChange} type="text" className="form-control" name="code" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Discount</label>
                            <div className='invalid'>
                                {invalidCouponCode ? <label className="error">Invalid Code (3-40)</label> : null}
                            </div>
                            <input onBlur={handleCouponTextChange} type="number" className="form-control" name="discount" />
                        </div>
                        <div className="form-buttons">
                            <button className="btn btn-dark" onClick={saveCoupon} cli="true">Save Coupon Code</button>
                        </div>
                    </div>

                    <ul className="product-list">
                        {allCoupons.map((c) => (
                            <li>
                                <span className='title'>{c.code}</span>
                                <span className='price'>%{parseFloat(c.discount).toFixed(2)}</span>
                                <button className="btn btn-sm btn-outline-danger" onClick={() => deleteCoupon(c._id)} cli="true"><i className="fa-solid fa-trash"></i></button>
                            </li>))}
                    </ul>
                </section>

            </div>
        </div>
    );
}

export default Admin;
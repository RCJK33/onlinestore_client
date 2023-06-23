import { useContext, useState } from 'react';
import './cssStyles/cart.css';
import StoreContext from '../store/storeContext';
import CartProduct from '../components/cartProduct';
import { Link } from 'react-router-dom';
import DataService from '../Services/DataService';

function Cart(params) {
    const { cart, getCartCount } = useContext(StoreContext);
    const [couponCode, setCouponCode] = useState('');
    const [invalidCoupon, setInvalidCoupon] = useState(false);
    const [couponsApplied, setCouponApplied] = useState(null);

    const getTotalPrice = () => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            let c = cart[i];
            total += c.quantity * c.price;
        }
        return parseFloat(total);
    }

    if (getCartCount() === 0) {
        return (
            <div className="cart">
                <div className="no-products">
                    <h3>Empty Cart</h3>
                    <h4>Please go to <Link to='/catalog'>Catalog</Link> and add to cart</h4>
                </div>
            </div>
        );
    }

    const handleCouponText = (tag) => {
        const text = tag.target.value;
        setCouponCode(text);
    };

    const handleApplyCoupon = async () => {
        const database = new DataService();
        // eslint-disable-next-line
        const request = await database.getCouponByCode(couponCode);
        if (request !== null) {
            setCouponApplied(request);
            setInvalidCoupon(false);
        } else {
            console.log(request);
            setCouponApplied(null);
            setInvalidCoupon(true);
        }
    };

    const getTotalWithDiscount = () => {
        const total = getTotalPrice();
        let discount = null;
        if (couponsApplied !== null) {
            discount = total * (couponsApplied.discount / 100);
        } else {
            discount = 0;
        }
        return total - discount;
    }

    return (
        <div className="cart">
            <h1>This is your cart</h1>
            <div className='sections'>
                <section className="cart-list">
                    {cart.map((product) => (<CartProduct title={product.title} quantity={product.quantity} data={product} />))}
                    <div className="no-products">
                    <h4>Go to <Link to='/catalog'>Catalog</Link> and add more products to cart</h4>
                </div>
                </section>
                <section className='payment'>
                    <div className='coupons f-column'>
                        <h4>Discount code</h4>
                        {invalidCoupon ? <label className="error">Invalid Coupon</label> : null}
                        <div className='f-row'>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Enter discount code" aria-label="Enter discount code" aria-describedby="button-addon2" onBlur={handleCouponText} disabled={couponsApplied} />
                                <button className="btn btn-outline-success" type="button" id="button-addon2" onClick={handleApplyCoupon} disabled={couponsApplied}>Apply</button>
                            </div>
                        </div>
                        {couponsApplied ?
                            <ul className="coupon-list">
                                <li>
                                    <span className='title'>{couponsApplied.code}</span>
                                    <span className='price'>%{parseFloat(couponsApplied.discount).toFixed(2)}</span>
                                    <button className="btn btn-sm btn-outline-danger" onClick={() => setCouponApplied(null)}><i className="fa-solid fa-trash"></i></button>
                                </li>
                            </ul> : null}
                    </div>
                    <div className='info'>
                        <div className='br' />
                        <div className='ticket f-row'>
                            <p>Original Price</p>
                            <p>${getTotalPrice().toFixed(2)}</p>
                        </div>
                        {couponsApplied ?
                            <div className='ticket f-row'>
                                <p>Coupon discount</p>
                                <p>$-{(getTotalPrice() * (couponsApplied['discount'] / 100)).toFixed(2)}</p>
                            </div> : null}
                        <div className='br' />
                        <div className='ticket f-row'>
                            <h4>Total</h4>
                            <p>${getTotalWithDiscount().toFixed(2)}</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Cart;
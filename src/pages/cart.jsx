import { useContext } from 'react';
import './cssStyles/cart.css';
import StoreContext from '../store/storeContext';
import CartProduct from '../components/cartProduct';
import { Link } from 'react-router-dom';

function Cart(params) {
    const { cart, getCartCount } = useContext(StoreContext);

    const getTotalPrice = () => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            let c = cart[i];
            total += c.quantity * c.price;
        }
        return parseFloat(total);
    }

    if (getCartCount() == 0) {
        return (
            <div className="cart">
                <div className="no-products">
                    <h3>Empty Cart</h3>
                    <h4>Please go to <Link to='/catalog'>Catalog</Link> and add to cart</h4>
                </div>
            </div>
        );
    }

    return (
        <div className="cart">
            <h1>This is your cart</h1>
            <div className='sections'>
                <section className="cart-list">
                    {cart.map((p) => (<CartProduct title={p.title} quantity={p.quantity} data={p} />))}
                </section>
                <section className='payment'>
                    <div className='total f-row'>
                        <h4>Total:</h4>
                        <p>${getTotalPrice()}</p>
                    </div>
                    <div className='coupons f-row'>
                        <input type="text" className='form-control' />
                        <button className='btn btn-sm btn-success'>Apply</button>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Cart;
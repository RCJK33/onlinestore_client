import './cssStyles/quantityPicker.css'
import { useState } from 'react';

function QuantityPicker() {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return(
        <div className="qt-picker">
            <label>{quantity}</label>
            <button className="btn btn-outline-success btn-sm" onClick={handleDecrease} disabled={quantity === 1}>-</button>
            <button className="btn btn-outline-success btn-sm" onClick={handleIncrease}>+</button>
        </div>
    );
}

export default QuantityPicker;
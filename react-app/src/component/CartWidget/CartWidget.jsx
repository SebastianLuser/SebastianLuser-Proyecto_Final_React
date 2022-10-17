import React from "react";
import { useCartContext } from "../Context/CartContext";
import {Link} from 'react-router-dom';
import basket from "../images/basket2.png";
const CartWidget = () => {

    const {totalProduct} = useCartContext();

    return(
        <Link to={'/cart'}>
            <button type="button" className="btn position-relative" title="Go to Cart">
                <img src={basket} alt="Basket" width="30p"/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalProduct() > 0 ? totalProduct(): ""}</span>
            </button>
        </Link>
    )
}

export default CartWidget;


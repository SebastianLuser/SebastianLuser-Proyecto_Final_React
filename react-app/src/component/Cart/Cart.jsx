import React from "react";
import { Link } from "react-router-dom";
import cesto from "../images/trash.svg";
import carrito from "../images/basket2.png";
import { useCartContext } from "../Context/CartContext";

const Cart = () => {
    const {cart, removeProduct, clearCart, totalCart} =  useCartContext();

    if(cart.length === 0){
        return(
            <>
                <p>There is no products in the cart</p>
                <Link to='/menu'>Continue Buying</Link>
            </>
        )
    }
    return (
        <div className="container">
            {/* Clear the Cart */}
            <div>
                <Link onClick={() => {clearCart()}}>
                    <button className="btn" title="Empty Cart">Empty Cart<img src={cesto} alt="Empty Cart" width="16" /></button>
                </Link>
            </div>
            {/* Display products */}
            {cart.map(product => (
            <div key={product.id}>
                <img src={product.image} alt={product.title} />
                <div>
                    <p>Title: {product.title}</p>
                    <p>Quantity: {product.quantity}</p>
                    <p>Price c/u: {product.price}</p>
                    <p>Subtotal: {product.quantity * product.price}</p>
                    <Link onClick={() => {removeProduct(product.id)}}><img src={cesto} alt="Remove Product" title="Remove Product" width="24" /></Link>
                </div>
            </div>
            ))}
            {/* Total payment */}
            <div>
                <p>Total Payment</p>
                <p>${totalCart()}</p>
                <div className="text-end">
                    <Link to={"/checkout"} title="Checkout">
                        <button >Checkout <img src={carrito} alt="Checkout" width="16" /></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;
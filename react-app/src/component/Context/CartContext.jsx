import React  from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";


const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider=({children})=>{

    const [cart,setCart] = useState([]);
    
    const addProduct = (item , newQuantity) =>{
        if(isInCart(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, quantity: product.quantity + newQuantity} : product
            }))
        } else {
            setCart([...cart, { ...item, quantity: newQuantity}]);
        }
    }

    const clearCart = () => setCart([]);

    const isInCart = (id)=> cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));
    
    const totalCart = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProduct = () => cart.reduce((acumulador,productoActual) => acumulador + productoActual.quantity,0)

    return(
            <CartContext.Provider value={{addProduct,clearCart, isInCart, removeProduct,totalCart,totalProduct,cart}}>
                {children}
            </CartContext.Provider>
    )
}

export default CartProvider;
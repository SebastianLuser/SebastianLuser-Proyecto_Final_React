import React from "react";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "../Context/CartContext";

const ItemDetail = ({items}) => {

    const [goToCart,setGoToCart ] = useState(false);
    const {addProduct} = useCartContext();
    const onAdd = (quantity) =>{
        setGoToCart(true);
        addProduct(items,quantity);
        
    }

    return(
        <div className="card">
            <img src={items.image} className="card-img-top" alt={items.title} />
            <div className="card-body">
                <h5 className="card-title">{items.title}</h5>
                <p className="card-text">{items.description}</p>
                <p className="card-text">${items.price}</p> 
                {
                    goToCart ? <Link to='/cart'>Finish Shopping</Link> : <ItemCount stock={10} initial={1} onAdd={onAdd} />
                }
            </div>
        </div>
    )
}

export default ItemDetail;
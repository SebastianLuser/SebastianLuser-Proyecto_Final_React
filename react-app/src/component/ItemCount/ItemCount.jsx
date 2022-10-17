import React from "react";
import { useState } from "react";


const ItemCount = ({stock, initial , onAdd}) =>{

    const [quantity, setClicks] = useState(initial);

    const plus = () => {
        if(quantity < stock){
            setClicks (quantity + 1);
        }
    }
    const minus = () => {
        if(quantity > 0){
            setClicks (quantity - 1);
        }
    }
    return(
        <div className="container-counter">
            <div className="container-btn">
                <input  type="submit" value="-" onClick={minus}/>
                <span>{quantity}</span>
                <input  type="submit" value="+" onClick={plus}/>
            </div>
            <button className="btn-add" onClick={()=> onAdd(quantity)} >Add to cart</button>
        </div>
    )
}

export default ItemCount;
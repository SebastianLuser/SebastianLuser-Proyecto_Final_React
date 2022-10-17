import React from "react";
import { Link } from "react-router-dom";

const Item = ({item  = []}) => {

    return(
        <div >
            <div className="card" >
                <Link><img src={item.image} className="card-img-top" alt={item.title}/></Link>
                <div className="card-body text-center">
                    <h5 className="card-title text-center">{item.title}</h5>
                    <p className="card-text text-center">${item.price}</p>
                    <Link to={"/detalle/"+ item.id} className="btn btn-primary">Buy<i className="fas fa-map-signs"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default Item;
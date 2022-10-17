import React from "react";
import { NavLink } from "react-router-dom";

const NavBar  = () => {

    return (
        <div className="container">
            <nav className="nav">
                <div className="nav_brand">
                    <NavLink className="nav_link" to="/">Home</NavLink>
                </div>
                <div className="nav_brand">
                    <NavLink className="nav_link" to="/menu">Products</NavLink>
                </div>
                <ul className="nav_list">
                    <li className="nav-item ">
                        <NavLink className="nav-link " to="/categoria/adventure" >Adventure</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"  to="/categoria/rol" >Rol</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"  to="/categoria/strategy" >Strategy</NavLink>
                    </li>
                </ul>
            </nav> 
        </div>
    )
}

export default NavBar;
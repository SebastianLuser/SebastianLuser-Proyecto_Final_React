import React from "react";
import Logo from "../images/logo2.png";

const Success = ({id}) => {
    return (
        <div className="row">
            <div className="col-md-12 text-center p-5">
                <h1>Congrats!</h1>
                <p><img src={Logo} alt="Logo" width="180" /></p>
                <p>Purchase order was generated with the ID: <b>{id}</b></p>
            </div>
        </div>
    )
}

export default Success;
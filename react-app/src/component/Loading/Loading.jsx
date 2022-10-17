import React from "react";
import Logo from "../images/loading.png";

const Loading = () => {
    return (
        <div className="row">
            <div className="col-md-12 text-center p-5">
                <p><img src={Logo} alt="Logo" width="180" /></p>
                <h3>Loading...</h3>
            </div>
        </div>
    )
}

export default Loading;
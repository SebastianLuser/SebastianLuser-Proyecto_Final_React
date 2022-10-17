import React from "react";
import twitter from "../images/SM-RRSS-01.png";
import youtube from "../images/SM-RRSS-02.png";
import instagram from "../images/SM-RRSS-03.png";
import facebook from "../images/SM-RRSS-04.png";

const Footer = () => {
    return (
        <div className="row p-5">
            <div className="col">
                <div className="container text-black">
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <p>TM © 2022 Sebas Corporation. Todos los derechos reservados.</p>
                        </div>
                        <div className="col-md-6 text-end">
                            <img src={facebook} width="24" alt="facebook" /> 
                            <img src={instagram} width="24" alt="instagram" /> 
                            <img src={youtube} width="24" alt="youtube" /> 
                            <img src={twitter} width="24" alt="twitter" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
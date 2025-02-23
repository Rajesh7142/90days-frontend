import React from "react";
import { FaUser , FaGooglePlay , FaApple } from "react-icons/fa";
import Home from "./Home/Home";


function Header() {

    return (
        <>
               <header>
               <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-main">
                    <div class="container-fluid">
                       <img className="header-logo" src="data:image/png;base64,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"/>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav nav-content">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                <a class="nav-link" href="#">Movies</a>
                                <a class="nav-link" href="#">Theates</a>
                            </div>
                            <div className="right-nav">
                            <button type="button"class="btn btn-outline-primary btn-m">Log in/ signup <FaUser /></button>
                            <span class="icons rounded-circle"><FaGooglePlay /></span>
                            <span class="icons rounded-circle"><FaApple /></span>
                            </div>
                        </div>
                    </div>
                </nav>
               </header>
        </>
    )
};

export default Header;
import React from 'react';
import logo from "../../assets/logo/logo.png";


const Logo = () => {
    return (
        <>
            <a className="navbar-brand" href="#">
                <img height={40} src={logo} alt=""/>
            </a>
        </>
    );
};

export default Logo;
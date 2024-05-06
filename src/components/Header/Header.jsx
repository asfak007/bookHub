import React from 'react';
import Logo from "./Logo.jsx";
import Actions from "./Actions.jsx";

const Header = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg bg-success bg-opacity-75">
                    <div className="container">
                        <Logo/>
                       <Actions/>
                    </div>
                </nav>
            </header>

        </div>
    );
};

export default Header;
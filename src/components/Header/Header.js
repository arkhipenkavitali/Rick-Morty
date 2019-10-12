import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="menu">
                <a href="#">Characters</a>
                <a href="#">Locations</a>
                <a href="#">Epizodes</a>
            </nav>
        </header>      
    )
};

export default Header;
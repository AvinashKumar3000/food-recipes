// src/components/Header.jsx

import React from 'react';

const Header = ({ title }) => {
    return (
        <header className="my-4">
            <h1 className="text-center">{title}</h1>
        </header>
    );
};

export default Header;

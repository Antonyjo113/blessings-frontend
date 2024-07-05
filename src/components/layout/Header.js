// REACT IMPORTS
import React, { useState } from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';

// REACT COMPONENT
const Header = ({ menuLabel, menuTitle }) => {

    // VARIABLE INITIATIONS
    const items = [
        {label: menuTitle}
    ];

    // RETURN COMPONENT
    return (
        <div className='header'>
            <div className="title">
                <h1>{menuLabel} Blessings {menuTitle}</h1>
            </div>
            <div className="card">
                <BreadCrumb model={items} />
            </div>
        </div>
    );
};

export default Header;
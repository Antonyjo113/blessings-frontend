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
                <h2 className='m-zero tx-blue'>{menuTitle} </h2>
            </div>
            <div className='header-line'></div>
            <div className="">
                <BreadCrumb model={items} />
            </div>
        </div>
    );
};

export default Header;
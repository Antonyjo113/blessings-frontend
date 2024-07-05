// PanelMenu.js
import React, { useEffect, useState } from 'react';
import { PanelMenu } from 'primereact/panelmenu';

// REACT COMPONENT
const Sidebar = ({ onMenuSelect }) => {

    // VARIABLE INITIATIONS
    const items = [     
        {
            label: 'Dashboard',
            title: 'dashboard',
            menuTitle: 'Dashboard',
            command: (event) => {
                onMenuItemClick(event)
            }
        },
        {
            label: 'Booking',
            title: 'booking',
            menuTitle: 'Booking',
            command: (event) => {
                onMenuItemClick(event)
            }
        }
    ]

    // FUNCTIONS
    const onMenuItemClick = (event) => {
        onMenuSelect(event.item.title, event.item.menuTitle);        
    };

    // RETURN COMPONENT
    return (
        <div>
            <div className="card flex justify-content-center">
                <PanelMenu model={items} style={{ width: '20rem' }} />
            </div>
        </div>

    );
};

export default Sidebar;
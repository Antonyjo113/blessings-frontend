/* Import Section */
import React, { useState, useEffect } from "react";
import { Checkbox } from 'primereact/checkbox';
        

/* Function */
const CheckboxElement = (props) => {
    const [checked, setCheckedValue] = useState(false);

    /* Methods */
    useEffect(() => {
        setCheckedValue(props.value ? props.value :false);
    });
    const setChecked = (e) => {
        console.log('2222222222', e);
        setCheckedValue(e.checked);
        props.onChangeCheck(e);
    };

    /* Render View Return - Start */
    return (
        <div>
           
            <div className="d-flex">
            <Checkbox 
            key={props.key}
            name={props.name}
            className={props.className}
            onChange={e => setChecked(e)} 
            checked={checked}
            disabled={props.disabled}
            />
            <label htmlFor="username">{props.label}</label>
            </div>

        </div>
    );
};

/* Export default functionName; */
export default CheckboxElement;
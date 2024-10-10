/* Import Section */
import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";

/* Function */
const TextboxElement = (props) => {
    const [inputValue, setInputValue] = useState('');

    /* Methods */
    useEffect(() => {
        setInputValue(props.value ? props.value :"");
    });
    const handleChange = (e) => {
        setInputValue(e.target.value);
        props.onChangeText(e);
    };

    /* Render View Return - Start */
    return (
        <div>
            <label htmlFor="username">{props.label}</label>
            <div>
            <InputText
                name={props.name}
                value={inputValue}
                onChange={(e) => handleChange(e)}
                placeholder={props.placeholder}
                className={props.className}
                key={props.key}
                type={props.type}
                keyfilter={props.keyfilter}
                disabled={props.disabled}
            />
            </div>
        </div>
    );
};

/* Export default functionName; */
export default TextboxElement;
/* Import Section */
import React from "react";
import { Button } from 'primereact/button';

/* Function */
const ButtonElement = (props) => {

    /* Methods */
    const buttonClick = () => {
        props.onClickButton();
    }

    /* Render View Return */
    return(
        <Button
            className={props.className}
            label={props.label}
            icon={props.icon}
            iconPos={props.iconPos}
            onClick={buttonClick}
            tooltip={props.tooltip}
        />
    );
}

/* Export default functionName; */
export default ButtonElement;
import React from "react";
import './button.css';

export const Button = ({buttonName, buttonFunction, buttonColor}) => {


    const color = {
        backgroundColor: buttonColor
    }

    return (
        <div onClick={buttonFunction} style={color} className="button">
            {buttonName}
        </div>
    )


}


export default Button;
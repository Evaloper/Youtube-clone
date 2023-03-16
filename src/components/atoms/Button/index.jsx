import React from "react";
import { button } from "../../../theme/styleDefinition";


export const Button = (props) => {
    return <button style={button} onClick={props.onClick} className={props.className}>{props.children}</button>
}
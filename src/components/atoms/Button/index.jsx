import React from "react";
import { button } from "./app";


export const Button = (props) => {
    return <button style={button} onClick={props.onClick} className={props.className}>{props.children}</button>
}
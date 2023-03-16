import React from "react";

export const Input = (props) => {
    const {type, children } = props;
    

    if (type === "text"){
        return <input type={"text"} placeholder={props.placeholder} className={props.className}/>
    }

    if (type === "button"){
        return <input type={"button"} className={props.className} placeholder={props.placeholder} />
    }
    
    return <input >{children}</input>
}
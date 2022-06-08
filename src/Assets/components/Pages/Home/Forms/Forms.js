import React from "react";
import '../../../../../Assets/css/main.css'

const Forms=({icon, content, Form,placeholder,disabled}) =>{
    return(
        <li>
            <input className={Form} placeholder={placeholder} disabled={disabled}/>
            <span>{icon}</span>
            <span>{content}</span>

        </li>
    )
}

export default Forms;
import React from "react";
import '../../../Assets/css/main.css'



const NormalBtn = ({btnClass ,btnContent , btnType}) =>{
    return(
        <button type={btnType}  className={btnClass}>{btnContent}</button>
    )
}

export default NormalBtn
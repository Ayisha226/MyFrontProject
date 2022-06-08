import React from "react";
const Avatar=({content,src,classimg})=>{

    return(
        <div className="d-flex flex-column">
            <small className="mb-4">{content}</small>
            <img className={classimg} src={src} width="150px" alt="User Avatar" ></img>

        </div>
    )


}

export default Avatar
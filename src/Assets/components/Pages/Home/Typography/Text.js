import React from "react";
import '../../../../../Assets/css/main.css'


const Text=({class1, class2, content1, content2})=>{
    return(
     <div className="row align-items-center">
        <div className="col-3">
          <h6 className={class1}>{content1}</h6>
        </div>
        <div className="col-9">
          <p className={class2}>{content2}</p>
        </div>


     </div>
    )
}

export default Text
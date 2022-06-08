import React from "react";
import '../../../Assets/css/main.css'
import Avatar from "./Avatar";
import photo1 from '../../Images/team-1-800x800.jpg'
import photo2 from '../../Images/team-2-800x800.jpg'
import photo3 from '../../Images/team-3-800x800.jpg'
import photo4 from '../../Images/team-4-800x800.jpg'


const Images = () =>{
    return(
       <div  className="container mb-5">
            <h3 className="mb-5 mt-5">Images</h3>
                <div className="row">
                    <div className=" col-3">
                        <Avatar classimg=" img-thumbnail" content={"IMAGE"} src={photo1}/>
                    </div>
                    <div className="col-3">
                        <Avatar classimg="img-thumbnail rounded-circle" content={"CIRCLE IMAGE"} src={photo2}/>
                    </div>
                    <div className="col-3">
                        <Avatar classimg="img-thumbnail" content={"RAISED"} src={photo3}/>
                    </div>
                    <div className="col-3">
                        <Avatar classimg="img-thumbnail rounded-circle" content={"CIRCLE RAISED"} src={photo4}/>
                    </div>
                </div>
       </div>

    )
}

export default Images



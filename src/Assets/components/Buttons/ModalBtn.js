import React from "react";
import '../../../Assets/css/main.css'


const ModalBtn = ({ btnContent, btnClass }) => {



    return (

        <div className="row">
          <div className="md-4">
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className={btnClass}>{btnContent}</button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          
        </div>

    )
}


export default ModalBtn;

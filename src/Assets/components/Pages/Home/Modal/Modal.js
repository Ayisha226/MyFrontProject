import React from "react";
import '../../../../../Assets/css/main.css'
import ModalBtn from '../../../Buttons/ModalBtn';
import Input from "../Inputs/Input";
import DownloadBtn from "../../../Buttons/DownloadBtn";

const Modal = () => {

    return (
        <section id="JsComponents">
            <div className=" container">
                <h3 className="mb-5 mt-5">Javascript Components</h3>
                <h3 className="c-greeng fs-4 my-3">Modals</h3>
                <div className="d-flex py-5">
                    <div className="col-4 ">
                        <ModalBtn btnClass={'bg-prim modalbtns rounded border-0  py-2 text-uppercase text-white'} btnContent={"default"} />
                    </div>
                    <div className="col-4">
                        <ModalBtn btnClass={'orng modalbtns rounded border-0 py-2 text-uppercase text-white'} btnContent={"notification"} />
                    </div>
                    <div className="col-4">
                        <ModalBtn btnClass={'bg-dblue modalbtns rounded border-0 py-2 text-uppercase  mx-5 text-white'} btnContent={"Form"} />
                    </div>
                </div>

                <h3 className="c-greeng fs-4 my-4">Datepicker</h3>

                <div className="d-flex col-lg-12 mb-5">
                    <div class="col-lg-4  me-3  md-form md-outline input-with-post-icon datepicker">
                        <small className="text-uppercase  c-dblue ">Single date</small>
                        <Input
                            iClass={"form-control pt-3 mt-2 d-flex flex-row-reverse"}
                            iType={"date"}
                            iPlaceHolder={" "}
                        ></Input>
                    </div>

                    <div class="col-lg-4 me-3  md-form md-outline input-with-post-icon datepicker">
                        <small className="text-uppercase c-dblue ">Date range</small>
                        <Input
                            iClass={"form-control pt-3 mt-2 d-flex flex-row-reverse"}
                            iType={"date"}
                            iPlaceHolder={" "}
                        ></Input>
                    </div>

                    <div class="col-lg-4  md-form md-outline input-with-post-icon datepicker">
                        <small className="text-uppercase  fw-bold c-white ">Single data</small>
                        <Input
                            iClass={"form-control pt-3 mt-2 date-picker d-flex flex-row-reverse"}
                            iType={"date"}
                            iPlaceHolder={"select date"}
                        ></Input>
                    </div>
                </div>
                <h3 className="c-greeng fs-4 my-4">Tooltips & Popovers</h3>
                <div className='row '>
                    <div className='col-lg-6'>
                        <div className='mb-3'>
                            <small className='text-uppercase font-weight-bold'>Tooltips</small>

                            <div className="btn d-flex pt-4">

                                <DownloadBtn
                                    Class='button-example small-button c-white fw-bold fs-7 me-2'
                                    content={'On left'}

                                />

                                <DownloadBtn
                                    Class='button-example small-button c-white fw-bold fs-7 me-2'
                                    content={'On Top'}

                                />


                                <DownloadBtn
                                    Class='button-example small-button c-white fw-bold fs-7 me-2'
                                    content={'On bottom'}

                                />
                                
                                <DownloadBtn
                                    Class='button-example small-button c-white fw-bold fs-7 me-2'
                                    content={'On Right'}

                                />










                            </div>


                        </div>

                    </div>
                    <div className='col-lg-6'>
                        <div className='mb-3'>
                            <small className='text-uppercase font-weight-bold'>Popovers</small>
                            <div className="btn  d-flex pt-4">

                                <DownloadBtn
                                    Class='button-example bg-dblue small-button c-white fw-bold fs-7 me-2'
                                    content={'On left'}

                                />

                                <DownloadBtn
                                    Class='button-example bg-dblue small-button c-white fw-bold fs-7 me-2'
                                    content={'On Top'}

                                />


                                <DownloadBtn
                                    Class='button-example bg-dblue small-button c-white fw-bold fs-7 me-2'
                                    content={'On right'}

                                />
                                
                                <DownloadBtn
                                    Class='button-example bg-dblue small-button c-white fw-bold fs-7 me-2'
                                    content={'On bottom'}

                                />










                            </div>

                        </div>

                    </div>

                </div>






            </div>
        </section>


    )


}

export default Modal
import React from "react";
import DownloadBtn from "../../../Buttons/DownloadBtn";
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import Input from "../Inputs/Input";
import Forms from "../Forms/Forms";


const LoginSection = () => {
    return (
        <section className="logbg mt-5 py-5">
            <div className="container">
                <div className="row row-grid justify-content-between align-items-center">
                    <div className="col-lg-6">
                        <h2 className="text-light">
                            A beautiful Design System

                        </h2>
                        <h3 className="text-light">completed with examples</h3>
                        <p className="fs-5 text-light">The Design System comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful Bootstrap 4 Design System.</p>

                    </div>
                    <div className="col-lg-5">
                        <div className="card  mb-5">
                            <div className="cardheader d-flex flex-column text-center ">
                                <div className="text-center mt-5 mb-3">
                                    <small>Sign in with</small>

                                </div>
                                <div className="d-flex justify-content-center me-4">
                                    <DownloadBtn Class={"githubbtn"} icon={<AiFillGithub />} content={"GITHUB"} />
                                    <DownloadBtn Class={"githubbtn mx-2"} icon={<FcGoogle />} content={"GOOGLE"} />
                                </div>
                            </div>
                            <div className="cardbody d-flex flex-column justify-content-center">
                                <div className="text-center mt-5 mb-4">
                                    <small>Or sign in with credentials</small>
                                </div>
                                < div className="d-flex justify-content-center list-unstyled">
                                    <Forms Form="form" placeholder={"Email"} />
                                </div>
                                <div className="d-flex justify-content-center mt-2 mb-4  list-unstyled">
                                    <Forms Form="form" placeholder={"Password"} />
                                </div>
                                <div className="d-flex justify-content-center mt-2">
                                    <Input type={"Input"} />
                                    <p>Remember me</p>
                                </div>
                                <div className="mb-5 d-flex justify-content-center">
                                    <DownloadBtn Class="githubbtn bg-primary text-light" content={"SIGN IN"} />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default LoginSection
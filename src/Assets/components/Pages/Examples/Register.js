import React from "react";


import '../../../../Assets/css/main.css'
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiMail } from "react-icons/hi";
import { GiPadlockOpen } from "react-icons/gi";
import { GiGraduateCap } from "react-icons/gi";
import DownloadBtn from "../../Buttons/DownloadBtn";
import NormalBtn from "../../Buttons/NormalBtn";



const Register = () => {

    return (
        <div className="py-5 bg-dark-blue">
            <div className="container py-5">
                <div class="card m-auto col-lg-5 ">
                    <div class="card-body d-flex flex-column align-items-center justify-content-center">
                        <p class="card-text">Sign in with</p>
                        <div className="d-flex mb-5">
                            <DownloadBtn Class={"border rounded mx-4"} icon={<FaGithub></FaGithub>} content={"GitHub"}></DownloadBtn>
                            <DownloadBtn Class={"border rounded mx-4"} icon={<FcGoogle ></FcGoogle>} content={"Google"}></DownloadBtn>
                        </div>
                        <form className="text-gray c-gray">
                            <p className="my-5 text-center ">Or sign in with credentials</p>

                            <div className="d-flex border my-3 ">
                                <GiGraduateCap></GiGraduateCap>
                                <input type={"text"} className="border py-1 px-5" placeholder="Name"></input>
                            </div>
                            <div className="d-flex border ">
                                <HiMail ></HiMail>
                                <input type={"email"} className="border py-1 px-5" placeholder="Email"></input>
                            </div>

                            <div className="d-flex border text-gray my-3">
                                <GiPadlockOpen></GiPadlockOpen>
                                <input type={"password"} className={"border py-1 px-5"} placeholder="password"></input>

                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <div className="my-2">
                                    <input type={"checkbox"} id="Remember me"></input>
                                    <label>Remember me</label>
                                </div>
                                <NormalBtn btnClass={"bg-violet button-example border-none c-white me-2 sml-btn    fs-6 "} btnContent={"Register"} btnType={"submit"} ></NormalBtn>
                            </div>



                        </form>
                    </div>
                </div>
            </div>
        </div>
    )


}


export default Register;
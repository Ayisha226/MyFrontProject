import React from "react";
import '../../../../Assets/css/main.css'
// import ButtonLink from "./Buttons/ButtonLink";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiMail } from "react-icons/hi";
import { GiPadlockOpen } from "react-icons/gi";
// import { useNavigate } from "react-router-dom";
// import { getFullName } from "../layouts/Profile/UserInfo";
// import NormalBtn from "../../components/Buttons/NormalBtn";
// import { BsLockFill} from "react-icons/gi";
import DownloadBtn from "../../Buttons/DownloadBtn";
import NormalBtn from "../../Buttons/NormalBtn";



function Login() {

  return (
    <div className="py-5 bg-dblue">
      <div className="container py-5">
        <div class="cardlogin m-auto col-lg-5 ">
          <div class="card-body bg-white d-flex flex-column align-items-center justify-content-center">
            <p class="card-text">Sign in with</p>
            <div className="d-flex mb-5">
              <DownloadBtn Class={"border rounded mx-4"} icon={<FaGithub></FaGithub>} content={"GitHub"}></DownloadBtn>
              <DownloadBtn Class={"border rounded mx-4"} icon={<FcGoogle ></FcGoogle>} content={"Google"}></DownloadBtn>
            </div>
            <form className="text-gray c-grey">
              <p className="my-5 text-center ">Or sign in with credentials</p>
              <div className="d-flex border ">
                <HiMail className="" ></HiMail>
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
                <NormalBtn btnClass={"bg-violett button-example border-none c-white me-2 sml-btn    fs-6 "} btnContent={"Sign in"} btnType={"submit"} ></NormalBtn>
              </div>



            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
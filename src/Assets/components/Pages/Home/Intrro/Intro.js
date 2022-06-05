import React from 'react'
import '../../../../../Assets/css/main.css'
import DownloadBtn from '../../../Buttons/DownloadBtn'
import Logo from '../../../Header/NavZone/Logo'
import{AiFillGithub} from 'react-icons/ai'
import {BsFillCloudArrowDownFill} from 'react-icons/bs'
import TimLogo from '../../../../Images/creativetim-white-slim.webp'
import ImgLogo from '../../../../Images/argon-white.webp'

function Intro() {
  return (
    <div className='main full-screen bg-content-gradient py-6'>
    <div className='container '>
       <div className='row align-items-center  justify-content-center '>
       <div className='col-lg-6 text-center '>
       <Logo Link={ImgLogo} Class={"main-logo"} />
       <p className='main-text text-white'> A beautiful Design System for Bootstrap 4 and Angular 7. It's Free and Open Source. </p>
        <div className='main-dwnld-btns mt-5'>
        <ul className='d-flex justify-content-center text-center align-items-center '>
        <DownloadBtn Class={'main-dwnld-btn-1 text-dark bg-light mx-2  py-3 px-4 fs-8 '} icon={<BsFillCloudArrowDownFill/>} content={'Download Angular'} />

        <DownloadBtn Class={'main-dwnld-btn-2 d-flex text-white mx-2  py-3 px-4 fs-8  bg-dark '} icon={<AiFillGithub  className='mx-1 ' />} content={<div ><span className='c-orange mx-1 '>Star US</span> <span>On GitHub</span></div>}  />

        </ul>
        <div className='d-flex justify-content-center text-white text-center align-items-center w-75 m-auto  mt-5 mb-5   '>
        <p>*proudly coded by </p>
            <Logo Link={TimLogo} Class={"tim-logo w-30 pb-3  "}/>
        </div>

        </div>
       </div>

       </div>



    </div>
</div>
)
}

  
export default Intro
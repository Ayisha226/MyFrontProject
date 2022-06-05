import React from 'react';
import '../../../css/main.css'
import SocialMedia from './SocialMedia';
import DownloadBtn from '../../Buttons/DownloadBtn';
import {FiInstagram} from  'react-icons/fi';
import { FaFacebookSquare } from "react-icons/fa";
import{FaTwitterSquare } from 'react-icons/fa'
import{AiFillGithub  } from 'react-icons/ai'
import {BsFillCloudArrowDownFill} from 'react-icons/bs'



const NavRight = () =>{

    return(
        <div >
            <ul className='social-media d-flex c-white '>
               <SocialMedia link={"https://www.facebook.com/"} content={<FaFacebookSquare />} />

               <SocialMedia link={"https://www.instagram.com/"} content={<FiInstagram />} />

               <SocialMedia link={"https://twitter.com/"} content={<FaTwitterSquare />} />

               <SocialMedia link={"https://github.com/"} content={<AiFillGithub />} />

               <DownloadBtn Class={"dwnld-btn bg-white ms-4 px-4 py-3"} icon={<BsFillCloudArrowDownFill/>} content={'Download'}/>
                

            </ul>
        </div>

    )


}

export default NavRight
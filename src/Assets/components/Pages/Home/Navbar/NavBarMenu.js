import React from 'react';
import Menu from '../Menu/Menu';
import '../../../../../Assets/css/main.css'
import {FaHeart} from "react-icons/fa";
import {BsFillMegaphoneFill} from "react-icons/bs"
import{AiTwotoneSetting}from "react-icons/ai"
import{IoMdPlanet} from 'react-icons/io'
import {FaFacebookSquare} from "react-icons/fa";
import{BsTwitter} from "react-icons/bs"
import{FaGooglePlusG} from "react-icons/fa"
import{BsInstagram} from "react-icons/bs"
import{BsPinterest} from "react-icons/bs"





const NavBarMenu =()=>{
    return(
        <section>
            <div className='container '>
                <h3 className='text font-weight-bold c-greeng ft-5 '>Menu</h3>
                <h6 className='fw-normal my-3 text-uppercase'>With text</h6>
                <div className='row'>
                    <div className='col-6'>
                        <Menu

                        menu={"MENU"}
                        Class={"justify-content-around radius c-white bg-prim"}
                        content1={'Discover'}
                        content2={'Profile'}
                        content3={'Settings'}
                        padding={'py-2'}
 

                        />
                       

                    </div>
                    <div className='col-6'>
                            <Menu

                              menu={"MENU"}
                             Class={"justify-content-around radius c-white bg-green"}
                             content1={<FaHeart/>}
                             content2={<BsFillMegaphoneFill/>}
                             content3={<AiTwotoneSetting/>}
                             
                             padding={'py-2'}



                             />

                        </div>

                     
                        
                </div>




            <h3 className='fs-2 my-5 fw-normal '>Navbars </h3>
            </div>
                  
               <div className='bg-dblue'>  
                <div className='my-5  container'>
                    <Menu
                    menu={"DEFAULT COLOR"}
                    Class={"justify-content-between c-white bg-dblue"}
                    content1={<FaHeart/>}
                    content2={<BsFillMegaphoneFill/>}
                    content3={<AiTwotoneSetting/>}
                    padding = {"py-2"}

                
                    />

                </div>
                </div>


               <div className='bg-prim'>
                <div className='my-5 container '>
                    <Menu
                    menu={"PRIMARY COLOR"}
                    Class={"justify-content-between c-white bg-prim"}
                    content1={"Discover"}
                    content2={"Profile"}
                    content3={"Settings"}
                    padding = {"py-2 "}

                    
                    />

                </div>
                </div>
                <div className='bg-green'>
                <div className='my-5 container '>
                    <Menu
                    menu={"SUCCESS COLOR"}
                    Class={"justify-content-between c-white bg-green"}
                    content1={<FaHeart/>}
                    content2={<IoMdPlanet/>}
                    content3={<AiTwotoneSetting/>}
                    padding = {"py-2"}

                    
                    />

                </div>
                </div>
                <div className='pnk'>
                <div className='my-5 container '>
                    <Menu
                    menu={"DANGER COLOR"}
                    Class={"justify-content-between c-white pnk"}
                    content1={<FaFacebookSquare/>}
                    content2={<BsTwitter/>}
                    content3={<FaGooglePlusG/>}
                    content4={<BsInstagram/>}
                    padding = {"py-2"}

                    
                    />

                </div>
                </div>
                <div className='orng'>
                <div className='my-5 container '>
                    <Menu
                    menu={"WARNING COLOR"}
                    Class={"justify-content-between c-white orng"}
                    content1={<FaFacebookSquare/>}
                    content2={<BsTwitter/>}
                    content3={<BsPinterest/>}
                    padding = {"py-2"}

                    
                    />

                </div>
                </div>
                <div className='l-blue'>
                <div className='my-5 container '>
                    <Menu
                    menu={"INFO COLOR"}
                    Class={"justify-content-between c-white l-blue"}
                    content1={<FaFacebookSquare/>}
                    content2={<BsTwitter/>}
                    content3={<BsInstagram/>}
                    padding = {"py-2"}

                    
                    />

                </div>
                </div>
                <section>
                   <div className='container '>
                      <h3 className='h4 c-greeng font-weight-bold mb-2'>Tabs</h3>
                      <div className='row '>
                          <div className='col-lg-6'>
                              <div className='mb-3'>
                                  <small className='text-uppercase font-weight-bold'>With Icons</small>

                               </div>

                           </div>
                           <div className='col-lg-6'>
                              <div className='mb-3'>
                                  <small className='text-uppercase font-weight-bold'>With text</small>

                               </div>

                           </div>

                      </div>

                   </div>



                </section>

































                


                
        </section>
    )
}

export default NavBarMenu
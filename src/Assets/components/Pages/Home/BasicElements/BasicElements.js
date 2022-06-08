import React from 'react'
import '../../../../../Assets/css/main.css'
import DownloadBtn from '../../../Buttons/DownloadBtn';
import {FiShoppingBag} from  'react-icons/fi';

function BasicElements() {
  return (
    <div className='full-screen-basic'>
       <section className='section pb-4' >
       <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-12'>
               <h2 className='mb-5'>
                 <span className='text fw-normal'>Basic Elements</span>
               </h2>
                <h3 className='text font-weight-bold c-greeng ft-5 '>Buttons</h3>
              </div>
                <div className='btn d-flex pt-5 '>
                  <DownloadBtn 
                  Class='button-example c-white fw-bold px-3 py-2 me-2'
                  content={'Button'}
              
                   />
                

                  <DownloadBtn 
                  Class='button-example c-white fw-bold px-4 py-2 me-2'
                  icon={<FiShoppingBag></FiShoppingBag>}
                  content={'With icon'}
              
                   />
                   
                   <DownloadBtn 
                  Class='button-example c-white fw-bold px-3 py-2 '
                  icon={<FiShoppingBag></FiShoppingBag>}
                 
              
                   />
                   
                </div>
                <div className='text pt-5 text-uppercase fw-normal '>
                 <small>Pick your size</small>
                </div>
                <div className='btn d-flex align-items-center pt-4'>
                 <DownloadBtn 
                  Class='button-example small-button c-white fw-bold fs-7 me-2'
                  content={'Small'}
                  
                   />

                  <DownloadBtn 
                  Class='button-example c-white fw-bold px-3 py-2 me-2'
                  content={'Regular'}
              
                   />
                  <DownloadBtn 
                  Class='button-example c-white fw-bold px-3 py-3 me-2'
                  content={'Large Button'}
              
                   />
                
                </div>
                <div className='text pt-4 text-uppercase fw-normal '>
                 <small>Pick your color</small>
                </div>
                <div  className='btn d-flex pt-4'>
                
                 <DownloadBtn 
                  Class='button-example c-white fw-bold px-3 py-2 me-2'
                  content={'Primary'}
              
                   />

                 <DownloadBtn 
                  Class='button-example l-blue c-white fw-bold px-3 py-2 me-2'
                  content={'Info'}
              
                   />

                 <DownloadBtn 
                  Class='button-example l-green c-white fw-bold px-3 py-2 me-2'
                  content={'Success'}
              
                   />

                  <DownloadBtn 
                  Class='button-example orng c-white fw-bold px-3 py-2 me-2'
                  content={'Warning'}
              
                   />
                   
                   <DownloadBtn 
                  Class='button-example pnk c-white fw-bold px-3 py-2 me-2'
                  content={'danger'}
              
                   />

                  <DownloadBtn 
                  Class='button-example hover bc-white fw-bold px-3 py-2 me-2'
                  content={'Neutral'}
              
                   />

                </div>
                <div className='text pt-5 text-uppercase fw-normal '>
                 <small>Outline</small>
                </div>
                <div  className='btn d-flex pt-4'>
                <DownloadBtn 
                  Class='button-example-color c-violet  fw-bold px-3 py-2 me-2'
                  content={'Outline-Primary'}
              
                   />
                   <DownloadBtn 
                  Class='button-example-color c-blue  fw-bold px-3 py-2 me-2'
                  content={'Outline-Info'}
              
                   />
                    <DownloadBtn 
                  Class='button-example-color c-green  fw-bold px-3 py-2 me-2'
                  content={'Outline-Success'}
              
                   />
                      <DownloadBtn 
                  Class='button-example-color c-orng  fw-bold px-3 py-2 me-2'
                  content={'Outline-Warning'}
              
                   />
                      <DownloadBtn 
                  Class='button-example-color c-pnk  fw-bold px-3 py-2 me-2'
                  content={'Outline-Danger'}
              
                   />

              
                </div>
                <div className='text pt-5 text-uppercase fw-normal '>
                 <small>Links</small>
                </div>
                <div  className='btn d-flex pt-4'>

                <DownloadBtn 
                  Class='button-example-color c-navy fw-bold px-3 py-2 me-2'
                  content={'Default'}
              
                   />
                  
                  
                   <DownloadBtn 
                  Class='button-example-color c-violett fw-bold px-3 py-2 me-2'
                  content={'Primary'}
              
                   />
                   
                   <DownloadBtn 
                  Class='button-example-color cl-blue fw-bold px-3 py-2 me-2'
                  content={'Info'}
              
                   />
                      <DownloadBtn 
                  Class='button-example-color cl-green fw-bold px-3 py-2 me-2'
                  content={'Success'}
              
                   />
                    <DownloadBtn 
                  Class='button-example-color cl-orng fw-bold px-3 py-2 me-2'
                  content={'Warning'}
              
                   />

                 <DownloadBtn 
                  Class='button-example-color cl-pnk fw-bold px-3 py-2 me-2'
                  content={'Danger'}
              
                   />
                   


                  


                </div>
               
              
               
                
                



            </div>

        </div>
       </section>

    </div>
  )
}

export default BasicElements
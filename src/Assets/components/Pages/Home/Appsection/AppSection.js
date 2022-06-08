import React from 'react'
import '../../../../../Assets/css/main.css'
import DownloadBtn from '../../../Buttons/DownloadBtn'
import photo1 from '../../../../Images/bootstrap.jpg'
import photo2 from '../../../../Images/angular.jpg'
import photo3 from '../../../../Images/vue.jpg'
import photo4 from '../../../../Images/sketch.jpg'
import photo5 from '../../../../Images/ps.jpg'
import photo6 from '../../../../Images/react.jpg'



function Appsection() {
  return (
    <section className='App'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8 text-center pt-5'>
            <h2 className='icon c-dblue'>Do you love this awesome</h2>
            <h2 className='c-greeng fw-light'>Design System for Angular?</h2>
            <p className='lead'>Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in Angular. Start a new project or give an old Angular project a new look!</p>
            <div className='btn-wrapper mt-5 d-flex justify-content-center align-items-center'>
              <DownloadBtn
                Class='button-example  c-white px-3 py-2 me-2'
                content={'Download Angular'}

              />
            
            </div>
            <h2 className='icon pt-5 c-dblue'>Available on these technologies</h2>
            <div className='col-lg-2 pt-5 col-4 d-inline-block'>
                <img src={photo1} width="80px"></img>
            </div>
            <div className='col-lg-2 col-4 d-inline-block'>
                <img src={photo2} width="80px"></img>
            </div>
            <div className='col-lg-2 col-4 d-inline-block'>
                <img src={photo3} width="80px"></img>
            </div>
            <div className='col-lg-2 col-4 d-inline-block'>
                <img src={photo4} width="80px"></img>
            </div>
            <div className='col-lg-2 col-4 d-inline-block'>
                <img src={photo5} width="80px"></img>
            </div>
            <div className='col-lg-2 col-4 d-inline-block'>
                <img src={photo6} width="80px"></img>
            </div>

          </div>

        </div>

        

      </div>

    </section>
    
    
  )
}

export default Appsection

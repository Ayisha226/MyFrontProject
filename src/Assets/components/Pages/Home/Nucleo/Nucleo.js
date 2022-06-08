import React from 'react'
import '../../../../../Assets/css/main.css'
import DownloadBtn from '../../../Buttons/DownloadBtn'


function Nucleo() {
  return (
    <section className='Nucleo'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8 text-center pt-5'>
            <h2 className='icon c-dblue'>Nucleo Icons</h2>
            <p className='lead'>The official package contains over 21.000 icons which are looking great in combination with Argon Design System. Make sure you check all of them and use those that you like the most.</p>
            <div className='btn-wrapper mt-5 d-flex justify-content-center align-items-center'>
              <DownloadBtn
                Class='button-example  c-white px-2 py-2 me-2'
                content={'View demo icons'}

              />
               <DownloadBtn
                Class='button-example c-white bg-dblue px-3 py-2 me-2'
                content={'View all icons'}

              />





            </div>
          </div>

        </div>

        

      </div>

    </section>
    
    
  )
}

export default Nucleo

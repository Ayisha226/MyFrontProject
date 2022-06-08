import React from 'react'
import '../../../Assets/css/main.css'


function Alerts() {
  return (
    <section>
      <div className='container'>
        <h3 className='fs-2 my-5 fw-normal '>Alerts </h3>
        <div className='row'>

          <div class="alert bg-green c-white " role="alert">
            <strong>Primary!</strong> This is a primary alert—check it out!
          </div>

          <div class="alert l-blue c-white" role="alert">
            <strong>Info!</strong> This is a info alert—check it out!
          </div>

          <div class="alert orng c-white" role="alert">
            <strong>Warning!</strong> This is a warning alert—check it out!
          </div>

          <div class="alert pnk c-white" role="alert">
            <strong>Danger!</strong> This is a danger alert—check it out!
            
          </div>

         

        </div>








      </div>







    </section>
  )
}

export default Alerts
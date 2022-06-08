import React from 'react'
import '../../../../../Assets/css/main.css'
import Progress from './Progress'


function ProgressBar() {
  return (
    <section id='progress'> 
        <div className='container py-4'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='mb-3'>
                    <h4 className='h4 c-greeng mb-2'>Progress Bars</h4>
                    </div>
                    <Progress percent={'40%'} progressClass={'bg-dark w-30'}></Progress>
                    <Progress percent={"60%"} progressClass={"bg-violett w-60"}></Progress>

                </div>
    
                <div className='col-lg-6'>
                  <div className='mb-3'>
                  <h4 className='h4 c-greeng mb-2'>Pagination</h4>

                  </div>

                </div>








            </div>

        </div>


    </section>
  )
}

export default ProgressBar
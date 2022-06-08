import React from 'react'

const Progress=({ percent, progressClass }) =>{
    return(
        <div className='d-flex flex-column'>
        <div className='d-flex justify-content-between'>
        <div className='py-1 my-2 c-violett task-progress w-30 text-center rounded-pill '><small className=''>Task Completed</small>
            
                
            </div>
            <div><p>{percent}</p></div>
        </div>
            <div className={progressClass='progress rounded-pill'}>

            </div>

        </div>
    )
}

export default Progress
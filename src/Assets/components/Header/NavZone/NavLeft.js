import React from 'react';
import '../../../css/main.css'



const NavLeft = () =>{

    return(
        <div>
              <ul className='drop-downs d-flex  fs-6'>
                <li >
                   <a  className='drop-down' href='../../../../public/index.html'>
                       Components
                   </a>
                </li>
                <li >
                <a className='drop-down' href='../../../../public/index.html'>
                    Examples
                </a>
                </li>
            </ul>
        </div>

    )


}

export default NavLeft
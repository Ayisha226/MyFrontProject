import React from 'react';
import '../../../css/main.css'
import NavLeft from './NavLeft';
import NavRight from './NavRight';
const NavZone = () => {

  return (
      <div className='col-10 d-flex align-item-center justify-content-between'>
        <NavLeft></NavLeft>
         <NavRight></NavRight>
      </div>

  )
}

export default NavZone
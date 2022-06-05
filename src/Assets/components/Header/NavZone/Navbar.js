import React from 'react';
import '../../../css/main.css'
import Logo from './Logo';
import NavZone from './NavZone';
import ImgLogo from  '../../../Images/argon-white.webp';



const Navbar = () => {
  return (
      <div className='container  d-flex justify-content-center align-item-center pt-3 pb-3'>
          <Logo Link={ImgLogo} Class={"image"} />
          <NavZone/>
      </div>

  )
}
 export default Navbar


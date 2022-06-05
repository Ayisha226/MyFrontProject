import React from 'react';
import '../../../css/main.css'



const Logo = ({Class , Link}) => {
    return (
        <a  href='/front-app/public/index.html' className={Class}>
        <img src={Link}></img>
        </a>

    )
  }

  export default Logo
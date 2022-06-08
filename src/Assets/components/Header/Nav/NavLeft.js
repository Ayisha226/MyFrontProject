import React from 'react';
import '../../../../Assets/css/main.css'
import { Link } from 'react-router-dom';




const NavLeft = () => {

    return (
        <div>
            <ul className='drop-downs d-flex align-items-center  fs-6 '>
                <li >
                    <a role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" className='drop-down' href='../../../../public/index.html '>
                        Components
                    </a>
                </li>
                <li >
                    <a class="nav-link dropdown-toggle text-white  " href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark bg-light" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><Link class="dropdown-item" Link to="/landing">Landing</Link></li>
                        <li><Link class="dropdown-item" Link to="/profile">Profile</Link></li>
                        <li><Link class="dropdown-item" Link to="/login">Login</Link></li>
                        <li><Link class="dropdown-item" Link to="/register">Register</Link></li>
                    </ul>
                </li>
            </ul>
        </div>

    )


}

export default NavLeft
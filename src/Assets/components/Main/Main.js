
import React from 'react';
import '../../../Assets/css/main.css'
import Intro from '../Pages/Home/Intrro/Intro';
import BasicElements from '../Pages/Home/BasicElements/BasicElements';
import Inputs from '../Pages/Home/Inputs/Inputs';
import Checkbox from '../Pages/Home/Checkbox/Checkbox';
import Menu from '../Pages/Home/Menu/Menu';
import NavBarMenu from '../Pages/Home/Navbar/NavBarMenu';
import Tabs from '../Pages/Home/Tabs/Tabs'
import ProgressBar from '../Pages/Home/ProgressBar/ProgressBar';

import Alerts from '../Alerts/Alerts';
import Typography from '../Pages/Home/Typography/Font';
import Images from '../Images/Images';
import Modal from '../Pages/Home/Modal/Modal';
import Shape  from '../../components/Pages/Home/Shape/Shape';
import Nucleo from '../Pages/Home/Nucleo/Nucleo';
import Appsection from '../Pages/Home/Appsection/AppSection';
import LoginSection from '../Pages/Home/LoginSection/LoginSection';







const Main = () =>{


    return(
     <div>
          <Intro/>
          <BasicElements/>
          <Inputs hContent={"INPUTS "} pContent={"FORM CONTROLS"}    />
          <Inputs Class={"b-grey"} pContent={"FORM CONTROLS(ALTERNATIVE)"}     />
          <Checkbox/>
          <Menu/>
          <NavBarMenu/>
          <Tabs/>
          <ProgressBar/>
          <Alerts/>
          <Typography/>
          <Images/>
          <Modal/>
          <Shape/>
          <Nucleo/>
          <LoginSection/>
          <Appsection/>
          
          
     </div>
     
    )
}

export default Main
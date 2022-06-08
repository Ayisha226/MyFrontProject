import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Assets/components/Header/Header";
import Footer from "./Assets/components/Footer/Footer";

const Layout=() =>{
    return(
       <>
          <Header/>


          <main><Outlet/></main>



          <Footer/>


    
         </>
    )
}


export default Layout
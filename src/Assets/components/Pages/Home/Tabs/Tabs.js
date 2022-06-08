import {React,useState} from "react";
import '../../../../css/main.css'



const Tabs = () =>{
    const [index,setIndex] =useState(0);
    return(
         <div className="container d-flex ">
         <div className="col-lg-6 ">
         <div className="tab col-lg-4 pb-5"> 
         

         <div className="content d-flex ">
             <button className="TabsHeader me-3" style={{
                 color: index===0?'white':'',
                 backgroundColor:index ===0?'#5e72e4':'',

             }} onClick={()=>{setIndex(0)}}>
                 Home
              
             </button>
             <button className="TabsHeader me-3" style={{
                 color: index===1?'white':'',
                 backgroundColor:index ===1?'#5e72e4':'',

             }} onClick={()=>{setIndex(1)}}>
                 Profile
              
             </button>
             <button className="TabsHeader " style={{
                 color: index===2?'white':'',
                 backgroundColor:index ===2?'#5e72e4':'',

             }} onClick={()=>{setIndex(2)}}>
                 Messages
              
             </button>

         </div>
         <div className="TabsContent mt-3 " hidden={index !==0}>
             <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.   </p>
             <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
         </div>
         <div className="TabsContent mt-3" hidden={index !==1}>
            <p>Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
         </div>
         <div className="TabsContent mt-3" hidden={index !==2}>
           <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
         </div>


        

        </div>
        

         </div>
         <div className="col-lg-6 ">
         <div className="tab col-lg-4 pb-5"> 
         

         <div className="content d-flex ">
             <button className="TabsHeader me-3" style={{
                 color: index===0?'white':'',
                 backgroundColor:index ===0?'#5e72e4':'',

             }} onClick={()=>{setIndex(0)}}>
                 Home
              
             </button>
             <button className="TabsHeader me-3" style={{
                 color: index===1?'white':'',
                 backgroundColor:index ===1?'#5e72e4':'',

             }} onClick={()=>{setIndex(1)}}>
                 Profile
              
             </button>
             <button className="TabsHeader " style={{
                 color: index===2?'white':'',
                 backgroundColor:index ===2?'#5e72e4':'',

             }} onClick={()=>{setIndex(2)}}>
                 Messages
              
             </button>

         </div>
         <div className="TabsContent mt-3 " hidden={index !==0}>
             <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.   </p>
             <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
         </div>
         <div className="TabsContent mt-3" hidden={index !==1}>
            <p>Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
         </div>
         <div className="TabsContent mt-3" hidden={index !==2}>
           <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
         </div>


        

        </div>
           
         </div>

        </div>
    )
}

export default Tabs
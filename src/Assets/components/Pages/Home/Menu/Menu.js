import React from 'react'
import '../../../../../Assets/css/main.css'

const Menu=({Class,menu,content1,content2,content3, content4,padding})=>{
    return(

     <div className={Class+" menu-content d-flex align-items-center pt-4 "+padding}>
         <p>{menu}</p>
         <div className='d-flex'>
             <p className={padding+" px-3 menu-content"}>{content1}</p>
             <p className={padding+" px-3 menu-content"}>{content2}</p>
             <p className={padding+" px-3 menu-content"}>{content3}</p>
             <p className={padding+" px-3 menu-content"}>{content4}</p>


         </div>

     </div>



    )
}
export default Menu
import React from 'react';
import '../../../css/main.css'




const SocialMedia = ({link, content}) =>{

    return(

            <li className='social-media'>
                <a className='c-white ms-4' href={link}>{content}</a>
            </li>


    )


}

export default SocialMedia
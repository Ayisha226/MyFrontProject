import React from "react";
import '../../../../../Assets/css/main.css'
import Text from './Text';



const Font=()=>{
    return(
        <section id="typography">
            <div className="container">
            <div className="" >
                 <h2 className="my-5 fw-normal">Typography</h2>
                 <h3 className="c-greeng fs-4 my-5">Progress Bar</h3>
                 <Text class1="heading c-gray" content1={"HEADING 1"} class2="fs-1 c-dblue" content2={"Argon Design System "}/>
                 <Text class1="heading c-gray" content1={"HEADING 2"} class2="fs-2 c-dblue" content2={"Argon Design System "}/>
                 <Text class1="heading c-gray" content1={"HEADING 3"} class2="fs-3 c-dblue" content2={"Argon Design System "}/>
                 <Text class1="heading c-gray" content1={"HEADING 4"} class2="fs-4 c-dblue" content2={"Argon Design System "}/>
                 <Text class1="heading c-gray" content1={"HEADING 5"} class2="fs-5 c-dblue" content2={"Argon Design System "}/>
                 <Text class1="heading c-gray" content1={"HEADING 6"} class2="fs-6 c-dblue" content2={"Argon Design System "}/>
                 
                 
                 <h3 className="c-greeng fs-4 my-5">Display Title</h3>
                 <Text class1="heading fw-normal c-gray" content1={"DISPLAY 1"} class2=" display-title-1 c-dblue" content2={"Argon Design System"}/>
                 <Text class1="heading fw-normal c-gray" content1={"DISPLAY 2"} class2=" display-title-2 c-dblue" content2={"Argon Design System"}/>
                 <Text class1="heading fw-normal c-gray" content1={"DISPLAY 3"} class2=" display-title-3 c-dblue" content2={"Argon Design System"}/>
                 <Text class1="heading fw-normal c-gray" content1={"DISPLAY 4"} class2=" display-title-4 c-dblue" content2={"Argon Design System"}/>
                  
                 <h3 className="c-greeng fs-4 my-5">Specialized title</h3>
                 <Text class1="heading c-gray" content1={"HEADING "} class2=" c-dblue text-uppercase" content2={"Argon Design System "}/>
                 <Text class1="heading fw-normal c-gray" content1={"HEADING TITLE"} class2="  display-title-4  cl-orng text-uppercase" content2={"Argon Design System"}/>
                 <Text class2=" display-title-3 text-uppercase  c-dblue" content2={"Header with small subtitle"}/>
                 <Text class1="heading fw-normal c-gray" content1={"HEADING SEACTION"} class2=" fw-light text-uppercase  c-dblue" content2={"According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum."}/>


                 <h3 className="c-greeng fs-4 my-5">Paragraphs</h3>
                 <Text class1="heading c-gray" content1={"PARAGRAPH"} class2=" fw-light c-dblue" content2={"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. "}/>
                 <Text class1="heading c-gray" content1={"LEAD TEXT"} class2=" fw-light fs-5  c-dblue my-5" content2={"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. "}/>
                 <Text class1="heading c-gray" content1={"QUOTE"} class2="  c-dblue" content2={<span className="c-gray">
                     <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
                     <p>-Someone famous in Source Title</p>
                 </span>}/>
                 <Text class1="heading c-gray" content1={"MUTED TEXT"} class2="  c-gray my-3" content2={"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... "}/>
                 <Text class1="heading c-gray" content1={"PRIMARY TEXT"} class2="  c-violett my-3" content2={"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."}/>
                 <Text class1="heading c-gray" content1={"INFO TEXT"} class2="  c-dblue my-3" content2={"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... "}/>
                 <Text class1="heading c-gray" content1={"SUCCESS TEXT"} class2="  c-greeng  my-3" content2={"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... "}/>
                 <Text class1="heading c-gray" content1={"WARNING TEXT"} class2="  cl-orng my-3" content2={"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... "}/>
                 <Text class1="heading c-gray" content1={"DANGER TEXT"} class2="  text-danger my-3" content2={"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... "}/>
                  



                 
                 </div>
                </div>
        </section>
    )
}
export default Font;
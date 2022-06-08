import React from 'react'
import '../../../../../Assets/css/main.css'
import Input from '../Inputs/Input'


const Checkbox= ()=> {
  return (
    <section id='Checkbox' className='mb-5'>
        <div className='container'>
            <div className='row'>


                <div className='d-flex flex-column col-lg-3 col-sm-6'>
                 <h6 className='pt-5 pb-2'>CHECKBOXES</h6>
                 <Input iClass={"checkbox"} iType={"checkbox"} label={"Unchecked"}></Input>
                 <Input iClass={"checkbox"} iType={"checkbox"} label={"Checked"}></Input>
                 <Input iClass={"checkbox"} iType={"checkbox"} iDisabled={"true"} label={" Disabled unchecked"}></Input>
                 <Input iClass={"checkbox"} iType={"checkbox"} iDisabled={"true"} label={" Disabled checked"}></Input>
                 
                </div>
                <div className='col-lg-3 col-sm-6'>
                    <h6 className='pt-5 pb-2'>RADIOS</h6>
                    <Input iClass={"radios"} iType={"radio"} label={"Unchecked"}></Input>
                    <Input iClass={"radios"} iType={"radio"} label={"Unchecked"}></Input>
                    <Input iClass={"radio"} iType={"radio"} iDisabled={"true"} label={" Disabled unchecked"}></Input>
                    <Input iClass={"radio"} iType={"radio"} iDisabled={"true"} label={" Disabled checkbox"}></Input>
                  
                </div>
                <div className='col-lg-3 col-sm-6'>
                    <h6 className='pt-5 pb-2 '>TOGGLE BUTTONS</h6>
                    <Input iClass={"checkbox form-check-input"} iType={"checkbox"} role={"switch"} divClass={"form-check form-switch my-3"}></Input>
                    <Input iClass={"checkbox form-check-input"} iType={"checkbox"} role={"switch"} divClass={"form-check form-switch my-3"}></Input>



                </div>
                <div className='col-lg-3 col-sm-6'>
                    <h6 className='pt-5 pb-2 '>SLIDERS</h6>
                    <Input iClass={"checkbox my-3"} iType={"range"}></Input>
                    <Input iClass={"checkbox my-3"} iType={"range"}></Input>


                </div>




            </div>

        </div>





    </section>
  )
}

export default Checkbox

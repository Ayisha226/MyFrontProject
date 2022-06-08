import React from 'react'
import '../../../../../Assets/css/main.css'
import Input from './Input'


function Inputs({Class , hContent , pContent}) {
  return (
     <section id='Inputs' className={Class}>
      <div className={"container inputs"}>
      <h3 className='text font-weight-bold c-greeng pt-5 '>{hContent}</h3>
      <small className='smal pt-4 text-uppercase fw-normal '>{pContent}</small>
      
      

      <div className='row '>
       <div className='col-lg-4  col-sm-6 pb-3 '>
        <Input iClass={'my-4 form-control'}  iDisabled={false} iPlaceholder={'Regular'}    > </Input>
        <Input iClass={' form-control'}  iDisabled={false} iPlaceholder={'Search'}    > </Input>

       </div>
       <div className='col-lg-4 d- col-sm-6 pb-3 '>
        <Input iClass={'my-4 form-control  '}  iDisabled={true} iPlaceholder={'Regular'}    > </Input>
        <Input iClass={' form-control'}  iDisabled={false} iPlaceholder={'Birthday'}    > </Input>

       </div>
       <div className='col-lg-4  col-sm-6 pb-3 '>
        <Input iClass={'my-4 form-control border border-danger'}  iDisabled={false} iPlaceholder={'Success'}    > </Input>
        <Input iClass={' form-control   border border-success'}  iDisabled={false} iPlaceholder={'Error Input'}    > </Input>

       </div>
       </div>

      
      </div>

    

     </section>

     

     



  )
}

export default Inputs
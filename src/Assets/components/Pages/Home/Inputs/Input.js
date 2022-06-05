import React from 'react'
import '../../../../../Assets/css/main.css'

const Input=({iClass,iDisabled,iPlaceholder,label,iType,id,value,onChange,role})=>{
  return (
    <div class='form-group'>
    <input
    class={iClass}
    Labe disabled={iDisabled}
    placeholder={iPlaceholder}
    type={iType}
    id={id}
    checked={value}
    onChange={onChange}
    role={role}

    
    />

    <label className='mx-2'htmlFor={id}>{label}</label>
    </div>
    
  );
};

export default Input

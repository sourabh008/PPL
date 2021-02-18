import React from "react"
import "./form.css"
const FormInput=({ 
    name,
    label,
    type,
    placeholder,
onchange,lable})=>{
  
    return (
        <React.Fragment className="form">
          <label htmlFor={name}>{label}</label>
          <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onchange}
          />
        </React.Fragment>
      )
    }
    export default FormInput;
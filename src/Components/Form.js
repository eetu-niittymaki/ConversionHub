import React from "react"
import "./UnitForm.scss"

const Form = ({amount, name, title, placeholder, handleChange}) => {
    return (
        <form onSubmit={e =>  e.preventDefault()}>
            <input type="number" 
                value={amount} 
                id={name}
                name={name}
                placeHolder={placeholder}
                onChange={handleChange}
                style={{minHeight:"5vh", marginBottom:"10%"}}/>
            <label for={name} className="formLabel">{title}</label>
        </form>
    )
}

export default Form
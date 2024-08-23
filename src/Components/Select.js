import React from "react"
import "../App.scss"

const Select = ({type, firstSelection, lastSelection,  units, amount, handleChange, output,}) => {
    if (type === true) {
        return (
            <select name="firstSelection" 
                id="firstSelection"
                value={firstSelection}
                className="select"
                style={{marginRight: "5vh", minWidth: "15vw", maxWidth: "30vw"}}
                onChange={handleChange}>
                    {units && Object.keys(units).map((unit, index) => (
                        <option key={index} value={unit}>
                            {amount ? (unit === firstSelection ? amount : "") : ""} {unit} 
                        </option>
                    ))}
            </select>
        )
    } else {
        return (
            <select name="lastSelection" 
                id="lastSelection"
                value={lastSelection}
                className="select"
                style={{marginLeft: "5vh", minWidth: "15vw", maxWidth: "30vw"}}
                onChange={handleChange}>
                    {units && Object.keys(units).map((unit, index) => (
                        <option key={index} value={unit}>
                            {amount ? 
                                    output === false ? (amount * (units[firstSelection] / units[unit])) 
                                                     : (amount * (units[unit] / units[firstSelection]))
                                    : ""} {unit}
                        </option>
                    ))}
            </select>
        )
    }
    
}

export default Select
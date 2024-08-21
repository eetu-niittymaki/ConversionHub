import React from "react"
import "./UnitForm.scss"

const Select = ({type, lastSelection, firstSelection, output, amount, units, handleChange}) => {
    if (type === "first") {
        return (
            <div>
                 <select name="firstSelection" 
                            id="firstSelection"
                            value={firstSelection}
                            className="select"
                            style={{marginRight: "5vh", maxWidth: "15vh"}}
                            onChange={handleChange}>
                                {units && Object.keys(units).map((unit, index) => (
                                    <option key={index} value={unit}>
                                        {amount ? (unit === firstSelection ? amount : "") : ""} {unit} 
                                    </option>
                                ))}
                    </select>
            </div>
        )
    } else {
        return (
            <div>
                 <select name="lastSelection" 
                            id="lastSelection"
                            value={lastSelection}
                            className="select"
                            style={{marginLeft: "5vh", maxWidth: "15vh"}}
                            onChange={handleChange}>
                                {units && Object.keys(units).map((unit, index) => (
                                    <option key={index} value={unit}>
                                        {amount ? 
                                                output === 0 ? (amount * (units[firstSelection] / units[unit])) : (amount * (units[unit] / units[firstSelection]))
                                                : ""} {unit}
                                    </option>
                                ))}
                    </select>
            </div>
        )
    }
    
}

export default Select
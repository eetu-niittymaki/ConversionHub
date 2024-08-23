import React from "react"
import "../App.scss"

const Select = ({ type, firstSelection, lastSelection, units, amount, handleChange, output }) => {
    const selectedValue = type ? firstSelection : lastSelection

    return (
        <select
            name={type ? "firstSelection" : "lastSelection"}
            id={type ? "firstSelection" : "lastSelection"}
            value={selectedValue}
            className="select"
            style={type ? {marginRight: "5vh"} : {marginLeft: "5vh"}}
            onChange={handleChange}
        >
            {units && Object.keys(units).map((unit, index) => (
                <option
                    key={index}
                    value={unit}
                    style={selectedValue === unit ? {color: "rgb(179, 7, 7)", fontWeight: "bold"} : {color: "inherit"}}
                >
                    {type
                        ? `${amount && unit === selectedValue ? amount : ""} ${unit}` 
                        : `${amount ? (output === false ? (amount * (units[firstSelection] / units[unit])) : (amount * (units[unit] / units[firstSelection]))) : ""} 
                        ${unit}`
                    }
                </option>
            ))}
        </select>
    )
}

export default Select

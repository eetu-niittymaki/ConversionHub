import React from "react"

const FirstSelect = ({value, amount, units, handleChange}) => {
    return (
        <div>
             <select name="select" 
                        id="select"
                        value={value}
                        className="select"
                        style={{marginRight: "5vh"}}
                        onChange={handleChange}>
                            {units.map((unit, index) => (
                                <option key={index} value={unit}>
                                    {amount ? (unit === value ? amount : "") : ""} {unit} 
                                </option>
                            ))}
                </select>
        </div>
    )
}

export default FirstSelect
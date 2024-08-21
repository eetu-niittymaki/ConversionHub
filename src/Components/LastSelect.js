import React from "react"
import "./UnitForm.scss"

const LastSelect = ({lastSelection, firstSelection, type, amount, units, handleChange}) => {
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
                                            type === 0 ? (amount * (units[firstSelection] / units[unit])) : (amount * (units[unit] / units[firstSelection]))
                                            : ""} {unit}
                                </option>
                            ))}
                </select>
        </div>
    )
}

export default LastSelect
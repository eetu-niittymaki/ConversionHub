import React from "react"
import "./UnitForm.scss"

const FirstSelect = ({firstSlection, amount, units, handleChange}) => {
    return (
        <div>
             <select name="firstSelection" 
                        id="firstSelection"
                        value={firstSlection}
                        className="select"
                        style={{marginRight: "5vh", maxWidth: "15vh"}}
                        onChange={handleChange}>
                            {units && Object.keys(units).map((unit, index) => (
                                <option key={index} value={unit}>
                                    {amount ? (unit === firstSlection ? amount : "") : ""} {unit} 
                                </option>
                            ))}
                </select>
        </div>
    )
}

export default FirstSelect
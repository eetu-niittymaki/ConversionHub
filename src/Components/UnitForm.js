import React, { useState, useEffect } from "react";
import "./UnitForm.scss"

export default function UnitForm({title, units}) {
    const [value, setValue] = useState()
    const [firstSelection, setFirstSelection] = useState(Object.keys(units)[0])
    const [lastSelection, setLastSelection] = useState(Object.keys(units)[1])

    useEffect(() => {
        setFirstSelection(Object.keys(units)[0])
        setLastSelection(Object.keys(units)[1])
    }, [title, units])

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div>
            <h1>{title}</h1>
            <form>
                <input type="number" 
                        name="value"
                        value={value} 
                        placeholder={title}
                        onChange={handleChange} 
                        style={{minHeight:"5vh", marginBottom:"10%"}}/>
                <label for="value" className="formLabel">{title}</label>
            </form>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginBottom:"10%",  maxWidth: "25vw"}}>
                <select name="firstSelection" 
                        id="firstSelection"
                        value={firstSelection}
                        style={{marginRight: "5vh"}}
                        className="select"
                        onChange={e => setFirstSelection(e.target.value)}>
                            {Object.keys(units).filter(unit => unit !== lastSelection).map((unit, index) => (
                                <option key={index} value={unit}>
                                   {unit} {value ? (unit === firstSelection ? value : "") : ""} 
                                </option>
                            ))}
                </select>
                <button style={{position: "absolute",}}
                        onClick={() => { setFirstSelection(lastSelection) ;
                                         setLastSelection(firstSelection)}}>
                    <img src={process.env.PUBLIC_URL + "/images/arrow.png"} alt="Change"/>
                </button> 
                <select name="lastSelection" 
                        id="lastSelection"
                        value={lastSelection}
                        style={{ marginLeft: "5vh"}}
                        className="select"
                        onChange={e => setLastSelection(e.target.value)}>
                            {Object.keys(units).filter(unit => unit !== firstSelection).map((unit, index) => (
                                <option key={index} value={unit}>
                                    {unit}
                                    {value ? ` ${value * (units[firstSelection] / units[unit])}`: ""}
                                </option>
                            ))}
                </select>
            </div>     
        </div>
    )
  }
  
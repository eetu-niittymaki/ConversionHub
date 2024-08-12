import React, { useState, useEffect } from "react";

export default function UnitForm({title, units}) {
    const [value, setValue] = useState(0)
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
            <div style={{display: "flex", flexDirection:"row", justifyContent: "center"}}>
                <h2>{firstSelection}</h2>
                <button onClick={() => { setFirstSelection(lastSelection) ;
                                         setLastSelection(firstSelection)}}>
                    {"<-->"}
                </button> 
                <h2>{lastSelection}</h2>
            </div>
            
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <h3>From: </h3>
                <select name="firstSelection" 
                        id="firstSelection"
                        value={firstSelection}
                        onChange={e => setFirstSelection(e.target.value)}>
                            {Object.keys(units).filter(unit => unit !== lastSelection).map((unit) => (
                                <option value={unit}>{unit}</option>
                            ))}
                </select>
                <h3>To: </h3>
                <select name="lastSelection" 
                        id="lastSelection"
                        value={lastSelection}
                        onChange={e => setLastSelection(e.target.value)}>
                            {Object.keys(units).filter(unit => unit !== firstSelection).map((unit) => (
                                <option value={unit}>
                                    {unit}
                                    {value !== 0 ? `(${value * (units[unit] / units[firstSelection])})`: ""}
                                </option>
                            ))}
                </select>
            </div>     
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <form>
                    <label>
                        Value: <input type="number" value={value} onChange={handleChange}/>
                    </label>
                </form>
                <h3>Result: {value !== 0 ? value * (units[lastSelection] / units[firstSelection]) : ""}</h3>
            </div>
        </div>
    )
  }
  
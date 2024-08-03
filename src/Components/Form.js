import React, { useState } from "react";

export default function MyForm({title, units}) {
    const [value, setValue] = useState("")
    const [firstSelection, setFirstSelection] = useState("")
    const [lastSelection, setLastSelection] = useState("")

    const handleChange = e => {
        setValue(e.target.value)    
    }

    return (
        <div>
            <h1>{title}</h1>
            <div style={{display: "flex", flexDirection:"row", justifyContent: "center"}}>
                <h2>{firstSelection}</h2>
                <button onClick={() => { setFirstSelection(lastSelection) ; setLastSelection(firstSelection) }}>{"<-->"}</button> 
                <h2>{lastSelection}</h2>
            </div>
            
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <h3>From: </h3>
                <select name="firstSelection" 
                        id="firstSelection"
                        value={firstSelection}
                        onChange={e => setFirstSelection(e.target.value)}>
                            {Object.keys(units).map((unit) => (
                                <option value={unit}>{unit}</option>
                            ))}
                </select>
                <h3>To: </h3>
                <select name="lastSelection" 
                        id="lastSelection"
                        value={lastSelection}
                        onChange={e => setLastSelection(e.target.value)}>
                            {Object.keys(units).filter(unit => unit !== firstSelection).map((unit) => (
                                <option value={unit}>{unit}</option>
                            ))}
                </select>
            </div>     
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <form>
                    <label>
                        Values: <input type="text" value={value} onChange={handleChange}/>
                    </label>
                </form>
                <h3>Result: {value * (units[lastSelection] / units[firstSelection])}</h3>
            </div>
        </div>
    )
  }
  
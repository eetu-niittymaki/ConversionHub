import React, { useState } from "react";
import { meterToMile, mileToMeter} from "../Utilities/calculations"


export default function MyForm() {
    const [value, setValue] = useState("")
    const [change, setChange] = useState(false)
    const [firstSelection, setFirstSelection] = useState("m")
    const [lastSelection, setLastSelection] = useState("mile")
    const handleChange = e => {
        setValue(e.target.value)    
    }

    const units = { 
                "mm": 0.001, "cm": 0.01, "dm": 0.1, "m": 1.0, "dam": 10.0, "hm": 100.0, "km": 1000.0,
                "mile": 1609.344, 
            }

    return (
        <div>
            <h1>Length Units</h1>
            <div style={{display: "flex", flexDirection:"row", justifyContent: "center"}}>
                <h2>{firstSelection}</h2>
                <button onClick={() => { setFirstSelection(lastSelection) ; setLastSelection(firstSelection) }}>{"<-->"}</button> 
                <h2>{lastSelection}</h2>
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <h3>From: </h3>
                    <select name="firstSelection" 
                            id="firstSelection"
                            value={firstSelection}
                            onChange={e => setFirstSelection(e.target.value)}>
                                {Object.keys(units).map((unit) => (
                                    <option value={unit}>{unit}</option>
                                ))}
                    </select>
                    <form>
                        <label>
                            Values: <input type="text" value={value} onChange={handleChange}/>
                        </label>
                    </form>
                </div>     
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>     
                    <h3>To: </h3>
                    <select name="lastSelection" 
                            id="lastSelection"
                            value={lastSelection}
                            onChange={e => setLastSelection(e.target.value)}>
                                {Object.keys(units).filter(unit => unit !== firstSelection).map((unit) => (
                                    <option value={unit}>{unit}</option>
                                ))}
                    </select>
                    <h3>Result: {value * (units[firstSelection] / units[lastSelection])}</h3>
                    </div> 
            </div>
        </div>
    )
  }
  
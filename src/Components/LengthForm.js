import React, { useState } from "react";
import { meterToMile, mileToMeter} from "../Utilities/calculations"

export default function MyForm() {
    const [value, setValue] = useState("")
    const [tempType, setTempType] = useState(false)
    const handleChange = e => {
        setValue(e.target.value)
    }
    
    if (tempType === true) {
        return (
            <div>
                <button onClick={() => setTempType(!tempType)}>Change Measurement Type</button> 
                <h1>Meter To Miles</h1>
                <form>
                    <label>
                        Meter: <input type="text" value={value} onChange={handleChange}/>
                    </label>
                </form>
                <h1>Miles {value !== "" ? meterToMile(value) : ""}</h1>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={() => setTempType(!tempType)}>Change Temp Type</button> 
                <h1>Miles To Meters</h1>
                <form>
                    <label>
                        Miles: <input type="text" value={value} onChange={handleChange}/>
                    </label>
                </form>
                <h1>Meters: {value !== "" ? mileToMeter(value) : ""}</h1>
            </div>
        )
    }
    
  }
  
import React, { useState } from "react";
import { cToF, fToC } from "../Utilities/calculations"

export default function MyForm() {
    const [value, setValue] = useState("")
    const [tempType, setTempType] = useState(false)
    const handleChange = e => {
        setValue(e.target.value)
    }
    
    if (tempType === true) {
        return (
            <div>
                <button onClick={() => setTempType(!tempType)}>Change Temp Type</button> 
                <h1>Fahrenheit To Celcius</h1>
                <form>
                    <label>
                        Fahrenheit: <input type="text" value={value} onChange={handleChange}/>
                    </label>
                </form>
                <h1>Celcius: {value !== "" ? fToC(value) : ""}</h1>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={() => setTempType(!tempType)}>Change Temp Type</button> 
                <h1>Celcius To Fahrenheit</h1>
                <form>
                    <label>
                        Celcius: <input type="text" value={value} onChange={handleChange}/>
                    </label>
                </form>
                <h1>Fahrenheit: {value !== "" ? cToF(value) : ""}</h1>
            </div>
        )
    }
    
  }
  
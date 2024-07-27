import React, { useState } from "react";
//import { cToF, fToC } from "../Utilities/calculations"

export default function Form({title1, title2, func1, func2}) {
    const [value, setValue] = useState("")
    const [tempType, setTempType] = useState(false)
    const handleChange = e => {
        setValue(e.target.value)
    }
    
    if (tempType === true) {
        return (
            <div>
                <button onClick={() => setTempType(!tempType)}>Change  Type</button> 
                <h1>{title1}</h1>
                <form>
                    <label>
                        {title1.split(" ")[0]}: <input type="text" value={value} onChange={handleChange}/>
                    </label>
                </form>
                <h1>{title1.split(" ")[2]}: {value !== "" ? func1(value) : ""}</h1>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={() => setTempType(!tempType)}>Change Type</button> 
                <h1>{title2}</h1>
                <form>
                    <label>
                    {title2.split(" ")[0]}: <input type="text" value={value} onChange={handleChange}/>
                    </label>
                </form>
                <h1>{title2.split(" ")[2]}: {value !== "" ? func2(value) : ""}</h1>
            </div>
        )
    }
    
  }
  
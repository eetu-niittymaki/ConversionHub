import React, { useState } from "react";


export default function TemperatureForm() {
    const [amount, setAmount] = useState("")
    const [firstSelection, setFirstSelection] = useState("C")
    const [lastSelection, setLastSelection] = useState("F")
    
    const handleChange = e => {
        setAmount(e.target.value)    
    }

    const tempUnits = ["C", "F", "K"]

    const calculateTemp = () => {
        switch(firstSelection) {
            case "C":
                if (lastSelection === "F") {
                    return amount * 1.8 + 32
                } else if (lastSelection === "K") {
                    return amount + 273.15
                } else {
                    return amount
                }
            case "F":
                if (lastSelection === "C") {
                    return (amount - 32) / 1.8
                } else if (lastSelection === "K") {
                    return (amount + 459.67) * 5 / 9
                } else {
                    return amount
                }
            case "K":
                if (lastSelection === "C") {
                    return amount - 273.15
                } else if (lastSelection === "F") {
                    return amount * 9 / 5 - 459.67
                } else {
                    return amount
                }
            default:
                return amount
        }
    }

    return (
        <div>
            <h1>Temperature Units</h1>
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
                        {tempUnits.map((unit) => (
                             <option value={unit}>{unit}</option>
                        ))}
                </select>
                <h3>To: </h3>
                <select name="lastSelection" 
                        id="lastSelection"
                        value={lastSelection}
                        onChange={e => setLastSelection(e.target.value)}>
                    {tempUnits.filter(unit => unit !== firstSelection).map((unit) => (
                             <option value={unit}>{unit}</option>
                        ))}
                </select>
            </div>     
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <form>
                    <label>
                        Amount: <input type="text" value={amount} onChange={handleChange}/>
                    </label>
                </form>
                <h3>Result: {calculateTemp()}</h3>
            </div>
        </div>
    )
  }
  
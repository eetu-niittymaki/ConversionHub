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
                    return amount * 1.8 + 32 + " F"
                } else if (lastSelection === "K") {
                    return amount + 273.15 + " K"
                } else {
                    return amount
                }
            case "F":
                if (lastSelection === "C") {
                    return (amount - 32) / 1.8 + " C"
                } else if (lastSelection === "K") {
                    return (amount + 459.67) * 5 / 9 + " K"
                } else {
                    return amount
                }
            case "K":
                if (lastSelection === "C") {
                    return amount - 273.15 + " C" 
                } else if (lastSelection === "F") {
                    return amount * 9 / 5 - 459.67 + " F"
                } else {
                    return amount
                }
            default:
                return amount
        }
    }

    return (
        <div>
            <h1>Temperature</h1>
            <form>
                <input type="text" value={amount} onChange={handleChange}
                        style={{minHeight:"5vh", marginBottom:"10%"}}/>
            </form>
            <div style={{display: "flex", flexDirection:"row", justifyContent: "center"}}>
                <h2 style={{position: "relative", marginRight: "10vh" }}> {firstSelection}</h2>
                <button onClick={() => { setFirstSelection(lastSelection) ; setLastSelection(firstSelection) }}
                        style={{position: "absolute",}}>
                    <img src="arrow.png" alt="Change"/> 
                </button> 
                <h2>{lastSelection}</h2>
            </div>
            
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <select name="firstSelection" 
                        id="firstSelection"
                        value={firstSelection}
                        style={{marginRight: "5vh", minWidth:"15vh", minHeight:"5vh", fontWeight:"bold"}}
                        onChange={e => setFirstSelection(e.target.value)}>   
                        {tempUnits.filter(unit => unit !== lastSelection).map((unit) => (
                             <option value={unit}>{unit}</option>
                        ))}
                </select>
                <h3>To: </h3>
                <select name="lastSelection" 
                        id="lastSelection"
                        value={lastSelection}
                        style={{marginLeft: "5vh", minWidth:"15vh", minHeight:"5vh", fontWeight:"bold"}}
                        onChange={e => setLastSelection(e.target.value)}>
                    {tempUnits.filter(unit => unit !== firstSelection).map((unit) => (
                             <option value={unit}>{unit}</option>
                        ))}
                </select>
            </div>     
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <h3>{amount === "" ? "" : calculateTemp()}</h3>
            </div>
        </div>
    )
  }
  
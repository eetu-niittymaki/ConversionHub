import React, { useState } from "react";

export default function TemperatureForm() {
    const [amount, setAmount] = useState()
    const [firstSelection, setFirstSelection] = useState("C")
    const [lastSelection, setLastSelection] = useState("F")
    const tempUnits = ["C", "F", "K"]

    const handleChange = (e) => {
        setAmount(Number(e.target.value))
    }

    const roundNum = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
    }
    
    const calculateTemp = (unit) => {
        if (firstSelection === "C") {
            return (unit === "F") ? (roundNum(amount * (1.8 + 32)) + " F") : (roundNum(amount + 273.15) + " K")
        } else if (firstSelection === "F") {
            return  (unit === "C") ? (roundNum((amount - 32) / 1.8)) + " C" : ((roundNum((amount + 459.67) * 5 / 9)) + " K")
        } else {
            return (unit === "C") ? (roundNum(amount - 273.1) + " C" ) : (roundNum(amount * 9 / 5 - 459.67) + " F")
        }
    }

    return (
        <div>
            <h1>Temperature</h1>
            <form>
                <input type="number" 
                        value={amount} 
                        id="amount"
                        onChange={(e) => handleChange(e)}
                        style={{minHeight:"5vh", marginBottom:"10%"}}/>
            </form>
            <div style={{display: "flex", flexDirection:"row", justifyContent: "center"}}>
                
            </div>
            
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <select name="firstSelection" 
                        id="firstSelection"
                        value={firstSelection}
                        className="select"
                        style={{marginRight: "5vh", minWidth:"15vh", minHeight:"5vh"}}
                        onChange={e => setFirstSelection(e.target.value)}>   
                        {tempUnits.filter(unit => unit !== lastSelection).map((unit) => (
                             <option value={unit}>
                                {amount ? (unit === firstSelection ? amount : "") : ""} {unit}
                            </option>
                        ))}
                </select>
                <button onClick={() => { setFirstSelection(lastSelection) ; setLastSelection(firstSelection) }}
                        style={{position: "absolute",}}>
                    <img src="arrow.png" alt="Change"/> 
                </button> 
                <select name="lastSelection" 
                        id="lastSelection"
                        value={lastSelection}
                        style={{marginLeft: "5vh", minWidth:"15vh", minHeight:"5vh"}}
                        className="select"
                        onChange={e => setLastSelection(e.target.value)}>
                        {tempUnits.filter(unit => unit !== firstSelection).map((unit) => (
                            <option value={unit}>
                               {amount ? calculateTemp(unit) : unit}
                                </option>
                        ))}
                </select>
            </div>     
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
            </div>
        </div>
    )
  }
  
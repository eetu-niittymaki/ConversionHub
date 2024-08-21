import React, { useState } from "react";
import Form from "./Form";
import ChangeButton from "./ChangeButton";
import FirstSelect from "./FirstSelect";
import LastSelect from "./LastSelect";

export default function TemperatureForm() {
    const [amount, setAmount] = useState()
    const [firstSelection, setFirstSelection] = useState("C")
    const [lastSelection, setLastSelection] = useState("F")
    const tempUnits = {"C": "celcius", "F": "fahrenheit",  "K": "kelvin"}

    const handleChange = (e) => {
        setAmount(e.target.value)
    }

    const roundNum = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
    }
    
    const calculateTemp = (unit) => {
        if (firstSelection === "C") {
            return (unit === "F") ? roundNum(amount * (1.8 + 32)) : roundNum(amount + 273.15)
        } else if (firstSelection === "F") {
            return  (unit === "C") ? roundNum((amount - 32) / 1.8) : roundNum((amount + 459.67) * 5 / 9)
        } else {
            return (unit === "C") ? roundNum(amount - 273.1)  : roundNum(amount * 9 / 5 - 459.67)
        }
    }

    return (
        <div>
            <h1>Temperature</h1>
            <Form amount={amount}
                  name={"amount"}
                  title={"Temperature"}
                  handleChange={(e) => handleChange(e)}
            />  
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", maxWidth: "25vw"}}>
                <FirstSelect firstSlection={firstSelection}
                            amount={amount}
                            units={tempUnits}
                            handleChange={e => setFirstSelection(e.target.value)}
                />
                <ChangeButton functions={() => { setFirstSelection(lastSelection) ; 
                                                setLastSelection(firstSelection) }}
                />
                {/*<LastSelect value={lastSelection}
                            amount={amount}
                            units={tempUnits}
                            handleChange={e => setLastSelection(e.target.value)}
                />*/}
                <select name="lastSelection" 
                        id="lastSelection"
                        value={lastSelection}
                        style={{marginLeft: "5vh"}}
                        className="select"
                        onChange={e => setLastSelection(e.target.value)}>
                        {Object.keys(tempUnits).filter(unit => unit !== firstSelection).map((unit) => (
                            <option value={unit}>
                               {amount ? calculateTemp(unit) : ""} {unit} 
                                </option>
                        ))}
                </select>
            </div>     
            <h3>{amount ? `${calculateTemp(lastSelection)} ${lastSelection}` : ""}</h3>
        </div>
    )
  }
  
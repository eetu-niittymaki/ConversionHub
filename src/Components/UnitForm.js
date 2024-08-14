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
            <form>
                <input type="number" value={value} onChange={handleChange} style={{minHeight:"5vh", marginBottom:"10%"}}/>
            </form>
            <div style={{display: "flex", flexDirection:"row", justifyContent: "center"}}>
                <h2 style={{position: "relative", marginRight: "10vh" }}>{firstSelection}</h2>
                <button style={{position: "absolute",}}
                        onClick={() => { setFirstSelection(lastSelection) ;
                                         setLastSelection(firstSelection)}}>
                    <img src="./arrow.png" alt="Change"/>
                </button> 
                <h2 style={{position: "relative", marginLeft: "10vh" }}>{lastSelection}</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginBottom:"10%"}}>
                <select name="firstSelection" 
                        id="firstSelection"
                        value={firstSelection}
                        style={{marginRight: "5vh", marginBottom: "2vh", minWidth:"15vh", minHeight:"5vh" }}
                        onChange={e => setFirstSelection(e.target.value)}>
                            {Object.keys(units).filter(unit => unit !== lastSelection).map((unit, index) => (
                                <option key={index} value={unit}>{unit}</option>
                            ))}
                </select>
                
                <h3>To: </h3>
                <select name="lastSelection" 
                        id="lastSelection"
                        value={lastSelection}
                        style={{marginLeft: "5vh", minWidth:"15vh", minHeight:"5vh"}}
                        onChange={e => setLastSelection(e.target.value)}>
                            {Object.keys(units).filter(unit => unit !== firstSelection).map((unit, index) => (
                                <option key={index} value={unit}>
                                    {unit}
                                    {value !== 0 ? `(${value * (units[unit] / units[firstSelection])})`: ""}
                                </option>
                            ))}
                </select>
            </div>     
        </div>
    )
  }
  
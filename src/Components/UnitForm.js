import React, { useState, useEffect } from "react";
import Form from "./Form";
import ChangeButton from "./ChangeButton";
import "./UnitForm.scss"

export default function UnitForm({title, units}) {
    const [value, setValue] = useState()
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
            <Form amount={value}
                  name={"amount"}
                  title={title}
                  placeholder={title}
                  handleChange={handleChange}
            />  
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginBottom:"10%",  maxWidth: "25vw"}}>
                <select name="firstSelection" 
                        id="firstSelection"
                        value={firstSelection}
                        style={{marginRight: "5vh"}}
                        className="select"
                        onChange={e => setFirstSelection(e.target.value)}>
                            {Object.keys(units).map((unit, index) => (
                                <option key={index} value={unit}>
                                   {value ? (unit === firstSelection ? value : "") : ""} {unit} 
                                </option>
                            ))}
                </select>
                <ChangeButton functions={() => { setFirstSelection(lastSelection) ;
                                                setLastSelection(firstSelection)}}
                />
                <select name="lastSelection" 
                        id="lastSelection"
                        value={lastSelection}
                        style={{ marginLeft: "5vh"}}
                        className="select"
                        onChange={e => setLastSelection(e.target.value)}>
                            {Object.keys(units).map((unit, index) => (
                                <option key={index} value={unit}>
                                     {value ? value * (units[firstSelection] / units[unit]) : ""} {unit}
                                </option>
                            ))}
                </select>
            </div>   
            <h3>{value ? `${value * (units[firstSelection] / units[lastSelection])} ${lastSelection}`: ""}</h3>  
        </div>
    )
  }
  
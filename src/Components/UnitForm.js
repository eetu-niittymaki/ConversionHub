import React, { useState, useEffect } from "react";
import Form from "./Form";
import ChangeButton from "./ChangeButton";
import Select from "./Select";
import "./UnitForm.scss"

export default function UnitForm({title, units}) {
    const [amount, setAmount] = useState()
    const [firstSelection, setFirstSelection] = useState(Object.keys(units)[0])
    const [lastSelection, setLastSelection] = useState(Object.keys(units)[1])

    useEffect(() => {
        setFirstSelection(Object.keys(units)[0])
        setLastSelection(Object.keys(units)[1])
    }, [title, units])

    const handleChange = (e) => {
        setAmount(e.target.value)
    }
    
    return (
        <div>
            <h1>{title}</h1>
            <Form amount={amount}
                  name={"amount"}
                  title={title}
                  handleChange={handleChange}
            />  
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginBottom:"10%",  maxWidth: "25vw"}}>
                <Select type={"first"}
                        firstSelection={firstSelection} 
                        amount={amount}
                        units={units}
                        handleChange={e => setFirstSelection(e.target.value)}/>
                <ChangeButton functions={() => { setFirstSelection(lastSelection) ;
                                                setLastSelection(firstSelection)}}
                />
                <Select lastSelection={lastSelection}
                        firstSelection={firstSelection}
                        amount={amount}
                        units={units}
                        output={0}
                        handleChange={e => setLastSelection(e.target.value)}
                />
            </div>   
            <h3>{amount ? `${amount * (units[firstSelection] / units[lastSelection])} ${lastSelection}`: ""}</h3>  
        </div>
    )
  }
  
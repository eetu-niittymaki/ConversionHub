import React, { useState, useEffect } from "react"

export default function DropdownMenu ({sendToParent}) {
    const [selection, setSelection] = useState()

    useEffect(() => {
        sendToParent(selection)
    }, [selection])

    return(
        <div>
            <select name="conversionTypes" 
                    id="conversionTypes"
                    value={selection}
                    onChange={e => setSelection(e.target.value)}>
                <option value={"default"}>Choose Conversion</option>
                <option value="Temperature">Temperature</option>
                <option value="Length">Length</option>
                <option value="Currencies">Currencies</option>
            </select>
        </div>
    )
}
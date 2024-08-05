import React, { useState } from "react"

const Binary = () => {
    const [mode, setMode] = useState(false)
    const [value, setValue] = useState("")

    const binaryToString = (str) => {
        str = str.replace(/ /g,'')
        str = str.replace(/.{7}/g, '$& ')
        console.log(str)
        
        let newBinary = str.split(" ");
        let binaryCode = [];
    
        for (let i = 0; i < newBinary.length; i++) {
            binaryCode.push(String.fromCharCode(parseInt(newBinary[i], 2)));
        }
        
        return binaryCode.join("");
    }

    const stringToBinary = (str) => {
        let output = ""
        for (let i = 0; i < str.length; i++) {
            output += str[i].charCodeAt(0).toString(2) + " " 
        }
        return output
    }

    return(
        <div>
            <button onClick={() => setMode(!mode)}>Change Mode</button>
            {mode === false 
            ? <p>Binary To Text</p>
            :
            <p>Text To Binary</p>
            }
            Value: <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <h3>Result: {mode === false ? binaryToString(value) : stringToBinary(value)}</h3>
        </div>
    )
}

export default Binary
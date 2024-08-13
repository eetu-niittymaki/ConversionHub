import React, { useState } from "react"
import "./Binary.css"

const Binary = () => {
    const [mode, setMode] = useState(false)
    const [value, setValue] = useState("")

    const binaryToString = (str) => {
        str = str.replace(/ /g,'')
        str = str.replace(/.{8}/g, '$& ')
        
        let newBinary = str.split(" ")
        let binaryCode = []
    
        for (let i = 0; i < newBinary.length; i++) {
            binaryCode.push(String.fromCharCode(parseInt(newBinary[i], 2)))
        }
        
        return binaryCode.join("")
    }

    const stringToBinary = (str) => {
        let result = ''
        
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i)
            let binary = ''
            
            for (let j = 7; j >= 0; j--) {
                binary += (char >> j) & 1
            }
            
            result += binary + ' '
        }
        return result.trim()
    }

    return(
        <div>
            <button onClick={() => {setMode(!mode) ; setValue("")}}>Change Mode</button>
            {mode === false 
            ? <div>
                <p>Binary To Text</p>
                Value: <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            </div>
            :
            <div>
                <p>Text To Binary</p>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <p>Value: <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/></p>
                    <img src="./clipboard.png" 
                        alt="Clipboard" 
                        onClick={() => {navigator.clipboard.writeText(stringToBinary(value))}}/>
                </div>
            </div>
            }
            <h3>Result: {mode === false ? binaryToString(value) : stringToBinary(value)}</h3>
        </div>
    )
}

export default Binary
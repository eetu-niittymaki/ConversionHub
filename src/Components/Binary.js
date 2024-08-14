import React, { useState } from "react"
import "./Binary.css"

const Binary = () => {
    const [mode, setMode] = useState(false)
    const [value, setValue] = useState("")

    const binaryToString = (str) => {
        str = str.replace(/ /g,'') // Remove all whitespaces
        str = str.replace(/.{8}/g, '$& ') // Add whitespace every 8 characters
        
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
            <button style={{minHeight:"5vh", minWidht:"15vh"}}
                onClick={() => {setMode(!mode) ; setValue("")}}>Change Mode</button>
            {mode === false 
            ? 
            <div>
                <h3>Text To Binary</h3>
                <div style={{position: "fixed", display:"flex", flexDirection:"row", marginBottom: "5%"}}>
                    <input type="text" value={value} 
                            style={{minHeight:"5vh", minWidht:"15vh"}}
                            onChange={(e) => setValue(e.target.value)}/>
                    <img src="./clipboard.png" 
                        alt="Clipboard" 
                        onClick={() => {navigator.clipboard.writeText(stringToBinary(value))}}/>
                </div>
            </div>            
            :
            <div>
                <h3>Binary To Text</h3>
                <input type="text" value={value} 
                        style={{minHeight:"5vh", minWidht:"15vh"}}
                        onChange={(e) => setValue(e.target.value)}/>
            </div>
            }
            <div style={{ dislpay: "flex", flexWrap:"wrap", width:"50%", bottom:"20%", position:"fixed", left:"25%", justifyContent:"center"}}>
                <h3>
                    {mode === false ? stringToBinary(value) : binaryToString(value)}
                </h3>
            </div>
        </div>
    )
}

export default Binary
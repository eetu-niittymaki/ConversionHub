import React, { useState } from "react"
import "./Binary.css"

const Binary = () => {
    const [mode, setMode] = useState(false)
    const [value, setValue] = useState("")

    const binaryToString = (str) => {
        str = str.replace(/ /g,"") // Remove all whitespaces
        str = str.replace(/.{8}/g, "$& ") // Add whitespace every 8 characters
        
        let newBinary = str.split(" ")
        let binaryCode = []
    
        for (let i = 0; i < newBinary.length; i++) {
            binaryCode.push(String.fromCharCode(parseInt(newBinary[i], 2)))
        }
        
        return binaryCode.join("")
    }

    const stringToBinary = (str) => {
        let result = ""

        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i)
            let binary = ""
            for (let j = 7; j >= 0; j--) {
                binary += (char >> j) & 1
            }
            result += binary + " "
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
                    <form>
                        <input type="text" 
                                value={value} 
                                name="value"
                                placeholder="Text"
                                style={{minHeight:"5vh", minWidht:"15vh"}}
                                onChange={(e) => setValue(e.target.value)}/>
                        <label for="value" className="formLabel">Text</label>   
                    </form>
                    <img src={process.env.PUBLIC_URL + "/images/clipboard.png"} 
                        alt="Clipboard" 
                        className="myImg"
                        onClick={() => {navigator.clipboard.writeText(stringToBinary(value))}}/>
                </div>
            :
            <div>
                <h3>Binary To Text</h3>
                <form>
                    <input type="text" 
                            value={value} 
                            name="value"
                            placeholder="Binary"
                            style={{minHeight:"5vh", minWidht:"15vh"}}
                            onChange={(e) => setValue(e.target.value)}/>
                    <label for="value" className="formLabel">Binary</label>
                </form>
            </div>
            }
            <div style={{ width:"50%", inlineSize: "90vh", overflowWrap:"break-word", position:"relative",  justifyContent:"center"}}>
                <h3>
                    {mode === false ? stringToBinary(value) : binaryToString(value)}
                </h3>
            </div>
        </div>
    )
}

export default Binary
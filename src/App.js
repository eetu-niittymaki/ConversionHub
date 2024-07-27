import './App.css';
import { useState } from "react"
import Form from "./Components/Form"
import LengthForm from "./Components/LengthForm"
import DropdownMenu from "./Components/DropdownMenu"
import { meterToMile, mileToMeter, cToF, fToC } from "./Utilities/calculations"

function App() {
  console.log(process.env.API_KEY)
  const [conversionType, setConversionType] = useState("")
  console.log(conversionType)

  const handleChange = (e) => {
    setConversionType(e)
  }
  
  const renderSwitch = (param) => {
    switch(param) {
      case "Temperature":
        return <div>
                  <Form
                    title1="Celcius To Fahrenheit"
                    title2="Fahrenheit To Celcius"
                    func1={cToF}
                    func2={fToC}/> 
                </div>
      case "Length":
        return <div>
                  <LengthForm/>
              </div>
      default:
        return <div>
                <h1>Choose conversion type</h1>
              </div>        
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {renderSwitch(conversionType)}
        <DropdownMenu sendToParent={handleChange}/>
        <p>
          Goku on kuollut. Kauan eläkoon Goku.
        </p>
      </header>
    </div>
  )
}

export default App;

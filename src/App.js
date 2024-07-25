import './App.css';
import { useState } from "react"
import TemperatureForm from "./Components/TemperatureForm"
import LengthForm from "./Components/LengthForm"
import DropdownMenu from "./Components/DropdownMenu"

function App() {
  const [conversionType, setConversionType] = useState("")
  console.log(conversionType)

  const handleChange = (e) => {
    setConversionType(e)
  }
  
  const renderSwitch = (param) => {
    switch(param) {
      case "Temperature":
        return <div>
                  <TemperatureForm/> 
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

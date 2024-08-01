import './App.css';
import { useState, } from "react"
import Form from "./Components/Form"
import LengthForm from "./Components/LengthForm"
import TemperatureForm from './Components/TemperatureForm';
import DropdownMenu from "./Components/DropdownMenu"
import Currencies from './Components/Currencies';
import Header from './Components/Header';
import { meterToMile, mileToMeter, cToF, fToC } from "./Utilities/calculations"

function App() {
  const [conversionType, setConversionType] = useState("")

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
      case "Currencies":
        return <div>
                  <Currencies/>
              </div>
      default:
        return <div>
                <h1>Choose conversion type</h1>
              </div>        
    }
  }

  return (
    <div className="App">
      <Header sendToParent={handleChange}>
        <p>Length</p>
        <p>Temperature</p>
        <p>Currencies</p>
      </Header >
      <header className="App-header">
        {renderSwitch(conversionType)}
        {/*<DropdownMenu sendToParent={handleChange}/>*/}
        <p>
          Goku on kuollut. Kauan eläkoon Goku.
        </p>
      </header>
    </div>
  )
}

export default App;

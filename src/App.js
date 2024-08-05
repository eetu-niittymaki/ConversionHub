import './App.css';
import { useState, } from "react"
import Form from "./Components/Form"
import LengthForm from "./Components/LengthForm"
import TemperatureForm from './Components/TemperatureForm';
import DropdownMenu from "./Components/DropdownMenu"
import Currencies from './Components/Currencies';
import Binary from './Components/Binary';
import Header from './Components/Header';
import * as units from "./Utilities/units"

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
                  <Form title="Length" units={units.length}/>
              </div>
      case "Area":
          return <div>
                    <Form title="Area" units={units.area}/>
                </div>
       case "Weight":
        return <div>
                  <Form title="Weight" units={units.weight}/>
              </div>
      case "Currencies":
        return <div>
                  <Currencies/>
              </div>
      case "Binary":
        return <div>
                  <Binary/>
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
        <p>Area</p>
        <p>Weight</p>
        <p>Currencies</p>
        <p>Binary</p>
      </Header >
      <header className="App-header">
        {renderSwitch(conversionType)}
      </header>
    </div>
  )
}

export default App;

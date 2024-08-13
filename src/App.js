import './App.css';
import { useState, } from "react"
import UnitForm from "./Components/UnitForm"
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
        return <TemperatureForm/>
      case "Length":
        return <UnitForm title="Length" units={units.length}/>
      case "Area":
          return <UnitForm title="Area" units={units.area}/>
       case "Weight":
        return <UnitForm title="Weight" units={units.weight}/>
      case "Currencies":
        return <Currencies/>
      case "Binary":
        return <Binary/>
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
        <p>Area</p>
        <p>Weight</p>
        <p>Temperature</p>
        <p>Currencies</p>
        <p>Binary</p>
      </Header >
      <div className="App-body">
        {renderSwitch(conversionType)}
      </div>
    </div>
  )
}

export default App;

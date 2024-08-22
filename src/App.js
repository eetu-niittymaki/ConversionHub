import './App.scss';
import { useState, } from "react"
import UnitForm from "./Components/UnitForm"
import TemperatureForm from './Components/TemperatureForm';
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
      case "Volume":
        return <UnitForm title="Volume" units={units.volume}/>
      case "Data":
        return <UnitForm title="Data" units={units.data}/>
      case "Currencies":
        return <Currencies/>
      case "Binary":
        return <Binary/>
      default:
        return <h1>Choose conversion type</h1>
    }
  }

  return (
    <div className="App">
      <Header sendToParent={handleChange}>
        <p>Length</p>
        <p>Area</p>
        <p>Weight</p>
        <p>Volume</p>
        <p>Data</p>
        <p>Temperature</p>
        <p>Currencies</p>
        <p>Binary</p>
      </Header >
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content">
        {renderSwitch(conversionType)}
      </div>
    </div>
  )
}

export default App;

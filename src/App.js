import './App.scss'
import { useState, useEffect, useRef } from "react"
import UnitForm from "./Components/UnitForm"
import TemperatureForm from './Components/TemperatureForm'
import Currencies from './Components/Currencies'
import Binary from './Components/Binary'
import Header from './Components/Header'
import * as units from "./Utilities/units"

const backgrounds = [
  process.env.PUBLIC_URL + '/images/bg.jpg',
  process.env.PUBLIC_URL + '/images/bg2.jpg',
  process.env.PUBLIC_URL + '/images/bg3.jpg',
  process.env.PUBLIC_URL + '/images/bg4.jpg',
  process.env.PUBLIC_URL + '/images/bg5.jpg',
]

function App() {
  const [conversionType, setConversionType] = useState("")
  const [background, setBackground] = useState(backgrounds[0])
  const [fade, setFade] = useState(true) 
  let index = useRef(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false) // Start fading out
      setTimeout(() => {
        setBackground(backgrounds[index.current]) // Change the background image
        index.current = (index.current + 1) % backgrounds.length
        setFade(true)
      }, 2000)
    }, 15000) // Time between background changes
    return () => clearInterval(timer)
  }, [])

  const renderSwitch = (param) => {
    switch (param) {
      case "Temperature":
        return <TemperatureForm />
      case "Length":
        return <UnitForm title="Length" units={units.length} />
      case "Area":
        return <UnitForm title="Area" units={units.area} />
      case "Weight":
        return <UnitForm title="Weight" units={units.weight} />
      case "Volume":
        return <UnitForm title="Volume" units={units.volume} />
      case "Data":
        return <UnitForm title="Data" units={units.data} />
      case "Currencies":
        return <Currencies />
      case "Binary":
        return <Binary />
      default:
        return <h1 style={{color: "black"}}>Choose conversion type</h1>
    }
  }

  return (
    <div className="App">
      <Header sendToParent={(e) => setConversionType(e)}>
        <p>Length</p>
        <p>Area</p>
        <p>Weight</p>
        <p>Volume</p>
        <p>Data</p>
        <p>Temperature</p>
        <p>Currencies</p>
        <p>Binary</p>
      </Header>
      <div id="background" className="bg1" 
        style={{ 
          backgroundImage: `url(${background})`, 
          opacity: fade ? 1 : 0 
        }}>
        <div className="bg2"/>
      </div>
      <div className="content">
        {renderSwitch(conversionType)}
      </div>
    </div>
  )
}

export default App
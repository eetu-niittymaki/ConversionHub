import './App.scss';
import { useState, useEffect, useRef} from "react"
import UnitForm from "./Components/UnitForm"
import TemperatureForm from './Components/TemperatureForm';
import Currencies from './Components/Currencies';
import Binary from './Components/Binary';
import Header from './Components/Header';
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
  let index = useRef(0)

  console.log("ref", index.current)

  useEffect(() => {
    const timer = setInterval(() => {
      if (index.current >= backgrounds.length) index.current = 0 
      const element = document.getElementById("background")
      element.style.opacity = 0
      setBackground(backgrounds[index.current])
      index.current += 1
      const timeout = setTimeout(() => { // To make transitions between background images smoother
        element.style.opacity = 1        // Manipulating DOM directly is not a very Reactive thing to do, but it aint stupid if it works
        element.style.backgroundColor = "black"
        element.style.transition = "opacity 2s ease-in-out"
        return () => clearTimeout(timeout)
      }, 200)  
    }, 15000)
    return () => clearInterval(timer)
  }, [])

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
      <Header sendToParent={(e) => setConversionType(e)}>
        <p>Length</p>
        <p>Area</p>
        <p>Weight</p>
        <p>Volume</p>
        <p>Data</p>
        <p>Temperature</p>
        <p>Currencies</p>
        <p>Binary</p>
      </Header >
      <div id="background" className="bg1" style={{backgroundImage: `url(${background})` }}>
        <div className="bg2"></div>
      </div>
      <div className="content">
        {renderSwitch(conversionType)}
      </div>  
    </div>
  )
}

export default App;

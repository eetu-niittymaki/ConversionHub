import logo from './logo.jpg';
import './App.css';
import { useState } from "react"
import Form from "./Components/Form"


function App() {
  const [tempType, setTempType] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setTempType(!tempType)}>Change Temp Type</button>
        <Form tempType={tempType}/>
        <p>
          Goku on kuollut. Kauan eläkoon Goku.
        </p>
      </header>
    </div>
  );
}

export default App;

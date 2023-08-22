import { useState } from "react";
import "./App.css";
import Text from "./Text"

// mounting
// updating
// unmounting

function App() {
const [showText, setShowText] = useState(false)
 return (
  <div className='App'>
    <button onClick={()=> setShowText(!showText)} >show Text</button>
    {showText && <Text />}
   </div>
  )
}
export default App;

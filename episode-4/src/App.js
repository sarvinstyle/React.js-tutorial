import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const setZero = () => {
    setCount(0);
  };
  return (
    <div className="App">
      <button onClick={increase}>increat</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={setZero}>set to 0</button>
      <h1>{count}</h1>
    </div>
  );
}
export default App;

import { User } from "./User";
import "./App.css";

function App() {
    const classes = [
        { name : "html" , finished : true},
        { name : "javascript" , finished : false},
        { name : "css" , finished : true},
        { name : "bootstrap" , finished : false},
        { name : "react" , finished : true},
        { name : "python" , finished : false},
      ];

  return (
    <div className="App">
        {classes.map((c , index)=>{
            return c.finished && <h2 key={index}>{c.name}</h2>
        })}
    </div>
  )
}
export default App;



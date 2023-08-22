import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
 //https://excuser-three.vercel.app/v1/excuse/party

 
 const [generateExcuse, setGenerageExcuse]=useState("");

 const fetchExcuse= (excuse)=>{
   Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res)=>{
     setGenerageExcuse(res.data[0].excuse)
   })
 }
  
   return (
    <div className="App">
    <h1>Generate an excuse</h1>
      <button onClick={()=> fetchExcuse ("party")}>Party</button>
      <button onClick={()=> fetchExcuse ("family")}>family</button>
      <button onClick={()=> fetchExcuse ("office")}>office</button>
      <p>{generateExcuse}</p>
    </div>
  );
}
export default App;

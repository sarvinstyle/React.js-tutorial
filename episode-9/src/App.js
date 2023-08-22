import "./App.css";
import {BrowserRouter as Router , Routes , Route } from "react-router-dom"
import {Home} from "./Pages/Home"
import { Contact } from "./Pages/Contact";
import { Nav } from "./Pages/Nav";
import {Profile} from "./Pages/Profile"
import { useState, createContext } from "react";

export const ProfileContext = createContext();

function App() {
  const [username , setUsername]=useState("sarvinstyle")
  return <div className="App">
    <ProfileContext.Provider value={{username , setUsername}}>
 <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router> 
    </ProfileContext.Provider>
  </div>;
}
export default App;

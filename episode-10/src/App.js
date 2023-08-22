import "./App.css";
import {BrowserRouter as Router , Routes , Route } from "react-router-dom"
import {Home} from "./Pages/Home"
import { Contact } from "./Pages/Contact";
import { Nav } from "./Pages/Nav";
import {Profile} from "./Pages/Profile"
import {QueryClient , QueryClientProvider} from 'react-query'
function App() {
  const client = new QueryClient({ defaultOptions :{
    queries : { refetchOnWindowFocus : false}
  }})
  return <div className="App">
    <QueryClientProvider client={client} >
 <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router> 
    </QueryClientProvider>
  </div>;
}
export default App;

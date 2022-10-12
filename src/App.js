import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import PcsPage from "./Pages/pcs/PcsPages";
import HomePage from "./Pages/HomePage/HomePage";
import ServicePage from "./Pages/ServicePage/ServicePage";

import NavBar from "./Components/navbarPage/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/services" element={<ServicePage/>}/>
          <Route path="/pcs" element={<PcsPage/>}/>
        </Routes>        
      </Router>
    </div>
  );
}

export default App;

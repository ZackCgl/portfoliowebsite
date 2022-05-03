
import { useColorMode } from "@chakra-ui/color-mode";

import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage";



function App() {

 

  return (
    
      
      <Router>
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
        </Routes> 
      </Router>
     
      
   
  );
}

export default App;
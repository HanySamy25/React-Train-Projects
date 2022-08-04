import React from "react";
import { Routes, Route } from "react-router-dom";
import NavScrollExample from "./Components/Navbar";
import "./App.css";
import WeatherApp from "./Projects/WeatherApp/Weather";
import CalculatorApp  from "./Projects/Calculator/Calculator";
import DaveApps from "./Projects/DaveApps/Apps";
import NotFound from "./NotFound";


function App() {
  return (
    <>
      <NavScrollExample/>
    <div className="container">
    <Routes>
        <Route path="/" element={<div className="main-wrabber">Click On Your App To Display</div>} />
        <Route path="/weather-app" element={<WeatherApp />} />
        <Route path="/calculator" element={<CalculatorApp />} />
        <Route path="/dave-apps/*" element={<DaveApps />} />
        <Route path="*" element={<NotFound />} />
       

      </Routes>  
     
    </div>

    
    </>
  );
}

export default App;

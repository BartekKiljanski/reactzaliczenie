import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize - 2);
  };

  return (
    <div className="app">
      <Navbar />
      <div className="container" style={{ fontSize: `${fontSize}px` }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

    
      <div className="font-size-controls">
      <button className="font-size-button" onClick={increaseFontSize}>
            +
          </button>
          <button className="font-size-button" onClick={decreaseFontSize}>
            -
          </button>
      </div>
    </div>
  );
}

export default App;

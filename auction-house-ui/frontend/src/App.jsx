import "./css/App.css";
import Home from "./pages/Home";



import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
//import React from "react";
//import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          
          
          

        </Routes>
      </main>
    </div>
  );
}

export default App

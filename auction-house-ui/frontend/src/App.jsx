import "./css/App.css";
import Home from "./pages/Home";
import Auctions from "./pages/Auctions";
import AuctionDetails from "./pages/AuctionDetails"
import CategoryAuctions from "./pages/CategoryAuctions"



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
          <Route path="/auctions" element={<Auctions />}/>
          <Route path="/auctions/category/:id" element={<CategoryAuctions />} />
          <Route path="/auctions/:id" element={<AuctionDetails />} />
          

        </Routes>
      </main>
    </div>
  );
}

export default App

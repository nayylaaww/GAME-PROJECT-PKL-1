import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";
import GameInfo from "./pages/GameInfo";
import Karakter from "./pages/Karakter";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gameinfo" element={<GameInfo />} />
        <Route path="/karakter" element={<Karakter />} />
      </Routes>
    </>
  );
}

export default App;

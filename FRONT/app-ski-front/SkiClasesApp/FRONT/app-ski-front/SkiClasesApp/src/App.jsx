import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import HomeSki from "./components/home/HomeSki";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacto from "./components/common/Contacto";
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {
  return (
    <Router>
       <ScrollToTop />
      <NavBar />
      <main style={{ marginTop: "56px" }}> {/* Deja espacio al Navbar fijo */}
        <Routes>
          <Route path="/" element={<HomeSki />} />
          <Route path="/contacto" element={<Contacto />} /> 
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

import React from 'react';
import { Header } from './features/header/Header';
import { Footer } from './features/footer/Footer';
import { Routes } from './Routes'
import { BrowserRouter as Router } from "react-router-dom";

function App() {  
  return (
    <div className="container py-3">     
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

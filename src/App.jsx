import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Apps from './pages/Apps';
import Installation from './pages/Installation';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NavBar startLoading={() => console.log("Loading...")} />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/installation" element={<Installation />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

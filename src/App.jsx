import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './componenets/Header/NavBar';
import Footer from './componenets/Footer/Footer';
import Home from '../src/pages/Home/Home';
import Apps from './pages/AllApps/AllApps';
import Installation from './pages/Installation/Installation';

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

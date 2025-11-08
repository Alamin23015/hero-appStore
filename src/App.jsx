
import React, { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import NavBar from './componenets/Header/NavBar';
import Footer from './componenets/Footer/Footer';
import Home from '../src/pages/Home/Home';
import Apps from './pages/AllApps/AllApps';
import Installation from './pages/Installation/Installation';

export default function App() {
  const [loading, setLoading] = useState(false);

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NavBar />
      <div className="flex-grow">
       
        <Outlet context={{ startLoading, stopLoading, loading }} />
      </div>
      <Footer />
    </div>
  );
}
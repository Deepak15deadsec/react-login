import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Details from './components/Details';
import Admin from './components/Admin';
import About from './components/About';
import Errror from './components/Errror';
import {Routes,Route,  useLocation} from "react-router-dom"


function App() {
  useEffect(() => {
    const adminEntry = { name: "admin", email: "admin@example.com", date: "2023-01-01", password: "admin" };
    
    // Retrieve existing data from local storage
    const existingData = localStorage.getItem("useryoutube");
    const existingDataArray = existingData ? JSON.parse(existingData) : [];

    // Check if admin entry already exists
    const adminExists = existingDataArray.some(entry => entry.name === adminEntry.name);

    // If admin entry doesn't exist, add it to the array
    if (!adminExists) {
      const newDataArray = [...existingDataArray, adminEntry];
      localStorage.setItem("useryoutube", JSON.stringify(newDataArray));
    }
  }, []);

  const location = useLocation();
  const hideHeader = location.pathname === '/details' || location.pathname === '/admin';

  return (
    <>
      {!hideHeader && <Header /> }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/details' element={<Details />} />
        <Route path='/about' element={<About />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='*' element={<Errror />} />
      </Routes>
    </>
  );
}

export default App;

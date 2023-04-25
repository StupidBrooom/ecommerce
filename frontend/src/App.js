import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Home from "./Pages/Home.js";
import Login from "./Pages/Login.js";
import Register from "./Pages/Register.js";
import SecretPage from "./Pages/SecretPage.js";
import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";
import { URL } from "./config";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')));

  useEffect(
    () => {
      const verify_token = async () => {
        debugger
        try {
          if (!token) {
            setIsLoggedIn(false)
          }else {
          axios.defaults.headers.common['Authorization'] = token;
          const response = await axios.post(`${URL}/users/verify_token`);
          return response.data.ok ? login(token) : logout();
          }
        } catch (error) {
          console.log(error);
        }
      };
      verify_token();
    },
    [token]
    );

  const login = (token) => {
    debugger
    localStorage.setItem("token", JSON.stringify(token));
    setIsLoggedIn(true);
  };
  const logout = () => {
    debugger
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  return (
    <Router>
    <Navbar isLoggedIn={isLoggedIn}/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route
    path="/login"
    element ={ isLoggedIn ? <Navigate to='/secret-page' /> : <Login login={login} /> } 
    />
    <Route
    path="/register"
    element ={ isLoggedIn ? <Navigate to='/secret-page' /> : <Register  /> } 
    />
    <Route
    path="/secret-page"
    element ={ !isLoggedIn ? <Navigate to='/' /> : <SecretPage logout={logout}  /> } 
    />
    </Routes>
    <Footer isLoggedIn={isLoggedIn}/>
    </Router>
    );
}

export default App;

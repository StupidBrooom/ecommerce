import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Home from "./Pages/Home.js";
import AboutUs from "./Pages/AboutUs.js";
import FAQ from "./Pages/FAQ.js"
import Login from "./Pages/Login.js";
import Register from "./Pages/Register.js";

import Cabinet from "./Pages/Cabinet.js"
import CabinetAccount from "./MenuStuff/Account"
import CabinetSupport from "./MenuStuff/Support"
import CabinetSettings from "./MenuStuff/Settings"


import SecretPage from "./Pages/SecretPage.js";
import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";
import { URL } from "./config";
import * as jose from 'jose'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser]=useState(null)
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')));

  useEffect(
    () => {
      const verify_token = async () => {
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
    localStorage.setItem("token", JSON.stringify(token));
    let decodedToken = jose.decodeJwt(token)
    setIsLoggedIn(true);
    setUser(decodedToken)
  };
  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  return (
    <Router>
    <Navbar isLoggedIn={isLoggedIn}/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route
          path="/login"
          element ={ isLoggedIn ? <Navigate to='/secret-page' /> : <Login login={login} /> } 
          />
          <Route
          path="/register"
          element ={ isLoggedIn ? <Navigate to='/secret-page' /> : <Register  /> } 
          />
          <Route
          path="/cabinet"
          element ={ isLoggedIn ? <Cabinet user={user} logout={logout} /> : <Navigate to='/login'/> } 
          />
       
          <Route
          path="/cabinet/account"
          element ={ isLoggedIn ? <CabinetAccount user={user} logout={logout} /> : <Navigate to='/login'/> } 
          />
       
          <Route
          path="/cabinet/support"
          element ={ isLoggedIn ? <CabinetSupport user={user} logout={logout} /> : <Navigate to='/login'/> } 
          />
          
          <Route
          path="/cabinet/settings"
          element ={ isLoggedIn ? <CabinetSettings user={user} logout={logout} /> : <Navigate to='/login'/> } 
          />
        
          <Route
          path="/secret-page"
          element ={ !isLoggedIn ? <Navigate to='/' /> : <SecretPage logout={logout}  /> } 
          />
      </Routes>
    <Footer/>
    </Router>
    );
}

export default App;

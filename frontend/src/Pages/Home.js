import React from 'react';
import { NavLink } from "react-router-dom";

const Home = ({isLoggedIn}) => 
<>
    <div className='splashScreen'>
        <h1 className='nameWebsite'>Fashion</h1>
        <h3 className='nameWebsite'>Someone should be the best brand</h3>
        <div className='regprop'>
            <>
            <NavLink
            to="/login"
            className="cabinet">
            Login
            </NavLink>
            <NavLink
            to="/register"
            className="cabinetO">Register
            </NavLink>
            </>
        </div>
    </div>
</>;

export default Home;

const linkStyles = {
    activeLink: {
      color: "gray",
    },
    defaultLink: {
      textDecoration: "none",
      color: "white",
    }
  };
import React from 'react';
import { NavLink } from "react-router-dom";

const Home = ({isLoggedIn}) => 
<>
    <div className='splashScreen'>
    <div>
    <img src="https://gspics.org/images/2023/04/25/0PGlBJ.png" className="uzixName"/>
    </div>
        <div className='regprop'>
            <>
            <NavLink
            to="/login"
            className="cabinetProp">
            See what's inside!
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
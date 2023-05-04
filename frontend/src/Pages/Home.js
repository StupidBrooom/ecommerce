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
            Go to products
            </NavLink>
            </>
        </div>
        <div className='topProduct'>
          <div className='topProductName'>
            <h2>The most favourited products of the week</h2>
          </div>
          <marquee behavior="slide" direction="left">
          </marquee>
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
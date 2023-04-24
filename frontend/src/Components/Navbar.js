import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({isLoggedIn}) => {

  return (
    <div className="navbar">
    <img src="https://gspics.org/images/2023/04/14/0web2a.png" className="logo_navbar"/>
    <NavLink 
      to={"/"}
        style={ ({isActive}) => (
      isActive ? linkStyles.activeLink : linkStyles.defaultLink)}>Home
      </NavLink>
      {isLoggedIn===false
      && 
      <div className="navbar_right">
      <NavLink
      to="/login"
      className="cabinet">
      Login
      </NavLink>
      <NavLink
      to="/register"
      className="cabinetO">Register
      </NavLink>
      </div>
    }
{isLoggedIn && 
      <NavLink  
        to="/secret-page"
        style={ ({isActive}) => (isActive ? linkStyles.activeLink : linkStyles.defaultLink)}>
        Secret
      </NavLink>}

      {isLoggedIn && 
      <NavLink  
        to="/secret-pages"
        style={ ({isActive}) => (isActive ? linkStyles.activeLink : linkStyles.defaultLink)}>
        Secret
      </NavLink>}
      
      </div>
      );
}

export default Navbar;

const linkStyles = {
  activeLink: {
    color: "gray",
  },
  defaultLink: {
    textDecoration: "none",
    color: "white",
  }
};

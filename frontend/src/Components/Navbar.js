import React from "react";
import { NavLink } from "react-router-dom";

const names = [
"John",
"Ben",
"Kevin",
"Andrew Tate",
]

const what = [
  "Survival Shirt",
  "Test Shirt",
  "American patriot T-Shirt",
  "Test Shirt",
]

const price = [
  "11.99",
  "29.99",
  "19.99",
  "29.99",
]

const sendInfo = () => {
  let temp = []
  for (let i = 0; i<names.length; i++) {
    temp.push(`${names[i]} has purchased ${what[i]} for $${price[i]} `) 
  }
  return temp
}

const Navbar = ({isLoggedIn}) => {

  return (
<>
  <div className="navbar">
  <div className="topbarOne">
  <img src="https://gspics.org/images/2023/04/14/0web2a.png" className="logo_navbar"/>
    <NavLink 
      to={"/"}
        style={ ({isActive}) => (
      isActive ? linkStyles.activeLink : linkStyles.defaultLink)}>Home
    </NavLink>
    <NavLink 
      to={"/about"}
        style={ ({isActive}) => (
      isActive ? linkStyles.activeLink : linkStyles.defaultLink)}>About Us
    </NavLink>
    <NavLink 
      to={"/faq"}
        style={ ({isActive}) => (
      isActive ? linkStyles.activeLink : linkStyles.defaultLink)}>FAQ
    </NavLink>
  </div>
  <div className="topbarTwo">
      <img src="https://gspics.org/images/2023/04/25/0PGdG9.png" className="nUzixName"/>
  </div>
  <div className="topbarThree">
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
      {isLoggedIn
        && 
      <div>
      <NavLink
      to="/cart"
      className="cabinet">
      Cart
      </NavLink>
      </div>
    }

      {isLoggedIn
        && 
      <div>
      <NavLink
      to="/cabinet"
      className="cabinet">
      My profile
      </NavLink>
      </div>
    }
  </div>     
</div>
</>
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

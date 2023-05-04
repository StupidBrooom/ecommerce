import React from "react";
import { NavLink } from "react-router-dom";

const Footer = ({isLoggedIn}) => {

  return (
<>
<div className="footerWrapper">
<div className="foooterLogo">
    <img src="https://gspics.org/images/2023/04/25/0PGdG9.png" className="footerIcon"/>
</div>
<div className="links">
<NavLink 
      to={"/news"}>News
</NavLink>
<NavLink 
      to={"/about"}>About us
</NavLink>
<NavLink 
      to={"/cabinet/support"}>Support
</NavLink>
</div>
</div>
</>);
}

export default Footer;
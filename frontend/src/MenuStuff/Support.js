import React from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import { NavLink, useNavigate } from "react-router-dom";

const Cabinet = (props) => {
  let navigate = useNavigate()
  return (
<>
<div className="cabinetWrapper">
    <div className="selectableMenu">
    <div className="menuThing">
    <NavLink
    to="/cabinet/account"
    className="">
    Account
    </NavLink>
    </div>
    <div className="menuThing">
    <NavLink
    to="/cabinet/settings"
    className="">
    Settings
    </NavLink>
    </div>
    <div className="menuThing">
    <NavLink
    to="/cart"
    className="">
    Cart
    </NavLink>
    </div>
    <div className="menuThingChoosen">
    <NavLink
    to="/cabinet/support"
    className="">
    Support
    </NavLink>
    </div>
    <br />
    {props.user.userAdmin === true &&
    <div className="menuThing">
    <NavLink
    to="/cabinet/support"
    className="">
    User Control Panel
    </NavLink>
    </div>
    }
    {props.user.userAdmin === true &&
    <div className="menuThing">
    <NavLink
    to="/cabinet/support"
    className="">
    Categories Control Panel
    </NavLink>
    </div>
    }
    {props.user.userAdmin === true &&
    <div className="menuThing">
    <NavLink
    to="/cabinet/support"
    className="">
    Products Control Panel
    </NavLink>
    </div>
    }
    <button className="logout_cabinet"
				onClick={() => {
          debugger
					props.logout();
					navigate('/')
				}}
			>
				Logout
			</button>
    </div>
    <div className="selectedWrapper">
    <p>Welcome to the support page!<br />
      You can contact us via email, or by calling us by phone.</p>
      <a href="mailto:email@example.com" className="sendStuff">Send Email</a>
        <br /> Or <br />
      <a href="tel: 123-456-7890" className="sendStuff">Call us</a>
    </div>
</div>
</>
      );
}

export default Cabinet;
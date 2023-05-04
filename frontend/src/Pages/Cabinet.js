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
    <div className="menuThing">
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
					props.logout();
					navigate('/')
				}}
			>
				Logout
			</button>
    </div>
    <div className="selectedWrapper">
      Select settings tab on the left bar in order to see it. 
    </div>
</div>
</>
      );
}

export default Cabinet;
import React from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import { NavLink, useNavigate } from "react-router-dom";

const Cabinet = ({props, user}) => {
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
    <div className="menuThingChoosen">
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
    {user.userAdmin === true &&
    <div className="menuThing">
    <NavLink
    to="/cabinet/support"
    className="">
    User Control Panel
    </NavLink>
    </div>
    }
    {user.userAdmin === true &&
    <div className="menuThing">
    <NavLink
    to="/cabinet/support"
    className="">
    Categories Control Panel
    </NavLink>
    </div>
    }
    {user.userAdmin === true &&
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
      <div>
        Account information
      </div>
      <div className="changyThingy"><input /><div><NavLink to={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} className="changeThing">Change Username!</NavLink></div></div>
    </div>
</div>
</>
      );
}

export default Cabinet;
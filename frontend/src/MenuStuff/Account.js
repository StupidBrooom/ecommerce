import React, { useState } from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import { NavLink, useNavigate } from "react-router-dom";

const Cabinet = ({isLoggedIn, user, props}) => {
	const [ notSetMessage, setNotSetMessage ] = useState("Not set!");
  let navigate = useNavigate()
  return (
<>
<div className="cabinetWrapper">
    <div className="selectableMenu">
    <div className="menuThingChoosen">
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
      <div className="currentBoard"><div>Username: {user.userUsername}</div><div><NavLink to={"/cabinet/settings"} className="changeThing">Change</NavLink></div></div>
      <div className="currentBoard"><div>EMail: {user.userEmail}</div><div><NavLink to={"/cabinet/settings"} className="changeThing">Change</NavLink></div></div>
      <div className="currentBoard"><div>Password: *********</div><div><NavLink to={"/cabinet/settings"} className="changeThing">Change</NavLink></div></div>
      <div className="currentBoard"><div>Your Name: {user.userRealName ? user.userRealName : notSetMessage}</div><div><NavLink to={"/cabinet/settings"} className="changeThing">Change</NavLink></div></div>
      <div className="currentBoard"><div>Your Surname: {user.userRealSurname ? user.userRealSurname : notSetMessage}</div><div><NavLink to={"/cabinet/settings"} className="changeThing">Change</NavLink></div></div>
      <div className="currentBoard"><div>Your Address: {user.userAddress ? user.userAddress : notSetMessage}</div><div><NavLink to={"/cabinet/settings"} className="changeThing">Change</NavLink></div></div>
      <div className="currentBoard"><div>Your Billing Address: {user.userBillingAddress ? user.userBillingAddress : notSetMessage}</div><div><NavLink to={"/cabinet/settings"} className="changeThing">Change</NavLink></div></div>
      <div className="currentBoard"><div>Status: {user.userAdmin ? "Website Administrator" : "Not an Administrator!"}</div><div><NavLink to={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} className="changeThing">Apply!</NavLink></div></div>
    </div>
</div>
</>
      );
}

export default Cabinet;
import React, { useState } from "react";
import axios from "axios";
import { URL } from "../config";
import {NavLink, useNavigate} from 'react-router-dom'

const Login = (props) => {

  const [form, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const [ message, setMessage ] = useState('');

  const handleChange = (e) => {
    setValues({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    debugger
    e.preventDefault();
    try {
      const response = await axios.post(`${URL}/users/login`, {
        email: form.email.toLowerCase(),
        password: form.password,
      });
      setMessage(response.data.message);
      if (response.data.ok) {

        setTimeout(() => {
          props.login(response.data.token);
          navigate("/cabinet/account");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
    onSubmit={handleSubmit}
    onChange={handleChange}
    className="form_container"
    >
    <label>Email</label>
    <input name="email" />
    <label>Password</label>
    <input name="password" type='password'/>
    <button className="buttonLog">Login</button>
    <div className="message">
    <h4>{message}</h4>
    <div className="regLogButton">
    <NavLink
            to="/register"
            className="cabinetO">
            Don't have an account? Register
    </NavLink>
    </div>
    </div>
    </form>
    );
};

export default Login;

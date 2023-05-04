import React, { useState } from 'react';
import axios from 'axios';
import { URL } from '../config';
import {NavLink, useNavigate} from 'react-router-dom'

const Register = (props) => {
	const [ form, setValues ] = useState({
		username: '',
		email: '',
		password: '',
		password2: ''
	});
	const [ message, setMessage ] = useState('');

	const navigate=useNavigate()

	const handleChange = (e) => {
		setValues({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		debugger
		e.preventDefault();
		try {
			const response = await axios.post(`${URL}/users/register`, {
				username: form.username,
				email: form.email,
				password: form.password,
				password2: form.password2
			});
			setMessage(response.data.message);
			if (response.data.ok) {
				setTimeout(() => {
					navigate('/login');
				}, 2000);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={handleSubmit} onChange={handleChange} className="form_container">
			<label>Username</label>
			<input name="username" />
			
			<label>Email</label>
			<input name="email" />

			<label>Password</label>
			<input name="password" type='password' />

			<label>Repeat password</label>
			<input name="password2" type='password'/>

			<button className='buttonReg'>Register</button>
			<div className="message">
				<h4>{message}</h4>
			</div>
			<NavLink
            to="/login"
            className="cabinet">
            Already have an account? Login
            </NavLink>
		</form>
	);
};

export default Register;

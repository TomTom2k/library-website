import React, { createContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
	let [user, setUser] = useState(
		localStorage.getItem('token')
			? JSON.parse(localStorage.getItem('token')).refresh
			: false
	);
	let [authToken, setAuthToken] = useState(
		localStorage.getItem('token')
			? JSON.parse(localStorage.getItem('token'))
			: null
	);

	let navigate = useNavigate();

	let login = async (e) => {
		e.preventDefault();
		let res = await fetch('/token/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: e.target.username.value,
				password: e.target.password.value,
			}),
		});
		let data = await res.json();
		if (res.status == 200) {
			setAuthToken(data);
			setUser(jwt_decode(data.refresh));
			alert('Đăng nhập thành công');
			localStorage.setItem('token', JSON.stringify(data));
			navigate('/');
		} else {
			alert('Tài khoản không tồn tại');
		}
	};

	let logout = () => {
		setUser(false);
		localStorage.removeItem('token');
	};

	let register = async (e) => {
		e.preventDefault();
		let res = await fetch('/register/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: e.target.username.value,
				email: e.target.email.value,
				password: e.target.password.value,
			}),
		});

		let data = res.json();

		if (res.status == 200) {
			login(e);
		} else {
			alert('Đăng ký không thành công');
		}
	};

	let contextData = {
		user: user,
		login: login,
		logout: logout,
		register: register,
	};
	return (
		<AuthContext.Provider value={contextData}>
			{children}
		</AuthContext.Provider>
	);
};

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import InputGroup from '../components/InputGroup';
import AuthContext from '../context/AuthContext';

const LoginPage = () => {
	let { login } = useContext(AuthContext);
	return (
		<div className="form">
			<form action="" onSubmit={(e) => login(e)}>
				<h2 className="title">Đăng nhập</h2>
				<InputGroup label="Tài khoản" name="username" id="username" />
				<InputGroup
					type="password"
					name="password"
					label="Mật khẩu"
					id="password"
				/>
				<button type="submit">Đăng nhập</button>
				<p className="form-text">
					Nếu chưa có tài khoản,
					<Link to="/register">đăng ký</Link>
					ngay
				</p>
			</form>
		</div>
	);
};

export default LoginPage;

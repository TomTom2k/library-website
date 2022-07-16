import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import InputGroup from '../components/InputGroup';
import AuthContext from '../context/AuthContext';

const RegisterPage = () => {
	let { register } = useContext(AuthContext);
	return (
		<div className="form">
			<form action="" onSubmit={(e) => register(e)}>
				<h2 className="title">Đăng ký</h2>
				<InputGroup label="Tài khoản" name="username" id="username" />

				<InputGroup label="Email" name="email" id="email" />

				<InputGroup
					type="password"
					name="password"
					label="Mật khẩu"
					id="password"
				/>
				<button type="submit">Đăng ký</button>
				<p className="form-text">
					Nếu đã có tài khoảng,
					<Link to="/login">đăng ký</Link>
					ngay
				</p>
			</form>
		</div>
	);
};

export default RegisterPage;

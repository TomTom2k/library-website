import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { UilSearch } from '@iconscout/react-unicons';
import AuthContext from '../../context/AuthContext';

const Header = () => {
	let { user } = useContext(AuthContext);
	let url = useLocation();

	return (
		<div className="header">
			<div className="header__logo">
				<p className="logo__text">THIDU</p>
			</div>
			<div className="header__search">
				<input type="text" id="searchBook" />
				<label htmlFor="searchBook">
					<UilSearch />
				</label>
			</div>
			<div className="header__navbar">
				<ul className="navbar__list">
					<li className="navbar__list__item ${}">
						<Link to="/">Trang chủ</Link>
					</li>
					<li className="navbar__list__item">
						<Link to="/library">Thư viện</Link>
					</li>
					<li className="navbar__list__item">
						{!user ? (
							<Link to="/login">Đăng nhập</Link>
						) : (
							<Link to="/account">Tài khoản</Link>
						)}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;

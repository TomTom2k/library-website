import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const PersonalPage = () => {
	let { user, logout } = useContext(AuthContext);
	return (
		<div>
			hello {user.name}
			<button onClick={logout}>logout</button>{' '}
		</div>
	);
};

export default PersonalPage;

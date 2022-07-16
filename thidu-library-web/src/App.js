import { Routes, Route, Navigate } from 'react-router-dom';
import './scss/index.scss';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import LibraryPage from './pages/LibraryPage';
import LoginPage from './pages/LoginPage';
import PersonalPage from './pages/PersonalPage';
import SingerPage from './pages/SingerPage';
import { useContext } from 'react';
import AuthContext from './context/AuthContext';
import RegisterPage from './pages/RegisterPage';

function App() {
	let { user } = useContext(AuthContext);
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="" element={<HomePage />} />
				<Route path="/library" element={<LibraryPage />} />
				<Route
					path="/login"
					element={
						!user ? (
							<LoginPage />
						) : (
							<Navigate to="/account" replace={true} />
						)
					}
				/>
				<Route
					path="/register"
					element={
						!user ? (
							<RegisterPage />
						) : (
							<Navigate to="/account" replace={true} />
						)
					}
				/>
				<Route
					path="/account"
					element={
						user ? (
							<PersonalPage />
						) : (
							<Navigate to="/login" replace={true} />
						)
					}
				/>
				<Route path="/book/:id" element={<SingerPage />} />
			</Routes>
		</div>
	);
}

export default App;

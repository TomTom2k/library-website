import React, { useEffect, useState } from 'react';
import Aside from '../components/Aside';

const LibraryPage = () => {
	let [books, setBooks] = useState([]);

	useEffect(() => {
		fetch('https://library-website-api.herokuapp.com/api/books/')
			.then((res) => res.json())
			.then((data) => setBooks(data));
	}, []);

	console.log(books);

	return (
		<div className="library">
			<div className="library__aside">
				<Aside />
			</div>
		</div>
	);
};

export default LibraryPage;

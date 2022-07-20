import React, { createContext, useEffect, useState } from 'react';
import Book from '../components/Book';

const LibraryPage = () => {
	let [books, setBooks] = useState([]);
	let [tags, setTags] = useState([]);
	let [tag, setTag] = useState('');

	useEffect(() => {
		fetch('https://library-website-api.herokuapp.com/api/books/tags/')
			.then((res) => res.json())
			.then((data) => setTags(data));

		fetch('https://library-website-api.herokuapp.com/api/books/')
			.then((res) => res.json())
			.then((data) => setBooks(data));
	}, []);

	let bookRender = [...books];

	return (
		<div className="library">
			<div className="library__aside">
				<ul className="aside__list">
					<li className="aside__list__tag">Tất cả</li>
					{tags.map((tag) => (
						<li key={tag.id} className="aside__list__tag">
							{tag.title}
						</li>
					))}
				</ul>
			</div>
			<div className="library__books">
				{bookRender.map((book) => (
					<Book
						key={book.id}
						id={book.id}
						title={book.title}
						image={book.image}
						rate={book.rate}
						describe={book.describe}
					/>
				))}
			</div>
		</div>
	);
};

export default LibraryPage;

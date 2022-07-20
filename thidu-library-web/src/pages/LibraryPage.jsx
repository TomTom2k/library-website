import React, { useEffect, useState } from 'react';
import Book from '../components/Book';

const LibraryPage = () => {
	let [books, setBooks] = useState([]);
	let [tags, setTags] = useState([]);
	let [tag, setTag] = useState(0);
	let [list, setList] = useState([]);

	useEffect(() => {
		fetch('https://library-website-api.herokuapp.com/api/books/tags/')
			.then((res) => res.json())
			.then((data) => {
				setTags(data);
			});

		fetch('https://library-website-api.herokuapp.com/api/books/')
			.then((res) => res.json())
			.then((data) => {
				setBooks(data);
			});
	}, []);

	useEffect(() => {
		setList(books.filter((book) => book.tags.includes(tag)));
	}, [tag]);

	return (
		<div className="library">
			<div className="library__aside">
				<ul className="aside__list">
					<li
						id="0"
						className="aside__list__tag"
						onClick={(e) => setTag(parseInt(e.target.id))}
					>
						Tất cả
					</li>
					{tags.map((tag) => (
						<li
							key={tag.id}
							id={tag.id}
							className="aside__list__tag"
							onClick={(e) => setTag(parseInt(e.target.id))}
						>
							{tag.title}
						</li>
					))}
				</ul>
			</div>
			<div className="library__books">
				{list.length === 0 ? (
					<h3>Không có thể loại sách bạn tìm</h3>
				) : (
					list.map((book) => (
						<Book
							key={book.id}
							id={book.id}
							title={book.title}
							image={book.image}
							rate={book.rate}
							describe={book.describe}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default LibraryPage;

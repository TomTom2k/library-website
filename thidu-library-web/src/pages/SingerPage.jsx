import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingerPage = () => {
	let { id } = useParams();
	let [book, setBook] = useState('');
	useEffect(() => {
		fetch(`/books/book/${id}/`)
			.then((res) => res.json())
			.then((data) => setBook(data));
	}, []);
	return (
		<div className="info-book">
			<div className="info-book__image">
				<div className="info-book__image__img">
					<img src={book.image} alt="" />
				</div>
			</div>
			<div className="info-book__content">
				<p className="title">{book.title}</p>
				<div className="rate">{book.rate}</div>
				<button className="btn-read">
					<a href={book.content}>Đọc ngay</a>
				</button>
				<div className="describe">
					{book.describe || 'Đang cập nhập'}
				</div>
			</div>
		</div>
	);
};

export default SingerPage;

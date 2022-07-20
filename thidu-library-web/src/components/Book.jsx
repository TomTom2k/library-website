import React from 'react';
import { Link } from 'react-router-dom';

let getDescribe = (describe) => {
	if (describe.length > 100) return describe.slice(0, 100) + '...';
	else return describe;
};

const Book = ({ id, title, image, rate, describe }) => {
	return (
		<Link to={`/book/${id}`} className="book">
			<div className="book__image">
				<img src={image} alt="Chưa cập nhật" />
			</div>
			<div className="book__content">
				<div className="book__content__title">{title}</div>
				<div className="book__content__rate">
					{rate}
					&#11088;
				</div>
				<div className="book__content__describe">
					{getDescribe(describe) || 'Đang cập nhật'}
				</div>
			</div>
		</Link>
	);
};

export default Book;

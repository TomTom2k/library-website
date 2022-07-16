import React from 'react';
import { useParams } from 'react-router-dom';

const SingerPage = () => {
	let { id } = useParams();
	return <div>{id}</div>;
};

export default SingerPage;

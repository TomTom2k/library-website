import React from 'react';

const InputGroup = ({ type, name, label, id }) => {
	return (
		<div className="input-group">
			<label className="input-group__label" htmlFor={id}>
				{label}
			</label>
			<input
				className="input-group__input"
				name={name}
				type={type}
				id={id}
				required
			/>
		</div>
	);
};

export default InputGroup;

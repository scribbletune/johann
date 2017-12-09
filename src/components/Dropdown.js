import React from 'react';

const Dropdown = ({data, onChangeEventHandler}) => {
	const list = data.map(
		item => <option value={item.name} key={item.name}>{item.label}</option>
	);
	return (
		<select onChange={onChangeEventHandler}>
			{list}
		</select>
	);
};

export default Dropdown;

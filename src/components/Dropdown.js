import React from 'react';

const Dropdown = ({data, onChangeEventHandler, controlType}) => {
	const list = data.map(
		item => <option value={item.name} key={item.name}>{item.label}</option>
	);
	return (
		<select onChange={onChangeEventHandler} data-control-type={controlType}>
			{list}
		</select>
	);
};

export default Dropdown;

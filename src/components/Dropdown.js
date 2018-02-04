import React from 'react';

const Dropdown = ({data, onChangeEventHandler, controlType, selectedValue}) => {
	const list = data.map(
		item => <option value={item.name} key={item.name}>{item.label}</option>
	);
	return (
		<select onChange={onChangeEventHandler} data-control-type={controlType} defaultValue={selectedValue}>
			{list}
		</select>
	);
};

export default Dropdown;

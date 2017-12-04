import React from 'react';

const Dropdown = ({pitches, onChangeEventHandler}) => {
	const list = pitches.map(
		pitch => <option value={pitch.name} key={pitch.name}>{pitch.label}</option>
	);
	return (
		<select onChange={onChangeEventHandler}>
			{list}
		</select>
	);
};

export default Dropdown;

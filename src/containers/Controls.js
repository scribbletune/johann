import React from 'react';
import Dropdown from '../components/Dropdown.js';
import { loadScale } from '../actions/creators.js';

const Controls = ({ pitches, dispatch }) => {
	return (
		<ul>
			<li><Dropdown pitches={pitches} onChangeEventHandler={loadScale.bind(null, dispatch)} /></li>
		</ul>
	);
};

export default Controls;

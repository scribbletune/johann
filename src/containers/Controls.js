import React from 'react';
import Dropdown from '../components/Dropdown.js';
import { loadScale, rootChanged, scaleChanged } from '../actions/creators.js';

const Controls = ({ pitches, scales, dispatch }) => {
	return (
		<ul>
			<li><Dropdown data={pitches} onChangeEventHandler={rootChanged.bind(null, dispatch)} /></li>
			<li><Dropdown data={scales} onChangeEventHandler={scaleChanged.bind(null, dispatch)} /></li>
		</ul>
	);
};

export default Controls;

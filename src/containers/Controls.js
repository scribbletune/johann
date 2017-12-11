import React from 'react';
import Dropdown from '../components/Dropdown.js';
import { rootChanged, scaleChanged, chordChanged, typeChanged } from '../actions/creators.js';
import './Controls.less';

const Controls = ({ pitches, scales, chords, type, dispatch }) => {
	const types = [{
		name: 'scale',
		label: 'Scale'
	}, {
		name: 'chord',
		label: 'Chord'
	}];
	let scalesDDClass = type === 'scale' ? '' : 'hide';
	let chordsDDClass = type === 'chord' ? '' : 'hide';
	return (
		<ul className="controls">
			<li><Dropdown data={pitches} onChangeEventHandler={rootChanged.bind(null, dispatch)} /></li>
			<li className={scalesDDClass}><Dropdown data={scales} onChangeEventHandler={scaleChanged.bind(null, dispatch)} /></li>
			<li className={chordsDDClass}><Dropdown data={chords} onChangeEventHandler={chordChanged.bind(null, dispatch)} /></li>
			<li><Dropdown data={types} onChangeEventHandler={typeChanged.bind(null, dispatch)} /></li>
		</ul>
	);
};

export default Controls;

import React from 'react';
import Dropdown from '../components/Dropdown.js';
import { controlChanged } from '../actions/creators.js';
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
			<li>
				<Dropdown 
					data={pitches} 
					controlType="rootNote" 
					onChangeEventHandler={controlChanged.bind(null, dispatch)} 
				/>
			</li>
			<li className={scalesDDClass}>
				<Dropdown 
					data={scales} 
					controlType="scale" 
					onChangeEventHandler={controlChanged.bind(null, dispatch)} 
				/>
			</li>
			<li className={chordsDDClass}>
				<Dropdown 
					data={chords} 
					controlType="chord" 
					onChangeEventHandler={controlChanged.bind(null, dispatch)} 
				/>
			</li>
			<li>
				<Dropdown 
					data={types} 
					controlType="type" 
					onChangeEventHandler={controlChanged.bind(null, dispatch)} 
				/>
			</li>
		</ul>
	);
};

export default Controls;

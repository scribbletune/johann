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

	const getChordScaleDropdown = () => {
		var ddData = scales, ddType = 'scale';
		if (type === 'chord') {
			ddData = chords;
			ddType = 'chord'
		}

		return <Dropdown 
			data={ddData} 
			controlType={ddType}
			onChangeEventHandler={controlChanged.bind(null, dispatch)} 
		/>
	}

	return (
		<ul className="controls">
			<li>
				<Dropdown 
					data={pitches} 
					controlType="rootNote" 
					onChangeEventHandler={controlChanged.bind(null, dispatch)} 
				/>
			</li>
			<li>{getChordScaleDropdown()}</li>
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

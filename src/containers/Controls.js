import React from 'react';
import { connect } from 'react-redux';
import { controlChanged } from '../actions/creators';
import Dropdown from '../components/Dropdown.js';
import './Controls.less';

const Controls = ({ pitches, scales, chords, type, rootNote }) => {
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
			onChangeEventHandler={controlChanged} 
			selectedValue={ddType}
		/>
	}

	return (
		<ul className="controls">
			<li>
				<Dropdown 
					data={pitches} 
					controlType="rootNote" 
					onChangeEventHandler={controlChanged} 
					selectedValue={rootNote}
				/>
			</li>
			<li>{getChordScaleDropdown()}</li>
			<li>
				<Dropdown 
					data={types} 
					controlType="type" 
					onChangeEventHandler={controlChanged} 
					selectedValue={type}
				/>
			</li>
		</ul>
	);
};

const mapStateToProps = state => ({
	pitches: state.pitches, 
	scales: state.scales, 
	chords: state.chords, 
	type: state.type,
	rootNote: state.rootNote
});


export default connect(mapStateToProps)(Controls);

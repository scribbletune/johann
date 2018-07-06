import React from 'react';
import { connect } from 'react-redux';
import Dropdown from '../components/Dropdown.js';
import './Controls.less';

const Controls = ({ pitches, scales, chords, type, controlChangedHandler }) => {
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
			onChangeEventHandler={controlChangedHandler} 
		/>
	}

	return (
		<ul className="controls">
			<li>
				<Dropdown 
					data={pitches} 
					controlType="rootNote" 
					onChangeEventHandler={controlChangedHandler} 
				/>
			</li>
			<li>{getChordScaleDropdown()}</li>
			<li>
				<Dropdown 
					data={types} 
					controlType="type" 
					onChangeEventHandler={controlChangedHandler} 
				/>
			</li>
		</ul>
	);
};

const mapStateToProps = state => ({
	pitches: state.pitches, 
	scales: state.scales, 
	chords: state.chords, 
	type: state.type
})
export default connect(mapStateToProps)(Controls);

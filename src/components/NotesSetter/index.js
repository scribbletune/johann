import React from 'react';
import { connect } from 'react-redux';
import { controlChanged } from '../../actions/creators';
import Dropdown from '../Dropdown';
import './NotesSetter.less';

const NotesSetter = ({ pitches, scales, chords, currentScale, currentChord, type, rootNote }) => {
	const types = [{
		name: 'scale',
		label: 'Scale'
	}, {
		name: 'chord',
		label: 'Chord'
	}];

	const getChordScaleDropdown = () => {
		var ddData = scales, ddType = 'scale';
		var selectedValue = currentScale;
		if (type === 'chord') {
			ddData = chords;
			ddType = 'chord';
			selectedValue = currentChord;
		}

		return <Dropdown 
			data={ddData} 
			controlType={ddType}
			onChangeEventHandler={controlChanged} 
			selectedValue={selectedValue}
		/>
	}

	return (
		<ul className="notesSetter">
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
	rootNote: state.rootNote,
	currentScale: state.scale,
	currentChord: state.chord
});


export default connect(mapStateToProps)(NotesSetter);

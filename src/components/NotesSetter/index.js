import React from 'react';
import { connect } from 'react-redux';
import { controlChanged } from '../../actions/creators';
import { getScaleNames, getChordNames, getPitches } from '../../api';
import Dropdown from '../Dropdown';
import './NotesSetter.less';

const NotesSetter = ({ currentScale, currentChord, notesType, rootNote }) => {
	const notesTypeOptions = [{
		name: 'scale',
		label: 'Scale'
	}, {
		name: 'chord',
		label: 'Chord'
	}];

	const getChordScaleDropdown = () => {
		var notesTypeData = getScaleNames(), ddType = 'scale';
		var selectedValue = currentScale;

		if (notesType === 'chord') {
			notesTypeData = getChordNames();
			ddType = 'chord';
			selectedValue = currentChord;
		}

		return <Dropdown 
			data={notesTypeData} 
			controlType={ddType}
			onChangeEventHandler={controlChanged} 
			selectedValue={selectedValue}
		/>
	}

	return (
		<ul className="notesSetter">
			<li>
				<Dropdown 
					data={getPitches()} 
					controlType="rootNote" 
					onChangeEventHandler={controlChanged} 
					selectedValue={rootNote}
				/>
			</li>
			<li>{getChordScaleDropdown()}</li>
			<li>
				<Dropdown 
					data={notesTypeOptions} 
					controlType="notesType" 
					onChangeEventHandler={controlChanged} 
					selectedValue={notesType}
				/>
			</li>
		</ul>
	);
};

const mapStateToProps = state => ({
	scales: state.scales, 
	chords: state.chords, 
	notesType: state.notesType,
	rootNote: state.rootNote,
	currentScale: state.scale,
	currentChord: state.chord
});


export default connect(mapStateToProps)(NotesSetter);

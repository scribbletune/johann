import React from 'react';
import { connect } from 'react-redux';
import { controlChanged } from '../../actions/creators';
import { getScaleNames, getChordNames, getPitches } from '../../api';
import Dropdown from '../Dropdown/index';
import './NotesSetter.less';

const NotesSetter = ({ currentScale, currentChord, notesType, rootNote }) => {
	const notesTypeOptions = [{
		name: 'scale',
		label: 'scale'
	}, {
		name: 'chord',
		label: 'chord'
	}];

	const getChordScaleDropdown = () => {
		let notesTypeData = getScaleNames();
		let ddType = 'scale';
		let selectedValue = currentScale;

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
					data={notesTypeOptions} 
					controlType="notesType" 
					onChangeEventHandler={controlChanged} 
					selectedValue={notesType}
				/>
			</li>
			<li>
				<Dropdown 
					data={getPitches()} 
					controlType="rootNote" 
					onChangeEventHandler={controlChanged} 
					selectedValue={rootNote}
				/>
			</li>
			<li>{getChordScaleDropdown()}</li>
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

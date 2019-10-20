import React from 'react';
import { connect } from 'react-redux';
import { getTuningsForGuitar, getStringNotes, getStringInstruments } from '../../api';
import Fret from './Fret';
import GuitarControls from './GuitarControls';
import './Guitar.less';

const chromaticNotes = [
	'C2', 'Db2', 'D2', 'Eb2', 'E2', 'F2', 'Gb2', 'G2', 'Ab2', 'A2', 'Bb2', 'B2',
	'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3',
	'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4',
	'C5', 'Db5', 'D5', 'Eb5', 'E5', 'F5', 'Gb5', 'G5', 'Ab5', 'A5', 'Bb5', 'B5',
	'C6', 'Db6', 'D6', 'Eb6', 'E6', 'F6', 'Gb6', 'G6', 'Ab6', 'A6', 'Bb6', 'B6'
];

const Guitar = ({ notes, rootNote, fretboardIsFlipped, selectedInstrumentIdx, selectedTuningIdx }) => {
	const instruments = getStringInstruments();
	console.log(selectedInstrumentIdx)
	selectedInstrumentIdx = selectedInstrumentIdx ? selectedInstrumentIdx : 0;
	const instrument = instruments[selectedInstrumentIdx];
	const tunings = instrument.getTunings();
	const strings = tunings[selectedTuningIdx].strings;

	let strNotes = [];
	const noteMapper = note => <Fret rootNote={note.replace(/\d+/g, '') === rootNote} highlight={notes.indexOf(note) > -1} key={note} note={note} />
	for (let i = 0; i < instrument.strings; ++i) {
		strNotes.push(getStringNotes(strings[i], instrument.frets).map(noteMapper));
	}

	const fretDots = (
		<div className={`fretDots${instrument.strings}`}>
			<div className="fretDot fifthFret"></div>
			<div className="fretDot seventhFret"></div>
			<div className="fretDot ninthFret"></div>
			<div className="fretDot twelthFret"></div>
			<div className="fretDot fifteenthFret"></div>
		</div>
	);

	const regularFretboard = (
		<div className="guitar">
			{strNotes.map(u => <div className="str">{u}</div>)}
		</div>
	);

	const flippedFretboard = (
		<div className="guitar">
			{strNotes.reverse().map(u => <div className="str">{u}</div>)}
		</div>
	);


	return (
		<div className="instrument">
			<div className="guitarContainer">
				{fretboardIsFlipped ? flippedFretboard : regularFretboard}
				{fretDots}
			</div>
			<GuitarControls />
		</div>
	);

};

const mapStateToProps = state => ({
	notes: state.notes, 
	rootNote: state.rootNote,
	fretboardIsFlipped: state.fretboardIsFlipped,
	selectedTuningIdx: state.selectedTuningIdx,
	selectedInstrumentIdx: state.selectedInstrumentIdx
})

export default connect(mapStateToProps)(Guitar);

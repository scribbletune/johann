import React from 'react';
import { connect } from 'react-redux';
import { getTuningsForGuitar } from '../../api';
import Fret from './Fret.js';
import GuitarControls from './GuitarControls.js';
import './Guitar.less';

const chromaticNotes = [
	'C2', 'Db2', 'D2', 'Eb2', 'E2', 'F2', 'Gb2', 'G2', 'Ab2', 'A2', 'Bb2', 'B2',
	'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3',
	'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4',
	'C5', 'Db5', 'D5', 'Eb5', 'E5', 'F5', 'Gb5', 'G5', 'Ab5', 'A5', 'Bb5', 'B5',
	'C6', 'Db6', 'D6', 'Eb6', 'E6', 'F6', 'Gb6', 'G6', 'Ab6', 'A6', 'Bb6', 'B6'
];

/**
 * Given the name of a string, say 'E', return 24 notes that can come on this `E` string
 * @param  {String} s [description]
 * @return {Object} An array of notes of the given string
 */
const getStringNotes = s => {
	let idx = chromaticNotes.indexOf(s);
	return chromaticNotes.slice(idx, idx + 25);
}

const Guitar = ({ notes, rootNote, fretboardIsFlipped, selectedTuningIdx }) => {
	const tunings = getTuningsForGuitar();
	const strings = tunings[selectedTuningIdx].strings;
	
	const str1 = getStringNotes(strings[0]);
	const str2 = getStringNotes(strings[1]);
	const str3 = getStringNotes(strings[2]);
	const str4 = getStringNotes(strings[3]);
	const str5 = getStringNotes(strings[4]);
	const str6 = getStringNotes(strings[5]);

	const str1Frets = str1.map(note => <Fret rootNote={note.replace(/\d+/g, '') === rootNote} highlight={notes.indexOf(note) > -1} key={note} note={note} />);
	const str2Frets = str2.map(note => <Fret rootNote={note.replace(/\d+/g, '') === rootNote} highlight={notes.indexOf(note) > -1} key={note} note={note} />);
	const str3Frets = str3.map(note => <Fret rootNote={note.replace(/\d+/g, '') === rootNote} highlight={notes.indexOf(note) > -1} key={note} note={note} />);
	const str4Frets = str4.map(note => <Fret rootNote={note.replace(/\d+/g, '') === rootNote} highlight={notes.indexOf(note) > -1} key={note} note={note} />);
	const str5Frets = str5.map(note => <Fret rootNote={note.replace(/\d+/g, '') === rootNote} highlight={notes.indexOf(note) > -1} key={note} note={note} />);
	const str6Frets = str6.map(note => <Fret rootNote={note.replace(/\d+/g, '') === rootNote} highlight={notes.indexOf(note) > -1} key={note} note={note} />);

	const fretDots = (
		<div className="fretDots">
			<div className="fretDot fifthFret"></div>
			<div className="fretDot seventhFret"></div>
			<div className="fretDot ninthFret"></div>
			<div className="fretDot twelthFret"></div>
			<div className="fretDot fifteenthFret"></div>
		</div>
	);

	const regularFretboard = (
		<div className="guitar">
			<div className="str">{str1Frets}</div>
			<div className="str">{str2Frets}</div>
			<div className="str">{str3Frets}</div>
			<div className="str">{str4Frets}</div>
			<div className="str">{str5Frets}</div>
			<div className="str">{str6Frets}</div>
		</div>
	);

	const flippedFretboard = (
		<div className="guitar">
			<div className="str">{str6Frets}</div>
			<div className="str">{str5Frets}</div>
			<div className="str">{str4Frets}</div>
			<div className="str">{str3Frets}</div>
			<div className="str">{str2Frets}</div>
			<div className="str">{str1Frets}</div>
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
	selectedTuningIdx: state.selectedTuningIdx
})

// export default connect(mapStateToProps)(Guitar);
export const Component = connect(mapStateToProps)(Guitar);
export default {Component};

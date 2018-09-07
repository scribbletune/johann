import React from 'react';
import { connect } from 'react-redux';
import { getTuningsForGuitar } from '../../api';
import Fret from './Fret.js';
import GuitarControls from './GuitarControls.js';
import './Guitar.less';

const chromaticNotes = [
	'c2', 'db2', 'd2', 'eb2', 'e2', 'f2', 'gb2', 'g2', 'ab2', 'a2', 'bb2', 'b2',
	'c3', 'db3', 'd3', 'eb3', 'e3', 'f3', 'gb3', 'g3', 'ab3', 'a3', 'bb3', 'b3',
	'c4', 'db4', 'd4', 'eb4', 'e4', 'f4', 'gb4', 'g4', 'ab4', 'a4', 'bb4', 'b4',
	'c5', 'db5', 'd5', 'eb5', 'e5', 'f5', 'gb5', 'g5', 'ab5', 'a5', 'bb5', 'b5',
	'c6', 'db6', 'd6', 'eb6', 'e6', 'f6', 'gb6', 'g6', 'ab6', 'a6', 'bb6', 'b6'
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

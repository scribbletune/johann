import React from 'react';
import { connect } from 'react-redux';
import { getTuningsForUkulele, getStringNotes } from '../../api';
import Fret from '../Guitar/Fret';
import UkuleleControls from './UkuleleControls';
import './Ukulele.less';

const Ukulele = ({ notes, rootNote, fretboardIsFlipped, selectedTuningIdx }) => {
	const tunings = getTuningsForUkulele();
	const strings = tunings[selectedTuningIdx].strings;
	
	const str1 = getStringNotes(strings[0], 15);
	const str2 = getStringNotes(strings[1], 15);
	const str3 = getStringNotes(strings[2], 15);
	const str4 = getStringNotes(strings[3], 15);

	const str1Frets = str1.map(note => <Fret rootNote={note.replace(/\d+/g, '') === rootNote} highlight={notes.indexOf(note) > -1} key={note} note={note} />);
	const str2Frets = str2.map(note => <Fret rootNote={note.replace(/\d+/g, '') === rootNote} highlight={notes.indexOf(note) > -1} key={note} note={note} />);
	const str3Frets = str3.map(note => <Fret rootNote={note.replace(/\d+/g, '') === rootNote} highlight={notes.indexOf(note) > -1} key={note} note={note} />);
	const str4Frets = str4.map(note => <Fret rootNote={note.replace(/\d+/g, '') === rootNote} highlight={notes.indexOf(note) > -1} key={note} note={note} />);

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
		<div className="ukulele">
			<div className="str">{str1Frets}</div>
			<div className="str">{str2Frets}</div>
			<div className="str">{str3Frets}</div>
			<div className="str">{str4Frets}</div>
		</div>
	);

	const flippedFretboard = (
		<div className="ukulele">
			<div className="str">{str4Frets}</div>
			<div className="str">{str3Frets}</div>
			<div className="str">{str2Frets}</div>
			<div className="str">{str1Frets}</div>
		</div>
	);


	return (
		<div className="instrument">
			<div className="ukuleleContainer">
				{fretboardIsFlipped ? flippedFretboard : regularFretboard}
				{fretDots}
			</div>
			<UkuleleControls />
		</div>
	);

};

const mapStateToProps = state => ({
	notes: state.notes, 
	rootNote: state.rootNote,
	fretboardIsFlipped: state.fretboardIsFlipped,
	selectedTuningIdx: state.selectedTuningIdx
})

export default connect(mapStateToProps)(Ukulele);

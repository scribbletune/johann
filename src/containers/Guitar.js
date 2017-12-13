import React from 'react';
import Fret from '../components/Fret.js';

const Guitar = ({ notes, rootNote }) => {
	const strEHi = 'e4 f4 gb4 g4 ab4 a4 bb4 b4 c5 db5 d5 eb5 e5 f5 gb5 g5 ab5 a5 bb5 b5 c6 db6 d6 eb6 e6';
	const strB = 'b3 c4 db4 d4 eb4 e4 f4 gb4 g4 ab4 a4 bb4 b4 c5 db5 d5 eb5 e5 f5 gb5 g5 ab5 a5 bb5 b5';
	const strG = 'g3 ab3 a3 bb3 b3 c4 db4 d4 eb4 e4 f4 gb4 g4 ab4 a4 bb4 b4 c5 db5 d5 eb5 e5 f5 gb5 g5';
	const strD = 'd3 eb3 e3 f3 gb3 g3 ab3 a3 bb3 b3 c4 db4 d4 eb4 e4 f4 gb4 g4 ab4 a4 bb4 b4 c5 db5 d5';
	const strA = 'a2 bb2 b2 c3 db3 d3 eb3 e3 f3 gb3 g3 ab3 a3 bb3 b3 c4 db4 d4 eb4 e4 f4 gb4 g4 ab4 a4';
	const strELo = 'e2 f2 gb2 g2 ab2 a2 bb2 b2 c3 db3 d3 eb3 e3 f3 gb3 g3 ab3 a3 bb3 b3 c4 db4 d4 eb4 e4';
	
	const eHiFrets = strEHi.split(' ').map(note => <Fret rootNote={note.replace(/\d+/g, '') === rootNote} highlight={notes.indexOf(note) > -1} key={note} note={note} />);
	const bFrets = strB.split(' ').map(note => <Fret rootNote={note.replace(/\d+/g, '') === rootNote} highlight={notes.indexOf(note) > -1} key={note} note={note} />);
	const gFrets = strG.split(' ').map(note => <Fret rootNote={note.replace(/\d+/g, '') === rootNote} highlight={notes.indexOf(note) > -1} key={note} note={note} />);
	const dFrets = strD.split(' ').map(note => <Fret rootNote={note.replace(/\d+/g, '') === rootNote} highlight={notes.indexOf(note) > -1} key={note} note={note} />);
	const aFrets = strA.split(' ').map(note => <Fret rootNote={note.replace(/\d+/g, '') === rootNote} highlight={notes.indexOf(note) > -1} key={note} note={note} />);
	const eLoFrets = strELo.split(' ').map(note => <Fret rootNote={note.replace(/\d+/g, '') === rootNote} highlight={notes.indexOf(note) > -1} key={note} note={note} />);

	return (
		<div className="guitar">
			<div className="str strEHi">{eHiFrets}</div>
			<div className="str strB">{bFrets}</div>
			<div className="str strG">{gFrets}</div>
			<div className="str strD">{dFrets}</div>
			<div className="str strA">{aFrets}</div>
			<div className="str strELo">{eLoFrets}</div>
		</div>
	);
};

export default Guitar;

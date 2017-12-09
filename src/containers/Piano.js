import React from 'react';
import PianoKey from '../components/PianoKey.js';

const Piano = ({ octaves }) => {
	const octs = octaves.map((oct, idx) => {
		var keys = oct.map(
			k => <PianoKey keyObj={k} key={k.note} />
		);
		return (<div className="octave" key={idx}>{keys}</div>);
	});

	return (
		<div className="keyboard">{octs}</div>
	);
};

export default Piano;

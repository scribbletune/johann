import React from 'react';

const Fret = ({ rootNote, highlight, note, key }) => {	
	var className = 'fret ' + (note.replace(/\d/g, '')) + ' ' + note;
	if (highlight) {
		className += ' highlight';
	}
	if (rootNote) {
		className += ' rootNote';
	}
	return(
		<div className={className} />
	);
};

export default Fret;

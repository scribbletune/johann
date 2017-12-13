import React from 'react';

const Fret = ({ rootNote, highlight, note }) => {	
	var className = 'fret ' + note;
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

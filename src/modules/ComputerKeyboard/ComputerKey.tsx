import React from 'react';

const ComputerKey = ({ label, color, rootNote, highlight, note }) => {
	var className = color + ' computer-key ' + note;
	if (highlight) {
		className += ' highlight';
	}
	if (rootNote) {
		className += ' rootNote';
	}
	return(<div className={className}>{label}</div>);
};

export default ComputerKey;

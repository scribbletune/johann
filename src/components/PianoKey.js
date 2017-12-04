import React from 'react';

const PianoKey = ({ keyObj }) => {
	// {label: "D", name: "d", color: "white", note: "d2", highlight: true}
	var className = 'key ' + keyObj.color + '-key ' + keyObj.note.replace(/\d+/, '');
	console.log(keyObj);
	if (keyObj.highlight) {
		className += ' highlight';
	}
	return(
		<div className={className} key={keyObj.note}></div>
	);
};

export default PianoKey;

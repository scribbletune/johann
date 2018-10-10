import {scales, scale, chord, chords} from 'scribbletune';

export const getScaleNames = () => (scales().map(scale => ({
	name: scale,
	label: scale[0].toUpperCase() + scale.slice(1)
})));

export const getChordNames = () => (chords().map(chord => ({
	name: chord,
	label: chord
})));

export const sharpsToFlats = note => {
	if (!note.includes('#')) {
		return note;
	}

	let noteName = note.replace(/\d/, '');
	const sharpsToFlatsMap = {
		'C#': 'Db',
		'D#': 'Eb',
		'F#': 'Gb',
		'G#': 'Ab',
		'A#': 'Bb'
	};

	return note.replace(noteName, sharpsToFlatsMap[noteName]);
};

export const getScale = (rootNote, scaleName) => {
	// concatenate scales from octave range 1 to 6
	var o1 = scale(rootNote + 1 + ' ' + scaleName).map(sharpsToFlats);
	var o2 = scale(rootNote + 2 + ' ' + scaleName).map(sharpsToFlats);
	var o3 = scale(rootNote + 3 + ' ' + scaleName).map(sharpsToFlats);
	var o4 = scale(rootNote + 4 + ' ' + scaleName).map(sharpsToFlats);
	var o5 = scale(rootNote + 5 + ' ' + scaleName).map(sharpsToFlats);
	var o6 = scale(rootNote + 6 + ' ' + scaleName).map(sharpsToFlats);
	return o2.concat(o3, o4, o5, o6);
};

export const getChord = (chordName) => {
	// concatenate chords from octave range 2 to 5
	var o2 = chord(chordName + '-2');
	var o3 = chord(chordName + '-3');
	var o4 = chord(chordName + '-4');
	var o5 = chord(chordName + '-5');
	return o2.concat(o3, o4, o5);
};

export const getPitches = () => ([
	{label: 'C', name: 'C', color: 'white'},
	{label: 'Db', name: 'Db', color: 'black'},
	{label: 'D', name: 'D', color: 'white'},
	{label: 'Eb', name: 'Eb', color: 'black'},
	{label: 'E', name: 'E', color: 'white'},
	{label: 'F', name: 'F', color: 'white'},
	{label: 'Gb', name: 'Gb', color: 'black'},
	{label: 'G', name: 'G', color: 'white'},
	{label: 'Ab', name: 'Ab', color: 'black'},
	{label: 'A', name: 'A', color: 'white'},
	{label: 'Bb', name: 'Bb', color: 'black'},
	{label: 'B', name: 'B', color: 'white'}
]);

/**
 * Get a range of octaves with pitches
 * @return {Array} Array of pitch arrays
 */
export const getOctavesOfPianoNotes = () => {
	let pitches = getPitches();
	let octaves = [[], [], []];
	// Add notes for 3rd 4th and 5th octave in one loop
	pitches.forEach(pitch => {
		octaves[0].push(Object.assign({}, pitch, {note: pitch.label + 3}));
		octaves[1].push(Object.assign({}, pitch, {note: pitch.label + 4}));
		octaves[2].push(Object.assign({}, pitch, {note: pitch.label + 5}));
	});

	return octaves;
};

export const getTuningsForGuitar = () => ([
	{label: 'Regular', 'display': 'EBGDAE', strings: ['E4', 'B3', 'G3', 'D3', 'A2', 'E2'], tuningIdx: 0, name: 0},
	{label: 'Dropped D', 'display': 'EBGDAD', strings: ['E4', 'B3', 'G3', 'D3', 'A2', 'D2'], tuningIdx: 1, name: 1},
	{label: 'Double dropped D', display: 'DADGBD', strings: ['D4', 'A3', 'D3', 'G3', 'B2', 'D2'], tuningIdx: 2, name: 2},
	{label: 'Drop C', 'display': 'DAFCGC', strings: ['D4', 'A3', 'F3', 'C3', 'G2', 'C2'], tuningIdx: 3, name: 3},
	{label: 'Open G', 'display': 'DGDGBD', strings: ['D4', 'G3', 'D3', 'G3', 'B2', 'D2'], tuningIdx: 4, name: 4}
]);

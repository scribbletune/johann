import {modes, scale, chord, listChords} from 'scribbletune';

export const getScaleNames = () => (modes.map(mode => ({
	name: mode,
	label: mode[0].toUpperCase() + mode.slice(1)
})));

export const getChordNames = () => (listChords().map(chord => ({
	name: chord,
	label: chord
})));

export const getScale = (rootNote, mode) => {
	// concatenate scales from octave range 1 to 6
	var o1 = scale(rootNote, mode, 1, false);
	var o2 = scale(rootNote, mode, 2, false);
	var o3 = scale(rootNote, mode, 3, false);
	var o4 = scale(rootNote, mode, 4, false);
	var o5 = scale(rootNote, mode, 5, false);
	var o6 = scale(rootNote, mode, 6, false);
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
	{label: 'C', name: 'c', color: 'white'},
	{label: 'Db', name: 'db', color: 'black'},
	{label: 'D', name: 'd', color: 'white'},
	{label: 'Eb', name: 'eb', color: 'black'},
	{label: 'E', name: 'e', color: 'white'},
	{label: 'F', name: 'f', color: 'white'},
	{label: 'Gb', name: 'gb', color: 'black'},
	{label: 'G', name: 'g', color: 'white'},
	{label: 'Ab', name: 'ab', color: 'black'},
	{label: 'A', name: 'a', color: 'white'},
	{label: 'Bb', name: 'bb', color: 'black'},
	{label: 'B', name: 'b', color: 'white'}
]);

/**
 * Get a range of octaves with pitches
 * @return {Array} Array of pitch arrays
 */
export const getOctavesOfPianoNotes = () => {
	let pitches = getPitches();
	let octaves = [2, 3, 4, 5].map(oct => (pitches.map(pitch => (Object.assign({}, pitch, {
		note: pitch.name + oct
	})))));
	octaves.shift();
	return octaves;
};

export const getTuningsForGuitar = () => ([
	{label: 'Regular', 'display': 'EBGDAE', strings: ['e4', 'b3', 'g3', 'd3', 'a2', 'e2'], tuningIdx: 0, name: 0},
	{label: 'Dropped D', 'display': 'EBGDAD', strings: ['e4', 'b3', 'g3', 'd3', 'a2', 'd2'], tuningIdx: 1, name: 1},
	{label: 'Double dropped D', display: 'DADGBD', strings: ['d4', 'a3', 'd3', 'g3', 'b2', 'd2'], tuningIdx: 2, name: 2},
	{label: 'Drop C', 'display': 'DAFCGC', strings: ['d4', 'a3', 'f3', 'c3', 'g2', 'c2'], tuningIdx: 3, name: 3},
	{label: 'Open G', 'display': 'DGDGBD', strings: ['d4', 'g3', 'd3', 'g3', 'b2', 'd2'], tuningIdx: 4, name: 4}
]);

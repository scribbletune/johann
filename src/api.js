import {modes, scale, chord, listChords} from 'scribbletune';

const getScaleNames = () => (modes.map(mode => ({
	name: mode,
	label: mode[0].toUpperCase() + mode.slice(1)
})));

const getChordNames = () => (listChords().map(chord => ({
	name: chord,
	label: chord
})));

const getScale = (rootNote, mode) => {
	// concatenate scales from octave range 2 to 5
	var o2 = scale(rootNote, mode, 2, false);
	var o3 = scale(rootNote, mode, 3, false);
	var o4 = scale(rootNote, mode, 4, false);
	var o5 = scale(rootNote, mode, 5, false);
	return o2.concat(o3, o4, o5);
};

const getChord = (chordName) => {
	// concatenate chords from octave range 2 to 5
	var o2 = chord(chordName + '-2');
	var o3 = chord(chordName + '-3');
	var o4 = chord(chordName + '-4');
	var o5 = chord(chordName + '-5');
	return o2.concat(o3, o4, o5);
};

const getPitches = () => ([
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
const getOctaves = () => {
	let pitches = getPitches();
	let octaves = [2, 3, 4, 5].map(oct => (pitches.map(pitch => (Object.assign({}, pitch, {
		note: pitch.name + oct
	})))));
	octaves.pop();
	return octaves;
};

export { getScaleNames, getChordNames, getScale, getChord, getPitches, getOctaves };
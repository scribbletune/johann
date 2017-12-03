import {modes, scale, chord, listChords} from 'scribbletune';

export const getScaleNames = () => (modes);

export const getChordNames = () => (listChords());

export const getScale = (rootNote, mode) => {
	// concatenate scales from octave range 2 to 5
	var o2 = scale(rootNote, mode, 2, 'false');
	var o3 = scale(rootNote, mode, 3, 'false');
	var o4 = scale(rootNote, mode, 4, 'false');
	var o5 = scale(rootNote, mode, 5, 'false');
	return o2.concat(o3, o4, o5);
};

export const getChord = (chordName) => {
	// concatenate chords from octave range 2 to 5
	var o2 = chord(chordName + '-2');
	var o3 = chord(chordName + '-3');
	var o4 = chord(chordName + '-4');
	var o5 = chord(chordName + '-5');
	return o2.concat(o3, o4, o5);
};

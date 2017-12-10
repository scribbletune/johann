import constants from '../actions/constants.js';
import {getScale, getPitches, getScaleNames, getChordNames, getChord} from '../api.js';

const getOctaves = () => {
	let pitches = getPitches();
	let octaves = [2, 3, 4, 5].map(oct => (pitches.map(pitch => (Object.assign({}, pitch, {
		note: pitch.name + oct
	})))));

	return octaves;
};

var initialState = {
	pitches: getPitches(),
	scales: getScaleNames(),
	chords: getChordNames(),
	octaves: getOctaves(),
	scale: 'ionian',
	chord: 'Maj',
	type: 'scale',
	rootNote: 'c'
};

export const rootReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case constants.LOAD_NOTES:
			// Avoid doing yet another for loop inside the pitches forEach loop
			// by doing the string subsequence finding pointer technique
			let pointer = 0;
			let notes = getScale(state.rootNote, state.scale);
			if (state.type === 'chord') {
				notes = getChord(state.rootNote + state.chord);
			}
			state.octaves = getOctaves();
			state.octaves.forEach(oct => {
				oct.forEach(key => {
					key.highlight = notes.indexOf(key.note) > -1;
					key.rootNote = key.name === state.rootNote;
				})
			});
			// Take off the first item (octave 2) from the octaves arr
			// TODO come up with a cleaner way to represent 3 octaves
			state.octaves.shift();
			return state;

		case constants.ROOT_CHANGED:
			state.rootNote = action.data.rootNote;
			return rootReducer(state, {type: constants.LOAD_NOTES});

		case constants.SCALE_CHANGED:
			state.scale = action.data.scale;
			return rootReducer(state, {type: constants.LOAD_NOTES});

		case constants.CHORD_CHANGED:
			state.chord = action.data.chord;
			return rootReducer(state, {type: constants.LOAD_NOTES});

		case constants.TYPE_CHANGED:
			state.type = action.data.type;
			return rootReducer(state, {type: constants.LOAD_NOTES});

		default:
			return state;
	}
};

import constants from '../actions/constants.js';
import * as api from '../api.js';

var initialState = {
	pitches: api.getPitches(),
	scales: api.getScaleNames(),
	chords: api.getChordNames(),
	octaves: api.getOctaves(),
	scale: 'ionian',
	chord: 'maj',
	type: 'scale',
	rootNote: 'c'
};

export const rootReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case constants.LOAD_NOTES:
			// Avoid doing yet another for loop inside the pitches forEach loop
			// by doing the string subsequence finding pointer technique
			let pointer = 0;
			let notes = api.getScale(state.rootNote, state.scale);
			if (state.type === 'chord') {
				notes = api.getChord(state.rootNote + state.chord);
			}
			let octaves = api.getOctaves();
			octaves.forEach(oct => {
				oct.forEach(key => {
					key.highlight = notes.indexOf(key.note) > -1;
					key.rootNote = key.name === state.rootNote;
				})
			});
			// Take off the first item (octave 2) from the octaves arr
			// TODO come up with a cleaner way to represent 3 octaves
			octaves.shift();
			return Object.assign({}, state, {octaves});

		case constants.ROOT_CHANGED:
			return Object.assign({}, state, {rootNote: action.data.rootNote});

		case constants.SCALE_CHANGED:
			return Object.assign({}, state, {scale: action.data.scale});

		case constants.CHORD_CHANGED:
			return Object.assign({}, state, {chord: action.data.chord});

		case constants.TYPE_CHANGED:
			return Object.assign({}, state, {type: action.data.type});

		default:
			return state;
	}
};

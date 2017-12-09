import constants from '../actions/constants.js';
import {getScale, getPitches, getScaleNames} from '../api.js';

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
	octaves: getOctaves(),
	scale: 'ionian',
	rootNote: 'c'
};

export const rootReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case constants.LOAD_SCALE:
			// Avoid doing yet another for loop inside the pitches forEach loop
			// by doing the string subsequence finding pointer technique
			let pointer = 0;
			let scale = getScale(state.rootNote, state.scale);
			state.octaves = getOctaves();
			state.octaves.forEach(oct => {
				oct.forEach(key => {
					key.highlight = scale.indexOf(key.note) > -1;
					key.rootNote = key.name === state.rootNote;
				})
			});
			// Take off the first item (octave 2) from the octaves arr
			// TODO come up with a cleaner way to represent 3 octaves
			state.octaves.shift();
			return state;

		case constants.ROOT_CHANGED:
			state.rootNote = action.data.rootNote;
			rootReducer(state, {type: constants.LOAD_SCALE});
			return state;

		case constants.SCALE_CHANGED:
			state.scale = action.data.scale;
			rootReducer(state, {type: constants.LOAD_SCALE});
			return state;

		default:
			return state;
	}
};

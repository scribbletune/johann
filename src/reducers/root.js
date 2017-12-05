import constants from '../actions/constants.js';
import {getScale, getPitches} from '../api.js';

var initialState = {
	pitches: getPitches(),
	octaves: []
};

export const rootReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case constants.LOAD_SCALE:
			// Avoid doing yet another for loop inside the pitches forEach loop
			// by doing the string subsequence finding pointer technique
			let pointer = 0;
			let scale = getScale(action.data.rootNote, action.data.scale);
			state.octaves = [];
			[2, 3, 4, 5].forEach(oct => {
				let keys = [];
				state.pitches.forEach(pitch => {
					let note = pitch.name + oct;
					if (note === scale[pointer]) {
						keys.push(Object.assign({}, pitch, {note: note, highlight: true}));
						pointer++;
					} else {
						keys.push(Object.assign({}, pitch, {note: note}));
					}
				});
				state.octaves.push(keys);
			});
			// Take off the first item (octave 2) from the octaves arr
			// TODO come up with a cleaner way to represent 3 octaves
			state.octaves.shift();
			return state;

		default:
			return state;
	}
};

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
			let newState = Object.assign({}, state, action.data);
			let notes = api.getScale(newState.rootNote, newState.scale);
			if (newState.type === 'chord') {
				notes = api.getChord(newState.rootNote + newState.chord);
			}
			let octaves = api.getOctaves();
			octaves.forEach(oct => {
				oct.forEach(key => {
					key.highlight = notes.indexOf(key.note) > -1;
					key.rootNote = key.name === newState.rootNote;
				})
			});
			// Take off the first item (octave 2) from the octaves arr
			// TODO come up with a cleaner way to represent 3 octaves
			octaves.shift();
			newState.octaves = octaves;
			return newState;

		default:
			return state;
	}
};

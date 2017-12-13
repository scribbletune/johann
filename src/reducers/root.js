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
			newState.octaves.forEach(oct => {
				oct.forEach(key => {
					key.highlight = notes.indexOf(key.note) > -1;
					key.rootNote = key.name === newState.rootNote;
				})
			});
			return newState;

		default:
			return state;
	}
};

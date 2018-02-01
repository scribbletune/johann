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
	rootNote: 'c',
	notes: [],
	fretboardIsFlipped: false,
	tunings: [
		{label: 'Regular', 'display': 'EBGDAE', strings: ['e4', 'b3', 'g3', 'd3', 'a2', 'e2'], name: 0},	// name is value
		{label: 'Dropped D', 'display': 'EBGDAD', strings: ['e4', 'b3', 'g3', 'd3', 'a2', 'd2'], name: 1},
		{label: 'Double dropped D', display: 'DADGBD', strings: ['d4', 'a3', 'd3', 'g3', 'b2', 'd2'], name: 2},
		{label: 'Drop C', 'display': 'DAFCGC', strings: ['d4', 'a3', 'f3', 'c3', 'g2', 'c2'], name: 3},
		{label: 'Open G', 'display': 'DGDGBD', strings: ['d4', 'g3', 'd3', 'g3', 'b2', 'd2'], name: 4}
	],
	selectedTuningIdx: 0
};

export const rootReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case constants.LOAD_NOTES:
			let newState = Object.assign({}, state, action.data);
			if (newState.type === 'chord') {
				newState.notes = api.getChord(newState.rootNote + newState.chord);
			} else {
				newState.notes = api.getScale(newState.rootNote, newState.scale);
			}
			newState.octaves.forEach(oct => {
				oct.forEach(key => {
					key.highlight = newState.notes.indexOf(key.note) > -1;
					key.rootNote = key.name === newState.rootNote;
				})
			});
			return newState;

		case constants.FLIP_FRETBOARD:
			return Object.assign({}, state, {fretboardIsFlipped: !state.fretboardIsFlipped});

		case constants.CHANGE_TUNING:
			return Object.assign({}, state, {selectedTuningIdx: action.data});

		default:
			return state;
	}
};

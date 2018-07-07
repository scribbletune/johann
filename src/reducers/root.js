import constants from '../actions/constants.js';
import { getOctavesOfPianoNotes, getChord, getScale } from '../api';

var initialState = {
	octavesOfPianoNotes: getOctavesOfPianoNotes(),
	scale: 'ionian',
	chord: 'maj',
	notesType: 'scale',
	rootNote: 'c',
	notes: [],
	fretboardIsFlipped: false,
	selectedTuningIdx: 0
};

export const rootReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case constants.LOAD_NOTES:
			let newState = Object.assign({}, state, action.data);
			if (newState.notesType === 'chord') {
				newState.notes = getChord(newState.rootNote + newState.chord);
			} else {
				newState.notes = getScale(newState.rootNote, newState.scale);
			}
			newState.octavesOfPianoNotes.forEach(oct => {
				oct.forEach(key => {
					key.highlight = newState.notes.indexOf(key.note) > -1;
					key.rootNote = key.name === newState.rootNote;
				})
			});
			return newState;

		case constants.FLIP_FRETBOARD:
			return Object.assign({}, state, {fretboardIsFlipped: !state.fretboardIsFlipped});

		case constants.CHANGE_TUNING:
			return Object.assign({}, state, action.data);

		default:
			return state;
	}
};

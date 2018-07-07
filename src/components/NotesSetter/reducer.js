import { getScale, getChord } from '../../api';
import constants from '../../actions/constants';
import { getInitialState } from '../../api';

export default (state = [], action = {}) => {
	switch (action.type) {
		case constants.LOAD_NOTES:
			let newState = Object.assign({}, state, action.data);
			if (newState.type === 'chord') {
				newState.notes = getChord(newState.rootNote + newState.chord);
			} else {
				newState.notes = getScale(newState.rootNote, newState.scale);
			}
			newState.octaves.forEach(oct => {
				oct.forEach(key => {
					key.highlight = newState.notes.indexOf(key.note) > -1;
					key.rootNote = key.name === newState.rootNote;
				})
			});
			return newState;

		default:
			return state;
	}
};

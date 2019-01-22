import constants from './constants';
import { getTuningsForGuitar } from '../api';

const initApp = (dispatch) => (dispatch({ type: constants.LOAD_NOTES }));

const controlChanged = (dispatch, data) => {
	dispatch({
		type: constants.LOAD_NOTES,
		data
	});
};

const flipFretboard = dispatch => {
	dispatch({
		type: constants.FLIP_FRETBOARD
	});
};

const changeTuning = (dispatch, data) => {
	// selectedTuningIdx comes in as a string, for eg "Drop C"
	// (hack) convert it to a integer explicitly till DropDown is reimplemented
	const tuning = getTuningsForGuitar().find(el => el.label === data.selectedTuningIdx);
	dispatch({
		type: constants.CHANGE_TUNING,
		data: {selectedTuningIdx: tuning.tuningIdx}
	});
};

export { initApp,  controlChanged, flipFretboard, changeTuning };
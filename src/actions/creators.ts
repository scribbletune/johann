import constants from './constants';
import { getTuningsForGuitar } from '../api';
import { getTuningsForUkulele } from '../api';

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

const changeTuning = tuningMethod => (dispatch, data) => {
	// selectedTuningIdx comes in as a string, for eg "Drop C"
	// (hack) convert it to a integer explicitly till DropDown is reimplemented
	const tuning = tuningMethod().find(el => el.label === data.selectedTuningIdx);
	dispatch({
		type: constants.CHANGE_TUNING,
		data: {selectedTuningIdx: tuning.tuningIdx}
	});
};

const changeUkuleleTuning = changeTuning(getTuningsForUkulele);
const changeGuitarTuning = changeTuning(getTuningsForGuitar);


export { initApp,  controlChanged, flipFretboard, changeTuning, changeUkuleleTuning, changeGuitarTuning };
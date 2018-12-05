import constants from './constants';

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
	dispatch({
		type: constants.CHANGE_TUNING,
		data
	});
};

export { initApp,  controlChanged, flipFretboard, changeTuning };
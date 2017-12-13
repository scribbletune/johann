import constants from './constants';

const initApp = (dispatch) => (dispatch({ type: constants.LOAD_NOTES }));

const loadNotes = (dispatch) => (dispatch({ type: constants.LOAD_NOTES }));

const rootChanged = (dispatch, e) => {
	dispatch({
		type: constants.LOAD_NOTES,
		data: { rootNote: e.target.value }
	});
};

const scaleChanged = (dispatch, e) => {
	dispatch({
		type: constants.LOAD_NOTES,
		data: { scale: e.target.value }
	});
};

const chordChanged = (dispatch, e) => {
	dispatch({
		type: constants.LOAD_NOTES,
		data: { chord: e.target.value }
	});
};

const typeChanged = (dispatch, e) => {
	dispatch({
		type: constants.LOAD_NOTES,
		data: { type: e.target.value }
	});
};

export { initApp, loadNotes, rootChanged, scaleChanged, chordChanged, typeChanged }
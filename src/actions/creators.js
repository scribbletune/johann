import constants from './constants';

const initApp = (dispatch) => (dispatch({
	type: constants.LOAD_NOTES,
	data: {
		rootNote: 'c',
		scale: 'ionian'
	}
}));

const loadNotes = (dispatch) => (dispatch({
	type: constants.LOAD_NOTES
}));

const rootChanged = (dispatch, e) => {
	dispatch({
		type: constants.ROOT_CHANGED,
		data: {
			rootNote: e.target.value
		}
	});
	loadNotes(dispatch);
};

const scaleChanged = (dispatch, e) => {
	dispatch({
		type: constants.SCALE_CHANGED,
		data: {
			scale: e.target.value
		}
	});
	loadNotes(dispatch);
};

const chordChanged = (dispatch, e) => {
	dispatch({
		type: constants.CHORD_CHANGED,
		data: {
			chord: e.target.value
		}
	});
	loadNotes(dispatch);
};

const typeChanged = (dispatch, e) => {
	dispatch({
		type: constants.TYPE_CHANGED,
		data: {
			type: e.target.value
		}
	});
	loadNotes(dispatch);
};

export { initApp, loadNotes, rootChanged, scaleChanged, chordChanged, typeChanged }
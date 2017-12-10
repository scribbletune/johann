import constants from './constants';

export const initApp = (dispatch) => (dispatch({
	type: constants.LOAD_SCALE,
	data: {
		rootNote: 'c',
		scale: 'ionian'
	}
}));

export const loadScale = (dispatch, e) => (dispatch({
	type: constants.LOAD_SCALE
}));

export const rootChanged = (dispatch, e) => (dispatch({
	type: constants.ROOT_CHANGED,
	data: {
		rootNote: e.target.value
	}
}));

export const scaleChanged = (dispatch, e) => (dispatch({
	type: constants.SCALE_CHANGED,
	data: {
		scale: e.target.value
	}
}));

export const chordChanged = (dispatch, e) => (dispatch({
	type: constants.CHORD_CHANGED,
	data: {
		scale: e.target.value
	}
}));

export const typeChanged = (dispatch, e) => (dispatch({
	type: constants.TYPE_CHANGED,
	data: {
		scale: e.target.value
	}
}));
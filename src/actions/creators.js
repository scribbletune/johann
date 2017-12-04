import constants from './constants';

export const initApp = (store) => {
	store.dispatch({
		type: constants.LOAD_SCALE,
		data: {
			rootNote: 'c',
			scale: 'ionian'
		}
	});
};

export const loadScale = (dispatch, e) => (dispatch({
	type: constants.LOAD_SCALE,
	data: {
		rootNote: e.target.value,
		scale: 'ionian'
	}
}));

import constants from './constants';

const initApp = (dispatch) => (dispatch({ type: constants.LOAD_NOTES }));

const controlChanged = (dispatch, e, controlType) => {
	let data = {};
	data[e.target.dataset.controlType] = e.target.value;
	dispatch({
		type: constants.LOAD_NOTES,
		data: data
	});
};

export { initApp,  controlChanged };
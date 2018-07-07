import React from 'react';
import { connect } from 'react-redux';

const Dropdown = ({data, onChangeEventHandler, controlType, selectedValue, dispatch}) => {
	const list = data.map(
		item => <option value={item.name} key={item.name}>{item.label}</option>
	);

	const localOnChangeHandler = e => {
		var dataObj = {};
		dataObj[e.target.dataset.controlType] = e.target.value
		onChangeEventHandler(dispatch, dataObj);
	};
	return (
		<select onChange={localOnChangeHandler.bind(this)} data-control-type={controlType} value={selectedValue}>
			{list}
		</select>
	);
};

// Use the default mapDispatchToProps by not passing it which is basically the same as passing dispatch => ({ dispatch })
export default connect()(Dropdown);

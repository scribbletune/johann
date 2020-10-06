import React from 'react';
import { connect } from 'react-redux';
import './Dropdown.less'
/**
 * @param {Array} data A list of (object) items that have the name and value of the option to be displayed
 * @param {Function} onChangeEventHandler A function that will be triggered for the onChange event of the dropdown
 * @param {String} controlType A string that signifies what sort of control this dropdown is (e.g. scale, chord, notesType etc)
 * @param {String} selectedValue The value that will determine which option of this dropdown will be shown as selected
 * @param {Function} dispatch The dispatch function to be passed on to the action creator
 */
const Dropdown = ({data, onChangeEventHandler, controlType, selectedValue, dispatch}) => {
	const list = data.map(
		item => <option value={item.label} key={item.label}>{item.label}</option>
	);

	const localOnChangeHandler = e => {
		var dataObj = {};
		dataObj[e.target.dataset.controlType] = e.target.value
		onChangeEventHandler(dispatch, dataObj);
	};
	return (
		<select onChange={localOnChangeHandler.bind(this)} data-control-type={controlType} value={selectedValue} className="dropdown">
			{list}
		</select>
	);
};

// Use the default mapDispatchToProps by not passing it which is basically the same as passing dispatch => ({ dispatch })
export default connect()(Dropdown);

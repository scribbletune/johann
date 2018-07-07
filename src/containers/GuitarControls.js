import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../node_modules/redux';
import { changeTuning } from '../actions/creators';
import FretboardFlipper from '../components/FretboardFlipper.js';
import Dropdown from '../components/Dropdown.js';

const GuitarControls = ({ tunings, selectedTuningIdx }) => {
	return (
		<div className="guitar-controls">
			<FretboardFlipper />
			Tuning:
			<Dropdown
				data={tunings}
				controlType = 'tuning'
				onChangeEventHandler={changeTuning}
				selectedValue={tunings[selectedTuningIdx].name}
			/>
			<strong>{tunings[selectedTuningIdx].display}</strong>
		</div>
	);
};

const mapStateToProps = state => ({
	tunings: state.tunings,
	selectedTuningIdx: state.selectedTuningIdx
});


export default connect(mapStateToProps)(GuitarControls);

import React from 'react';
import { connect } from 'react-redux';
import { changeTuning } from '../../actions/creators';
import { getTuningsForGuitar } from '../../api';
import FretboardFlipper from './FretboardFlipper.js';
import Dropdown from '../../components/Dropdown';

const GuitarControls = ({ selectedTuningIdx }) => {
	const tunings = getTuningsForGuitar();
	return (
		<div className="guitar-controls">
			<FretboardFlipper />
			Tuning:
			<Dropdown
				data={tunings}
				controlType = 'selectedTuningIdx'
				onChangeEventHandler={changeTuning}
				selectedValue={tunings[selectedTuningIdx].tuningIdx}
			/>
			<strong>{tunings[selectedTuningIdx].display}</strong>
		</div>
	);
};

const mapStateToProps = state => ({
	selectedTuningIdx: state.selectedTuningIdx
});

export default connect(mapStateToProps)(GuitarControls);

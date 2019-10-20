import React from 'react';
import { connect } from 'react-redux';
import { changeUkuleleTuning } from '../../actions/creators';
import { getTuningsForUkulele } from '../../api';
import FretboardFlipper from '../Guitar/FretboardFlipper';
import Dropdown from '../../components/Dropdown';

const UkuleleControls = ({ selectedTuningIdx }) => {
	const tunings = getTuningsForUkulele();
	return (
		<div className="ukulele-controls">
			<FretboardFlipper />
			Tuning:
			<Dropdown
				data={tunings}
				controlType = 'selectedTuningIdx'
				onChangeEventHandler={changeUkuleleTuning}
				selectedValue={tunings[selectedTuningIdx].label}
			/>
			<strong>{tunings[selectedTuningIdx].display}</strong>
		</div>
	);
};

const mapStateToProps = state => ({
	selectedTuningIdx: state.selectedTuningIdx
});

export default connect(mapStateToProps)(UkuleleControls);

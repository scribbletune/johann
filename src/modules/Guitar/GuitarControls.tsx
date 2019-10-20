import React from 'react';
import { connect } from 'react-redux';
import { changeGuitarTuning, changeInstrument, changeTuning } from '../../actions/creators';
import { getTuningsForGuitar, getStringInstruments } from '../../api';
import FretboardFlipper from './FretboardFlipper';
import Dropdown from '../../components/Dropdown';

const GuitarControls = ({ selectedTuningIdx, selectedInstrumentIdx }) => {
	const instruments = getStringInstruments();
	const tunings = instruments[selectedInstrumentIdx].getTunings()
	return (
		<div className="guitar-controls">
			<FretboardFlipper />
			Instrument:
			<Dropdown
				data={instruments}
				controlType='selectedInstrumentIdx'
				onChangeEventHandler={changeInstrument}
				selectedValue={instruments[selectedInstrumentIdx].label}
			/>
			Tuning:
			<Dropdown
				data={tunings}
				controlType = 'selectedTuningIdx'
				onChangeEventHandler={changeTuning(instruments[selectedInstrumentIdx].getTunings())}
				selectedValue={tunings[selectedTuningIdx].label}
			/>
			<strong>{tunings[selectedTuningIdx].display}</strong>
		</div>
	);
};

const mapStateToProps = state => ({
	selectedTuningIdx: state.selectedTuningIdx,
	selectedInstrumentIdx: state.selectedInstrumentIdx
});

export default connect(mapStateToProps)(GuitarControls);

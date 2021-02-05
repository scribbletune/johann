import constants from './constants';
import { getTuningsForGuitar, getTuningsForUkulele, getStringInstruments, getTuningsFor7StringsGuitar } from '../api';

const initApp = (dispatch) => dispatch({ type: constants.LOAD_NOTES });

const controlChanged = (dispatch, data) => {
  dispatch({
    type: constants.LOAD_NOTES,
    data,
  });
};

const vFlipFretboard = (dispatch) => {
  dispatch({
    type: constants.VFLIP_FRETBOARD,
  });
};

const hFlipFretboard = (dispatch) => {
  dispatch({
    type: constants.HFLIP_FRETBOARD,
  });
};

const changeTuning = (tuningMethod) => (dispatch, data) => {
  // selectedTuningIdx comes in as a string, for eg "Drop C"
  // (hack) convert it to a integer explicitly till DropDown is reimplemented
  const tuning = tuningMethod.find((el) => el.label === data.selectedTuningIdx);
  dispatch({
    type: constants.CHANGE_TUNING,
    data: { selectedTuningIdx: tuning.tuningIdx },
  });
};

const changeInstrument = (dispatch, data) => {
  const instrument = getStringInstruments().find((el) => el.label === data.selectedInstrumentIdx);
  dispatch({
    type: constants.CHANGE_INSTRUMENT,
    data: {
      selectedTuningIdx: 0,
      selectedInstrumentIdx: instrument.instrumentIdx,
    },
  });
};

const changeGuitarTuning = changeTuning(getTuningsForGuitar);
const changeUkuleleTuning = changeTuning(getTuningsForUkulele);
const change7StringsGuitarTuning = changeTuning(getTuningsFor7StringsGuitar);

export {
  initApp,
  controlChanged,
  vFlipFretboard,
  hFlipFretboard,
  changeTuning,
  changeGuitarTuning,
  changeUkuleleTuning,
  change7StringsGuitarTuning,
  changeInstrument,
};

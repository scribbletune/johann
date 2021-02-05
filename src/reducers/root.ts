import constants from '../actions/constants';
import { getOctavesOfPianoNotes, getChord, getScale } from '../api';

const initialState = {
  octavesOfPianoNotes: getOctavesOfPianoNotes(),
  scale: 'Major',
  chord: 'M',
  notesType: 'scale',
  rootNote: 'C',
  notes: [],
  fretboardIsVFlipped: false,
  fretboardIsHFlipped: false,
  selectedTuningIdx: 0,
  selectedInstrumentIdx: 0,
};

interface ActionType {
  type: string;
  data: object;
}

export const rootReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case constants.LOAD_NOTES:
      let newState = Object.assign({}, state, action.data);
      if (newState.notesType === 'chord') {
        newState.notes = getChord(newState.rootNote + newState.chord);
      } else {
        newState.notes = getScale(newState.rootNote, newState.scale);
      }
      newState.octavesOfPianoNotes.forEach((oct) => {
        oct.forEach((key) => {
          key.highlight = newState.notes.indexOf(key.note) > -1;
          key.rootNote = key.name === newState.rootNote;
        });
      });
      return newState;

    case constants.VFLIP_FRETBOARD:
      return Object.assign({}, state, {
        fretboardIsVFlipped: !state.fretboardIsVFlipped,
      });

    case constants.HFLIP_FRETBOARD:
      return Object.assign({}, state, {
        fretboardIsHFlipped: !state.fretboardIsHFlipped,
      });

    case constants.CHANGE_TUNING:
      return Object.assign({}, state, action.data);

    case constants.CHANGE_INSTRUMENT:
      return Object.assign({}, state, action.data);

    default:
      return state;
  }
};

import React from 'react';
import { connect } from 'react-redux';
import { getStringNotes, getStringInstruments } from '../../api';
import Fret from './Fret';
import GuitarControls from './GuitarControls';
import './Guitar.less';

const Guitar = ({
  notes,
  rootNote,
  fretboardIsFlipped,
  selectedInstrumentIdx,
  selectedTuningIdx,
}) => {
  const instruments = getStringInstruments();
  const instrument = instruments[selectedInstrumentIdx];
  const tunings = instrument.getTunings();
  const strings = tunings[selectedTuningIdx].strings;

  let strNotes = [];
  const noteMapper = (note) => (
    <Fret
      rootNote={note.replace(/\d+/g, '') === rootNote}
      highlight={notes.indexOf(note) > -1}
      key={note}
      note={note}
    />
  );
  for (let i = 0; i < instrument.numberOfStrings; ++i) {
    strNotes.push(getStringNotes(strings[i], instrument.frets).map(noteMapper));
  }

  const fretDots = (
    <div className={`fretDots${instrument.numberOfStrings}`}>
      <div className="fretDot fifthFret"></div>
      <div className="fretDot seventhFret"></div>
      <div className="fretDot ninthFret"></div>
      <div className="fretDot twelthFret"></div>
      <div className="fretDot fifteenthFret"></div>
    </div>
  );

  const regularFretboard = (
    <div className="guitar">
      {strNotes.map((u) => (
        <div className="str">{u}</div>
      ))}
    </div>
  );

  const flippedFretboard = (
    <div className="guitar">
      {strNotes.reverse().map((u) => (
        <div className="str">{u}</div>
      ))}
    </div>
  );

  return (
    <div className="instrument">
      <div className="guitarContainer">
        {fretboardIsFlipped ? flippedFretboard : regularFretboard}
        {fretDots}
      </div>
      <GuitarControls />
    </div>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notes,
  rootNote: state.rootNote,
  fretboardIsFlipped: state.fretboardIsFlipped,
  selectedTuningIdx: state.selectedTuningIdx,
  selectedInstrumentIdx: state.selectedInstrumentIdx,
});

export default connect(mapStateToProps)(Guitar);

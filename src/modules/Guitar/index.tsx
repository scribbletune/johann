import React from 'react';
import { connect } from 'react-redux';
import { getStringNotes, getStringInstruments } from '../../api';
import Fret from './Fret';
import GuitarControls from './GuitarControls';
import './Guitar.less';

const Guitar = ({
  notes,
  rootNote,
  fretboardIsVFlipped,
  fretboardIsHFlipped,
  selectedInstrumentIdx,
  selectedTuningIdx,
}) => {
  const instruments = getStringInstruments();
  const instrument = instruments[selectedInstrumentIdx];
  const tunings = instrument.getTunings();
  const strings = tunings[selectedTuningIdx].strings;

  const allStringsWithNotes = [];
  for (let i = 0; i < instrument.numberOfStrings; ++i) {
    let aStringWithNotes = getStringNotes(strings[i], instrument.frets);
    // add frets to the string
    let aStringWithFrets = aStringWithNotes.map((note) => (
      <Fret
        rootNote={note.replace(/\d+/g, '') === rootNote}
        highlight={notes.indexOf(note) > -1}
        key={note}
        note={note}
      />
    ));
    allStringsWithNotes.push(aStringWithFrets);
  }

  const hFlippedAllStringsWithNotes = allStringsWithNotes.map((el) => [...el].reverse());

  const fretDots = (
    <div className={`fretDots${instrument.numberOfStrings}`}>
      <div className="fretDot fifthFret"></div>
      <div className="fretDot seventhFret"></div>
      <div className="fretDot ninthFret"></div>
      <div className="fretDot twelthFret"></div>
      <div className="fretDot fifteenthFret"></div>
    </div>
  );

  const hFlippedFretDots = (
    <div className={`fretDots${instrument.numberOfStrings}`}>
      <div className="fretDot fifteenthFret"></div>
      <div className="fretDot twelthFret"></div>
      <div className="fretDot ninthFret"></div>
      <div className="fretDot seventhFret"></div>
      <div className="fretDot fifthFret"></div>
    </div>
  );

  const regularFretboard = () => {
    const arr = fretboardIsHFlipped ? [...hFlippedAllStringsWithNotes] : [...allStringsWithNotes];
    return (
      <>
        {arr.map((u) => (
          <div className="str">{u}</div>
        ))}
      </>
    );
  };

  const flippedFretboard = () => {
    const arr = fretboardIsHFlipped ? [...hFlippedAllStringsWithNotes] : [...allStringsWithNotes];
    arr.reverse();
    return (
      <>
        {arr.map((u) => (
          <div className="str">{u}</div>
        ))}
      </>
    );
  };

  return (
    <div className="instrument">
      <div className="guitarContainer">
        <div className={fretboardIsHFlipped ? 'guitar hFlippedGuitar' : 'guitar nonHFlippedGuitar'}>
          {fretboardIsVFlipped ? flippedFretboard() : regularFretboard()}
          {fretboardIsHFlipped ? hFlippedFretDots : fretDots}
        </div>
      </div>
      <GuitarControls />
    </div>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notes,
  rootNote: state.rootNote,
  fretboardIsVFlipped: state.fretboardIsVFlipped,
  fretboardIsHFlipped: state.fretboardIsHFlipped,
  selectedTuningIdx: state.selectedTuningIdx,
  selectedInstrumentIdx: state.selectedInstrumentIdx,
});

export default connect(mapStateToProps)(Guitar);

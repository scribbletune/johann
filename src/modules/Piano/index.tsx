import React from 'react';
import { connect } from 'react-redux';
import PianoKey from './PianoKey';
import './Piano.less';

const Piano = ({ octavesOfPianoNotes, activeMidiNote }) => {
  const octs = octavesOfPianoNotes.map((oct, idx) => {
    var keys = oct.map((k) => <PianoKey keyObj={k} key={k.note} activeMidiNote={activeMidiNote} />);
    return (
      <div className="octave" key={idx}>
        {keys}
      </div>
    );
  });

  return (
    <div className="instrument">
      <div className="piano">{octs}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  octavesOfPianoNotes: state.octavesOfPianoNotes,
  activeMidiNote: state.activeMidiNote,
});

export default connect(mapStateToProps)(Piano);

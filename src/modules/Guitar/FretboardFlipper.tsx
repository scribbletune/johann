import React from 'react';
import { connect } from 'react-redux';
import { vFlipFretboard, hFlipFretboard } from '../../actions/creators';

const FretboardFlipper = ({ dispatch }) => {
  const localVFlipFretboard = (e) => {
    vFlipFretboard(dispatch);
  };

  const localHFlipFretboard = (e) => {
    hFlipFretboard(dispatch);
  };
  return (
    <>
      <button onClick={localVFlipFretboard.bind(this)}>Flip fretboard vertically</button>
      <button onClick={localHFlipFretboard.bind(this)}>Flip fretboard horizontally</button>
    </>
  );
};

export default connect()(FretboardFlipper);

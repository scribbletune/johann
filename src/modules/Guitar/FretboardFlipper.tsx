import React from 'react';
import { connect } from 'react-redux';
import { flipFretboard } from '../../actions/creators';

const FretboardFlipper = ({ dispatch }) => {	
	const localFlipFretboard = e => {
		flipFretboard(dispatch);
	};
	return(
		<button onClick={localFlipFretboard.bind(this)}>Flip fretboard vertically</button>
	);
};

export default connect()(FretboardFlipper);

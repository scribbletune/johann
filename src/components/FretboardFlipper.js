import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { flipFretboard } from '../actions/creators.js';

const FretboardFlipper = ({ onFretboardFlip }) => {	
	return(
		<button onClick={onFretboardFlip}>Flip fretboard vertically</button>
	);
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		onFretboardFlip: flipFretboard
	}, dispatch);
};

export default connect(null, mapDispatchToProps)(FretboardFlipper);

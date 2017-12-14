import React from 'react';

const FretboardFlipper = ({ onFretboardFlip }) => {	
	return(
		<button onClick={onFretboardFlip}>Flip fretboard vertically</button>
	);
};

export default FretboardFlipper;

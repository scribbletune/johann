import React from 'react';
import Controls from './Controls.js';
import Piano from './Piano.js';

const App = ({ store }) => {
	var state = store.getState();
	console.log(state);
	return (
		<div>
			<h1>Practice charts - coming soon!</h1>
			<Controls pitches={state.pitches} dispatch={store.dispatch} />
			<Piano octaves={state.octaves} />
		</div>
	);
};

export default App;

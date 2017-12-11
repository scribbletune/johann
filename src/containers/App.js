import React from 'react';
import Controls from './Controls.js';
import Piano from './Piano.js';
import './Piano.less';

const App = ({ store }) => {
	var state = store.getState();
	return (
		<div>
			<Controls 
				pitches={state.pitches} 
				scales={state.scales} 
				chords={state.chords} 
				type={state.type}
				dispatch={store.dispatch}
			/>
			<Piano octaves={state.octaves} />
		</div>
	);
};

export default App;

import React from 'react';
import { Route, Link } from 'react-router-dom';
import Controls from './Controls.js';
import Piano from './Piano.js';
import Guitar from './Guitar.js';
import FretboardFlipper from '../components/FretboardFlipper.js';
import { flipFretboard } from '../actions/creators.js';
import './Piano.less';
import './Guitar.less';

const App = ({ store }) => {
	var state = store.getState();
	return (
		<div>
			<div className="menu">
				<Controls 
					pitches={state.pitches} 
					scales={state.scales} 
					chords={state.chords} 
					type={state.type}
					dispatch={store.dispatch}
				/>
				<nav>
					<ul>
						<li><Link to="/guitar">Guitar</Link></li>
						<li><Link to="/piano">Piano</Link></li>
					</ul>
				</nav>
			</div>
			<Route path="/guitar" render={
				() => <div>
						<Guitar 
							notes={state.notes} 
							rootNote={state.rootNote} 
							fretboardIsFlipped={state.fretboardIsFlipped} 
						/>
						<FretboardFlipper onFretboardFlip={flipFretboard.bind(null, store.dispatch)} />
					</div>
			} />
			<Route path="/piano" render={
				() => <div>
					<Piano octaves={state.octaves} />
				</div>
			} />
		</div>
	);
};

export default App;

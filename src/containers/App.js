import React from 'react';
import { Route, Link } from 'react-router-dom';
import Controls from './Controls.js';
import Piano from './Piano.js';
import Guitar from './Guitar.js';
import FretboardFlipper from '../components/FretboardFlipper.js';
import Dropdown from '../components/Dropdown.js';
import { flipFretboard, changeTuning } from '../actions/creators.js';
import ComputerKeyboard from './ComputerKeyboard.js';

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
						<li><Link to="/keyboard">Keyboard</Link></li>
					</ul>
				</nav>
			</div>
			<Route path="/guitar" render={
				() => <div className="instrument">
						<Guitar
							notes={state.notes}
							rootNote={state.rootNote}
							fretboardIsFlipped={state.fretboardIsFlipped}
							strings={state.tunings[state.selectedTuningIdx].strings}
						/>
						<div className="guitar-controls">
							<FretboardFlipper onFretboardFlip={flipFretboard.bind(null, store.dispatch)} />
							Tuning:
							<Dropdown
								data={state.tunings}
								controlType = 'tuning'
								onChangeEventHandler={changeTuning.bind(null, store.dispatch)}
								selectedValue={state.tunings[state.selectedTuningIdx].name}
							/>
							<strong>{state.tunings[state.selectedTuningIdx].display}</strong>
						</div>
					</div>
			} />
			<Route path="/piano" render={
				() => <div className="instrument">
					<Piano octaves={state.octaves} />
				</div>
			} />
			<Route path="/keyboard" render={
				() => <div className="instrument">
					<ComputerKeyboard notes={state.notes} rootNote={state.rootNote} />
				</div>
			} />
		</div>
	);
};

export default App;

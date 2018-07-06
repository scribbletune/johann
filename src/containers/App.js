import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Link, withRouter } from 'react-router-dom';
import Controls from './Controls.js';
import Piano from './Piano.js';
import Guitar from './Guitar.js';
import FretboardFlipper from '../components/FretboardFlipper.js';
import Dropdown from '../components/Dropdown.js';
import ComputerKeyboard from './ComputerKeyboard.js';

const App = ({ pitches, scales, chords, type, notes, rootNote, fretboardIsFlipped, tunings, selectedTuningIdx, octaves  }) => {
	return (
		<div>
			<div className="menu">
				<Controls
					pitches={pitches}
					scales={scales}
					chords={chords}
					type={type}
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
							notes={notes}
							rootNote={rootNote}
							fretboardIsFlipped={fretboardIsFlipped}
							strings={tunings[selectedTuningIdx].strings}
						/>
						<div className="guitar-controls">
							<FretboardFlipper />
							Tuning:
							<Dropdown
								data={tunings}
								controlType = 'tuning'
								selectedValue={tunings[selectedTuningIdx].name}
							/>
							<strong>{tunings[selectedTuningIdx].display}</strong>
						</div>
					</div>
			} />
			<Route path="/piano" render={
				() => <div className="instrument">
					<Piano octaves={octaves} />
				</div>
			} />
			<Route path="/keyboard" render={
				() => <div className="instrument">
					<ComputerKeyboard notes={notes} rootNote={rootNote} />
				</div>
			} />
		</div>
	);
};

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(App));

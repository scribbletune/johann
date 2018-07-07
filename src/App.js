import React from 'react';
import { Route, Link } from 'react-router-dom';
import NotesSetter from './components/NotesSetter/index.js';
import Piano from './features/Piano/index.js';
import Guitar from './features/Guitar/index.js';
import GuitarControls from './features/Guitar/GuitarControls.js';
import ComputerKeyboard from './features/ComputerKeyboard/index.js';

const App = () => {
	return (
		<section>
			<div className="menu">
				<NotesSetter />
				<nav>
					<ul>
						<li><Link to="/guitar">Guitar</Link></li>
						<li><Link to="/piano">Piano</Link></li>
						<li><Link to="/keyboard">Keyboard</Link></li>
					</ul>
				</nav>
			</div>
			<div className="instrument">
				<Route path="/guitar" render={
					() => <div>
							<Guitar />
							<GuitarControls />
						</div>
				} />
				<Route path="/piano" component={Piano} />
				<Route path="/keyboard" component={ComputerKeyboard} />
			</div>
		</section>
	);
};

export default App;

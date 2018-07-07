import React from 'react';
import { Route, Link } from 'react-router-dom';
import Controls from './Controls.js';
import Piano from './Piano.js';
import Guitar from './Guitar.js';
import GuitarControls from './GuitarControls.js';
import ComputerKeyboard from './ComputerKeyboard.js';

const App = () => {
	return (
		<section>
			<div className="menu">
				<Controls />
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

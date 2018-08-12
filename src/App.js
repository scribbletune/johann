import React from 'react';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import Piano from './features/Piano';
import Guitar from './features/Guitar';
import ComputerKeyboard from './features/ComputerKeyboard';

const App = () => {
	return (
		<section>
			<Menu />
			<div className="instrument">
				<Route path="/guitar" component={Guitar} />
				<Route path="/piano" component={Piano} />
				<Route path="/keyboard" component={ComputerKeyboard} />
			</div>
		</section>
	);
};

export default App;

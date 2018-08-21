import React from 'react';
import { Route, Link } from 'react-router-dom';
import Menu from './components/Menu';
import Piano from './features/Piano';
import Guitar from './features/Guitar';
import ComputerKeyboard from './features/ComputerKeyboard';

const App = () => {
	// Simple hack to get the current route
	let mainClass = 'page';
	if (location.hash === '#/') {
		mainClass = 'home';
	}

	mainClass += ' app';
	return (
		<section className={mainClass}>
			<Link to="/">
				<h1 className="logo">Johann</h1>
			</Link>
			<Menu />
			<Route path="/guitar" component={Guitar} />
			<Route path="/piano" component={Piano} />
			<Route path="/keyboard" component={ComputerKeyboard} />
		</section>
	);
};

export default App;

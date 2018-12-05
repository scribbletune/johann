import React from 'react';
import { Route, Link } from 'react-router-dom';
import Menu from './components/Menu/index';

import Piano from './modules/Piano';
import Guitar from './modules/Guitar';
import ComputerKeyboard from './modules/ComputerKeyboard';

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
			<Route path='/guitar' exact={true} component={Guitar} />
			<Route path='/piano' exact={true} component={Piano} />
			<Route path='/keyboard' exact={true} component={ComputerKeyboard} />
		</section>
	);
};

export default App;

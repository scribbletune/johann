import React from 'react';
import { Route, Link } from 'react-router-dom';
import Menu from './components/Menu';
import AsyncComponent from './AsyncComponent';

const piano = () => import(/* webpackChunkName: "piano" */ './modules/Piano');
const guitar = () => import(/* webpackChunkName: "guitar" */ './modules/Guitar');
const computerKeyboard = () => import(/* webpackChunkName: "computerKeyboard" */ './modules/ComputerKeyboard');

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
			<Route path='/guitar' exact={true} component={() => <AsyncComponent moduleProvider={guitar} />} />
			<Route path='/piano' exact={true} component={() => <AsyncComponent moduleProvider={piano} />} />
			<Route path='/keyboard' exact={true} component={() => <AsyncComponent moduleProvider={computerKeyboard} />} />
		</section>
	);
};

export default App;

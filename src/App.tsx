import React from 'react';
import { Route, Link } from 'react-router-dom';
import Loadable from "react-loadable";
import Menu from './components/Menu/index';
import './App.less'
import NotesSetter from './components/NotesSetter/index';
export const LoadablePiano = Loadable({
	loader: () => import(/* webpackChunkName: "piano" */ './modules/Piano'),
	loading: () => <div>loading ...</div>
});

export const LoadableGuitar = Loadable({
	loader: () => import(/* webpackChunkName: "guitar" */ './modules/Guitar'),
	loading: () => <div>loading ...</div>
});

export const LoadableComputerKeyboard = Loadable({
	loader: () => import(/* webpackChunkName: "computerKeyboard" */ './modules/ComputerKeyboard'),
	loading: () => <div>loading ...</div>
});

const App = () => {
	// Simple hack to get the current route
	let mainClass = 'page';
	if (location.hash === '#/') {
		mainClass = 'home';
	}

	mainClass += ' app';
	return (
		<section className={mainClass}>
			<nav id="navbar" className="navbar has-shadow is-spaced">
				<div className="navbar-brand">
					<Link to="/">
						<h1 className="logo">Johann</h1>
					</Link>
				</div>
				<div className="navbar-menu">
					<Menu />
				</div>
			</nav>
			<NotesSetter />
			<Route path='/piano' exact={true} component={LoadablePiano} />
			<Route path='/piano' exact={true} component={LoadablePiano} />
			<Route path='/guitar' exact={true} component={LoadableGuitar} />
			<Route path='/keyboard' exact={true} component={LoadableComputerKeyboard} />
		</section>
	);
};

export default App;

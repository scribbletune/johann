import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.js';
import {getChord} from './api.js';

console.log(getChord('cmaj'));

const render = () => {
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
};


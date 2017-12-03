import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.js';
import {getChord} from './api.js';
import './style.less';

const render = () => {
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
};

render();

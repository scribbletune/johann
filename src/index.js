import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { rootReducer } from './reducers/root';
import { initApp } from './actions/creators';
import App from './containers/App.js';

import './style.less';

const store = createStore(rootReducer);

const render = () => {
	ReactDOM.render(
		<App store={store} />,
		document.getElementById('root')
	);
};

store.subscribe(render);

initApp(store);

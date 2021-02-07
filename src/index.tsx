import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/root';
import { initApp } from './actions/creators';
import App from './App';
import MidiInput from './components/MidiInput';

// const store = createStore(rootReducer,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(rootReducer);

const render = () => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <>
          <App />
          <MidiInput />
        </>
      </Provider>
    </HashRouter>,
    document.getElementById('root')
  );
};

store.subscribe(render);

initApp(store.dispatch);

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore , compose } from 'redux'

//Reducers
import {allReducers} from './reducers';

//Components
import App from './App';
import {ScrollToTop} from './components';

//Styles
import './assets/sass/main.scss';


declare global {
	interface Window {
	  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
  }
  
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const myStore = createStore(allReducers, composeEnhancers());

ReactDOM.render(
	<Provider store={myStore}>
		<HashRouter>
			<ScrollToTop />
			<App />
		</HashRouter>
	</Provider>,
	document.getElementById('root')
);

reportWebVitals();
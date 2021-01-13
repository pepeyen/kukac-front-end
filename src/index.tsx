import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

//Components
import App from './App';
import {ScrollToTop} from './components';

//Styles
import './assets/sass/main.scss';

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<ScrollToTop />
			<App />
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
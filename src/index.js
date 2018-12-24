import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'unstated';
import App from 'App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();

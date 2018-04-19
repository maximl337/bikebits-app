import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './containers/Root';
import { history } from './middleware';
import { configureStore } from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
	<Root store={store} history={history} />
	, document.getElementById('root'));
registerServiceWorker();

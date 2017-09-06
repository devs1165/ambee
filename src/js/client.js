import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';
import store from './store';
import Layout from './component/Layout';
// var Immutable = require('immutable');

ReactDOM.render(
		<Provider store={store}>
			<Layout />
		</Provider>,
	document.getElementById('first-task')
);

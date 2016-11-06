import React from 'react';
import {render} from 'react-dom';
import routes from './routes.jsx';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const reducers = combineReducers({
});

export const store = createStore(reducers);


render(
	  <Provider store={store}>
	    {routes}
	  </Provider>
	  , document.getElementById('app')
	);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const enhancers = compose(
  window.devToolsExtension? window.devToolsExtension(): f=> f
);

const defaultState = {};

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, defaultState, enhancers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

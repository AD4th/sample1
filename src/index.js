import React from 'react';
import { render, } from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';

const isProduction = process.env.REACT_APP_NODE_ENV === 'production';
const middlewares = [thunk];
if(!isProduction) middlewares.push(logger);

const store = createStore(
    rootReducer,
    applyMiddleware(
        ...middlewares,
    ),
);

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

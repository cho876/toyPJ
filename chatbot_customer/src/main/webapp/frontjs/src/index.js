import React from "react";
import ReactDOM from 'react-dom';

import {applyMiddleware, createStore} from 'redux';
import rootReducer from './store/rootReducer';

import {createLogger} from "redux-logger/src";
import ReduxThunk from 'redux-thunk';

import {Provider} from 'react-redux';

import './index.css';
import App from './App';

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


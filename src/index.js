import './assets/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import {createBrowserHistory} from "history";
import {ConnectedRouter, connectRouter, routerMiddleware} from "connected-react-router";
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from "redux";
import {createLogger} from 'redux-logger';

const history = createBrowserHistory();
const middleware = [
    routerMiddleware(history),
    createLogger({collapsed: true})
];

const rootReducer = combineReducers({
    router: connectRouter(history)
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes/>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));


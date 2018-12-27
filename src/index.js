import './assets/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import {ConnectedRouter} from "connected-react-router";
import {Provider} from 'react-redux';
import configureStore from "./store/configureStore";
import {createBrowserHistory} from "history";
import initialState from "./store/initialState";


const history = createBrowserHistory();
const store = configureStore(history, initialState, true);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes/>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));


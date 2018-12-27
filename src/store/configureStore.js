import {routerMiddleware} from "connected-react-router";
import {createLogger} from "redux-logger";
import {createRootReducer} from "../reducers";
import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';

export default function (history, initialState = {}, loggingEnabled = false) {

    const middleware = [
        thunk,
        routerMiddleware(history),
    ];

    if (loggingEnabled) {
        middleware.push(createLogger({collapsed: true}));
    }

    const rootReducer = createRootReducer(history);
    return createStore(rootReducer, initialState, applyMiddleware(...middleware));
}


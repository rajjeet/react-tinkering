import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import sampleReducer from "./sampleReducer";
import widgetReducer from "./widgetReducer";
import {reducer as formReducer} from "redux-form";

export const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    sample: sampleReducer,
    widget: widgetReducer,
    form: formReducer
});
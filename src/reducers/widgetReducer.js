import actionTypes from "../actions/actionTypes";

export default function widgetReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.LOAD_WIDGETS_SUCCESS:
            return {...state, widgets: action.payload};
        default:
            return state;
    }
}
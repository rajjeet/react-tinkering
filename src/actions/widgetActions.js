import actionTypes from './actionTypes';
import widgetApi from "../api/mockWidget";

export const loadWidgets = () => {
    return dispatch => {
        dispatch({type: actionTypes.LOAD_WIDGETS_START});
        return widgetApi.getAllWidgets()
            .then(data => {
                    dispatch({type: actionTypes.LOAD_WIDGETS_SUCCESS, payload: data})
                }
            );
    };
};

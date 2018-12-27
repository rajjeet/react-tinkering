import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import initialState from "../../store/initialState";
import * as actions from '../widgetActions';
import actionTypes from "../actionTypes";
import {widgets} from "../../api/mockWidget";

describe('widgetActions', () => {
    describe('loadWidgets', () => {
        it('successfully returns a list of widgets', () => {
            const mockStore = configureStore([thunk]);
            const store = mockStore(initialState);

            return store.dispatch(actions.loadWidgets())
                .then(() => {
                    const actualActions = store.getActions();
                    const expectedActions = [
                        {type: actionTypes.LOAD_WIDGETS_START},
                        {type: actionTypes.LOAD_WIDGETS_SUCCESS, payload: widgets},
                    ];

                    expect(actualActions).toEqual(expectedActions);
                });
        });
    })
});

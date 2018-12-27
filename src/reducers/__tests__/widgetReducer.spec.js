import widgetReducer from '../widgetReducer';
import initialState from '../../store/initialState';
import actionTypes from "../../actions/actionTypes";

describe("widgetReducer", () => {
    it('loads widgets', () => {
        const state = {...initialState.widget, widgets: []};
        const testWidgetArray = [{id: 1, name: 'Widget 1'}, {id: 2, name: 'Widget 2'}];
        const action = {type: actionTypes.LOAD_WIDGETS_SUCCESS, payload: testWidgetArray};

        const actualState = widgetReducer(state, action);
        const expectedState = {...initialState.widget, widgets: testWidgetArray};

        expect(actualState).toEqual(expectedState);
    });
});
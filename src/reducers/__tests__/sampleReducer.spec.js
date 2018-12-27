import sampleReducer from '../sampleReducer';
import initialState from '../../store/initialState';
import actionTypes from "../../actions/actionTypes";

describe("sampleReducer", () => {
    it('doesnt modify state if no action is null', () => {
        const action = {type: ""};
        expect(sampleReducer(initialState, action)).toEqual(initialState);
    });

    it('doesnt modify state if action is undefined', () => {
        const action = {type: undefined};
        expect(sampleReducer(initialState, action)).toEqual(initialState);
    });

    it('increments the metric by payload when action type is SAMPLE_ACTION_START', () => {
        const action = {type: actionTypes.SAMPLE_ACTION_START, payload: 1};
        const expectedState = {...initialState, metric: initialState.metric + action.payload};
        expect(sampleReducer(initialState, action)).toEqual(expectedState);
    });

});
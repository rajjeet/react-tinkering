import * as actions from '../sampleActions';
import actionTypes from "../actionTypes";

describe('sampleAction', () => {
    describe('addMetric', () => {
        it('returns the correct payload to dispatch', () => {
            const expected = {type: actionTypes.SAMPLE_ACTION_START, payload: 1};
            expect(actions.addMetric(1)).toEqual(expected);
        });
    })
});
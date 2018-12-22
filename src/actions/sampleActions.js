import actionTypes from './actionTypes';

export const addMetric = (metric) => {
    return {
        type: actionTypes.SAMPLE_ACTION_START,
        payload: metric
    };
};

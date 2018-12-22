import actionTypes from "../actions/actionTypes";

const initialState = {
    metric: 0
};

export default function sampleReducer(state = initialState, action) {
    switch (action.type) {

        case actionTypes.SAMPLE_ACTION_START:
            return Object.assign({}, state,
                {metric: action.payload + state.metric});

        default:
            return state;
    }
}
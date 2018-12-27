import actionTypes from "../actions/actionTypes";

export default function sampleReducer(state = {}, action) {
    switch (action.type) {

        case actionTypes.SAMPLE_ACTION_START:
            return Object.assign({}, state,
                {metric: action.payload + state.metric});

        default:
            return state;
    }
}
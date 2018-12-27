import configureStore from "../configureStore";
import {createMemoryHistory} from "history";
import initialState from "../initialState";
import * as sampleActions from '../../actions/sampleActions';
import * as widgetActions from '../../actions/widgetActions';
import {widgets} from "../../api/mockWidget";

describe('store', () => {
    it('addMetric action increments metric in sample slice', () => {
        const history = createMemoryHistory();
        const testInitialState = {...initialState, sample: {metric: 1}};
        const store = configureStore(history, testInitialState);
        const action = sampleActions.addMetric(1);

        store.dispatch(action);

        expect(store.getState().sample.metric).toEqual(2)
    });

    it('loadWidgets action hydrates the widget state', () => {
        const history = createMemoryHistory();
        const testInitialState = {...initialState, widget: {widgets: []}};
        const store = configureStore(history, testInitialState);
        const action = widgetActions.loadWidgets();

        return store.dispatch(action)
            .then(() => expect(store.getState().widget).toEqual({widgets: widgets}));
    });
});
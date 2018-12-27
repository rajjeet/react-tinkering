import {GithubPage} from '../GithubPage';
import {shallow, mount} from 'enzyme';
import React from "react";
import configureStore from '../../../store/configureStore';
import initialState from "../../../store/initialState";
import {Provider} from "react-redux";
import {createMemoryHistory} from "history";

describe('GithubPage', () => {
    it('renders a single ReduxForm for GithubRepoSearch component', () => {
        const wrapper = shallow(<GithubPage/>);

        expect(wrapper.first('ReduxForm').props()).toHaveProperty('form', 'githubRepoSearch');
        expect(wrapper.find('ReduxForm')).toHaveLength(1);
    });

    describe('integration tests', () => {

        let store, wrapper, props;

        beforeEach(() => {
            store = configureStore(createMemoryHistory(), initialState);
            props = {
                searchGithubRepo: jest.fn()
            };
            wrapper = mount(
                <Provider store={store}>
                    <GithubPage {...props}/>
                </Provider>
            );
        });

    });

});


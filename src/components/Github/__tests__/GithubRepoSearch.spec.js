import {GithubRepoSearchForm} from '../GithubRepoSearch';
import GithubRepoSearch from '../GithubRepoSearch';
import {mount, shallow} from 'enzyme';
import React from "react";
import configureStore from "../../../store/configureStore";
import {createMemoryHistory} from "history";
import initialState from "../../../store/initialState";
import {Provider} from "react-redux";

describe('GithubRepoSearch', () => {

    describe("unit tests", () => {
        let wrapper, props;
        beforeEach(() => {
            props = {
                handleSubmit: fn => fn,
                reset: jest.fn()
            };
            wrapper = shallow(<GithubRepoSearchForm {...props} />);
        });

        it('renders a form with onSubmit prop', () => {
            expect(wrapper.type()).toEqual('form');
        });

        it('renders a form with an input for organization name', () => {
            expect(wrapper.find("Field[name='orgName']")).toHaveLength(1);
        });

        it('renders a form with a single submit button', () => {
            expect(wrapper.find("button[type='submit']")).toHaveLength(1);
        });

        it('invokes the resetForm prop when form is submitted', () => {
            wrapper.find("form").simulate("submit");
            expect(props.reset).toBeCalledTimes(1);
        });
    });

    describe('integration tests', () => {

        let store, wrapper, props;

        beforeEach(() => {
            store = configureStore(createMemoryHistory(), initialState);
            props = {
                mySubmit: jest.fn()
            };
            wrapper = mount(
                <Provider store={store}>
                    <GithubRepoSearch {...props}/>
                </Provider>
            );
        });

        it('renders the value typed into the input', () => {
            wrapper.find("input[name='orgName']")
                .simulate("change", {target: {value: 'Test Value'}});
            expect(wrapper.find("input[name='orgName']").props())
                .toHaveProperty('value', 'Test Value');
        });

        it('resets the form after submitting', () => {
            wrapper.find("input[name='orgName']")
                .simulate("change", {target: {value: 'Test Value'}});
            wrapper.find("form")
                .simulate("submit");

            expect(wrapper.find("input[name='orgName']").props())
                .toHaveProperty('value', '');
        });

    });
});
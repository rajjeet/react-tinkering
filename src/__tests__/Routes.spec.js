import {Routes} from '../Routes';
import {mount, shallow} from 'enzyme';
import React from "react";
import {MemoryRouter} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import initialState from "../store/initialState";
import actionTypes from "../actions/actionTypes";
import thunk from 'redux-thunk';

const setup = (pathUnderTest) => {
    const mockStore = configureStore([thunk]);
    const store = mockStore(initialState);
    const wrapper = mount(
        <Provider store={store}>
            <MemoryRouter initialEntries={[pathUnderTest]}>
                <Routes/>
            </MemoryRouter>
        </Provider>
    );
    return {wrapper, store};
};

describe('Routes', () => {
    describe('navigation', () => {
        it('renders AppBar and HomePage when path is /', () => {
            const {wrapper} = setup('/');

            expect(wrapper.find('AppBar')).toHaveLength(1);
            expect(wrapper.find('HomePage')).toHaveLength(1);
        });

        it('renders only AppBar when path is random and unknown', () => {
            const {wrapper} = setup('/xxxxxx');

            expect(wrapper.find('AppBar')).toHaveLength(1);
            expect(wrapper.find('HomePage')).toHaveLength(0);
        });

        it('renders only AppBar and Contact when path is /contact', () => {
            const {wrapper} = setup('/contact');

            expect(wrapper.find('AppBar')).toHaveLength(1);
            expect(wrapper.find('HomePage')).toHaveLength(0);
            expect(wrapper.find('.contact-container')).toHaveLength(1);
        });

        it('renders only AppBar and About when path is /about', () => {
            const {wrapper} = setup('/about');

            expect(wrapper.find('AppBar')).toHaveLength(1);
            expect(wrapper.find('HomePage')).toHaveLength(0);
            expect(wrapper.find('.contact-container')).toHaveLength(0);
            expect(wrapper.find('.about-container')).toHaveLength(1);
        });

        it('renders only AppBar and WidgetPage when path is /widgets', () => {
            const {wrapper} = setup('/widgets');

            expect(wrapper.find('AppBar')).toHaveLength(1);
            expect(wrapper.find('HomePage')).toHaveLength(0);
            expect(wrapper.find('WidgetPage')).toHaveLength(1);
        });

        it('renders only AppBar and GithubPage when path is /github', () => {
            const {wrapper} = setup('/github');

            expect(wrapper.find('AppBar')).toHaveLength(1);
            expect(wrapper.find('HomePage')).toHaveLength(0);
            expect(wrapper.find('WidgetPage')).toHaveLength(0);
            expect(wrapper.find('GithubPage')).toHaveLength(1);
        });

    });

    it('dispatches LOAD_WIDGETS_START when app navigates to /widgets', () => {
        const {store} = setup('/widgets');

        const actualActions = store.getActions();
        expect(actualActions).toContainEqual({type: actionTypes.LOAD_WIDGETS_START});
    });


});
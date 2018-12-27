import {Routes} from '../Routes';
import {mount, shallow} from 'enzyme';
import React from "react";
import {MemoryRouter} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';


describe('Routes', () => {

    it('renders AppPage and HomePage when path is /', () => {
        const mockStore = configureStore([]);
        const store = mockStore({sample: {metric: 0}});
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']} initialIndex={0}>
                    <Routes/>
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find('AppBar')).toHaveLength(1);
        expect(wrapper.find('HomePage')).toHaveLength(1);
    });

    it('renders only AppPage when path is random and unknown', () => {
        const mockStore = configureStore([]);
        const store = mockStore({sample: {metric: 0}});
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/asfr32']}>
                    <Routes/>
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find('AppBar')).toHaveLength(1);
        expect(wrapper.find('HomePage')).toHaveLength(0);
    });

    it('renders only AppPage and Contact when path is /contact', () => {
        const mockStore = configureStore([]);
        const store = mockStore({sample: {metric: 0}});
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/contact']}>
                    <Routes/>
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find('AppBar')).toHaveLength(1);
        expect(wrapper.find('HomePage')).toHaveLength(0);
        expect(wrapper.find('.contact-container')).toHaveLength(1);
    });

    it('renders only AppPage and About when path is /about', () => {
        const mockStore = configureStore([]);
        const store = mockStore({sample: {metric: 0}});
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/about']}>
                    <Routes/>
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find('AppBar')).toHaveLength(1);
        expect(wrapper.find('HomePage')).toHaveLength(0);
        expect(wrapper.find('.contact-container')).toHaveLength(0);
        expect(wrapper.find('.about-container')).toHaveLength(1);
    });

});
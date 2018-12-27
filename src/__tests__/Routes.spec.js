import {Routes} from '../Routes';
import {mount, shallow} from 'enzyme';
import React from "react";
import {MemoryRouter} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';


const setup = (pathUnderTest) => {
    const mockStore = configureStore([]);
    const store = mockStore({sample: {metric: 0}});
    const wrapper = mount(
        <Provider store={store}>
            <MemoryRouter initialEntries={[pathUnderTest]} initialIndex={0}>
                <Routes/>
            </MemoryRouter>
        </Provider>
    );
    return wrapper;
};

describe('Routes', () => {

    it('renders AppPage and HomePage when path is /', () => {
        const wrapper = setup('/');

        expect(wrapper.find('AppBar')).toHaveLength(1);
        expect(wrapper.find('HomePage')).toHaveLength(1);
    });

    it('renders only AppPage when path is random and unknown', () => {
        const wrapper = setup('/xxxxxx');

        expect(wrapper.find('AppBar')).toHaveLength(1);
        expect(wrapper.find('HomePage')).toHaveLength(0);
    });

    it('renders only AppPage and Contact when path is /contact', () => {
        const wrapper = setup('/contact');

        expect(wrapper.find('AppBar')).toHaveLength(1);
        expect(wrapper.find('HomePage')).toHaveLength(0);
        expect(wrapper.find('.contact-container')).toHaveLength(1);
    });

    it('renders only AppPage and About when path is /about', () => {
        const wrapper = setup('/about');

        expect(wrapper.find('AppBar')).toHaveLength(1);
        expect(wrapper.find('HomePage')).toHaveLength(0);
        expect(wrapper.find('.contact-container')).toHaveLength(0);
        expect(wrapper.find('.about-container')).toHaveLength(1);
    });

});
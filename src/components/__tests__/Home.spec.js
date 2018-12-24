import React from "react";
import Home from "../Home";
import {shallow} from 'enzyme';

describe('Home', () => {

    it('contains a Button component', () => {
        const wrapper = shallow(<Home/>);
        expect(wrapper.find('Button')).toHaveLength(1);
    });

    it('contains a button component', () => {
        const wrapper = shallow(<Home/>);
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('contains an onAdd prop', () => {
        const mockFunc = jest.fn();
        const wrapper = shallow(<Home onAdd={mockFunc}/>);
        expect(wrapper.find('button').prop('onClick')).toEqual(mockFunc);
    });

    it('renders an element with .metric class with the metric prop', () => {
        const wrapper = shallow(<Home metric={1337} />);
        expect(wrapper.find('.metric').text()).toContain('1337');
    });
});
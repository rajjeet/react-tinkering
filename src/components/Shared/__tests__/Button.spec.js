import React from "react";
import {shallow} from 'enzyme';
import Button from '../Button';

describe('Button', () => {
    it('renders a button element with input text', () => {
        const expectedText = 'SUBSCRIBE TO BASIC';
        const wrapper = shallow(<Button text={expectedText}/>);

        expect(wrapper.first('button')).toHaveLength(1);
        expect(wrapper.first('button').text()).toEqual(expectedText);
    });

    it('renders a button element with no text', () => {
        const wrapper = shallow(<Button />);

        expect(wrapper.first('button')).toHaveLength(1);
        expect(wrapper.first('button').text()).toEqual("");
    });

    it('shows the expected text when clicked', () => {
        const wrapper = shallow(<Button />);
        wrapper.first('button').simulate('click');

        expect(wrapper.first('button').text()).toEqual("PROCEED TO CHECKOUT");

    });
});


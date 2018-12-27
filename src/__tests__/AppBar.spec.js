import {AppBar} from '../Routes';
import {shallow} from "enzyme";
import React from "react";

describe('AppBar', () => {
    it('renders with the correct links', () => {
        const wrapper = shallow(<AppBar/>);
        expect(wrapper.find('Link').length).toEqual(4);
        expect(wrapper.find({to: "/"}).length).toEqual(1);
        expect(wrapper.find({to: "/about"}).length).toEqual(1);
        expect(wrapper.find({to: "/contact"}).length).toEqual(1);
        expect(wrapper.find({to: "/widgets"}).length).toEqual(1);
    });
});
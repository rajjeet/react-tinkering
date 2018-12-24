import React from "react";
import {HomePage} from "../HomePage";
import {mount, shallow} from 'enzyme';

describe('HomePage container component', () => {
    it('renders a Home component', () => {
        const wrapper = shallow(<HomePage/>);

        expect(wrapper.find('Home')).toHaveLength(1);
    });

    it('renders a Home component with the correct metric prop', () => {
        const wrapper = shallow(<HomePage metric={1} />);

        expect(wrapper.find('Home').prop('metric')).toEqual(1);
    });

    it('adds the Metric once the clicks the add button', () => {
        const mockAddMetric = jest.fn();
        const wrapper = mount(<HomePage metric={1337} addMetric={mockAddMetric}/>);

        wrapper.find('.addMetricBtn').simulate('click');

        expect(wrapper.props().addMetric).toBeCalledTimes(1);
    });
});
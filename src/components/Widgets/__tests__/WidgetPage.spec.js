import {WidgetPage} from "../WidgetPage";
import {shallow, mount} from "enzyme";
import React from "react";

describe('WidgetPage', () => {
    it('renders a WidgetList component', () => {
        const wrapper = shallow(<WidgetPage/>);
        expect(wrapper.find('WidgetList')).toHaveLength(1);
    });

    it('initiates loading of widgets when rendered', () => {
        const mockLoadWidgets = jest.fn();
        shallow(<WidgetPage loadWidgets={mockLoadWidgets} />);
        expect(mockLoadWidgets).toBeCalledTimes(1);
    });

});

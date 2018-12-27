import {shallow} from 'enzyme';
import WidgetList from '../WidgetList';
import React from 'react';

const widgets = [
    {id: '1', name: 'test widget 1', description: 'this is description 1'},
    {id: '2', name: 'test widget 2', description: 'this is description 2'},
    {id: '3', name: 'test widget 3', description: 'this is description 3'},
];

describe('WidgetList', () => {
    it('renders a table with 3 columns', () => {
        const wrapper = shallow(<WidgetList/>);
        expect(wrapper.find('table')).toHaveLength(1);
        expect(wrapper.find('table thead tr th')).toHaveLength(3);
        expect(wrapper.find('table tbody tr td')).toHaveLength(0);
    });

    it('renders 3 rows of widgets provided 3 widgets', () => {
        const wrapper = shallow(<WidgetList widgets={widgets} />);

        expect(wrapper.find('table tbody tr')).toHaveLength(3);
        expect(wrapper.find('table tbody tr td')).toHaveLength(9);
    });

});
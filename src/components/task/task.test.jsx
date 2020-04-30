import React from 'react'
import { shallow } from 'enzyme'
import Task from './task'
import store from "../../redux/store";

describe('<Task/>', () => {
    const component = shallow(<Task store={store}/>);
    it('should render ', () => {
        expect(component.exists()).toBe(true);
    });
});
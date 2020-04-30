import React from 'react'
import { shallow } from 'enzyme'
import TaskApp from './task-app'
import store from "./redux/store";

describe('<TaskApp/>', () => {
    const component = shallow(<TaskApp store={store}/>);
    it('should render ', () => {
        expect(component.exists()).toBe(true);
    });
});
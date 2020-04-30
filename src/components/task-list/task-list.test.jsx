import React from 'react'
import { shallow } from 'enzyme'
import TaskList from './task-list'
import store from "../../redux/store";


describe('<TaskList/>', () => {
    it('should render ', () => {
        const wrapper = shallow(<TaskList store={store}/>)
        expect(wrapper.exists()).toBe(true);
    })
    
});

import React from 'react'
import { shallow, mount } from 'enzyme'
import AddTask, { handleAddTodo } from './add-task'
import store from "../../redux/store";
 

describe('<AddTask/>', () => {
    const onSubmitFn = jest.fn()
    const component = shallow(<AddTask onSubmit={onSubmitFn} store={store}/>)
    it('should render', () => {
        expect(component.exists()).toBe(true);
    });
    it('checks empty input', () => {
        expect(component.find('.inputTask').length).toEqual(0);
    });
    it('simulates the handleAddTodo', () => {
        const comp = mount(<AddTask store={store} />)
        const button = comp.find('button.addTask');
        button.simulate('click');
        expect(onSubmitFn).toHaveBeenCalledTimes(1);
      });
});

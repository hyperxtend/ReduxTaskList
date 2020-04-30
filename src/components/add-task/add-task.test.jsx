import React from 'react'
import { shallow, mount } from 'enzyme'
import AddTask, { handleAddTodo } from './add-task'
import store from "../../redux/store";
 


describe('<AddTask/>', () => {
    const component = shallow(<AddTask store={store}/>);
    const submitMock = jest.fn();
    let comp;
    
    it('should render', () => {
        expect(component.exists()).toBe(true);
    });
    it('checks empty input', () => {
        expect(component.find('.inputTask').length).toEqual(0);
    });
    it('Should call the submitTodo function when clicked', () => {
        comp = mount(<AddTask store={store} handleAddTodo={submitMock} />);
        expect(submitMock.mock.calls.length).toEqual(0);
        comp.find('form').simulate('submit');
        expect(submitMock.mock.calls.length).toEqual();
        // wrapper.find('form').at(0).simulate('submit');
        // expect(onSubmitSpy).toHaveBeenCalled();
      });
});

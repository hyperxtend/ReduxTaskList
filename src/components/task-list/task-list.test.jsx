import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TaskList from './task-list'
import store from "../../redux/store";
Enzyme.configure({ adapter: new Adapter() })

describe('<TaskList/>', () => {
 const TO_DOs = [];
 let wrapper = {};
        wrapper = shallow(<TaskList todos={TO_DOs}/>, {disableLifecycleMethods: true});
    });
    it('should render ', () => {
        
        expect(wrapper.toExist()).toBe(true);
  
    })
  })

import React from 'react'
import { shallow } from 'enzyme'
import VisibilityFilters from './visibility-filters'
import store from "../../redux/store";

describe('<VisibilityFilters/>', () => {
    const component = shallow(<VisibilityFilters store={store}/>);
    it('should render ', () => {
        expect(component.exists()).toBe(true);
    });
});
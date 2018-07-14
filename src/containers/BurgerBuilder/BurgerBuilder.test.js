import React from 'react'
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BurgerBuilder} from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
configure({
    adapter:new Adapter()
});
let wrapper;
beforeEach(()=>{
wrapper=shallow(<BurgerBuilder onInitIngredient={()=>{}}/>)
});
describe("<BurgerBuilder>",()=>{
    it("should render BuildControls when receiving ings",()=>{
        wrapper.setProps({
         ings:{salad:0}
      })
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    })
});

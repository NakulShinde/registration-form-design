import React from 'react';
import {shallow} from 'enzyme'
import Header from './Header';

it('renders header with Registration Forms heading', () => {
  const wrapper = shallow(<Header />);
  const msg = "Registration Forms";
  expect(wrapper.contains(msg)).toEqual(true);
});
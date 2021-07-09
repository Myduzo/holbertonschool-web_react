import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Login from './Login';

describe('Test Login renders', () => {
  it('renders without crashing', () => {
    expect(shallow(<Login />).exists());
  })

  it('renders 2 input and 2 label', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).to.have.length(2);
    expect(wrapper.find('label')).to.have.length(2);
  })
})

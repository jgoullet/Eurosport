import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './App';
import GetOnlinePlayers from './components/OnlinePlayers/GetOnlinePlayers';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).to.contain(<GetOnlinePlayers />)
  })
  it('should match its reference snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).to.matchSnapshot();
  });
})
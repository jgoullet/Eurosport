import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';

import GetOnlinePlayers from './components/OnlinePlayers/GetOnlinePlayers';

describe('Tests for GetOnlinePlayers Component', () => {
  it('calls componentDidMount', () => {
    sinon.spy(GetOnlinePlayers.prototype, 'componentDidMount')
    const wrapper = mount(<GetOnlinePlayers />)
    wrapper.setState({ isLoaded: false });
    expect(GetOnlinePlayers.prototype.componentDidMount.calledOnce).to.equal(true);
  });

}) 
import React from 'react';
import {mount} from 'enzyme';
import Home from '../src/js/components/Home.jsx';
import appStore from '../src/js/stores/appStore';

describe('Home', () => {
  
  it('mounts', () => {
    const wrapper = mount(<Home appStore={appStore}/>);
    expect(wrapper.find('#home')).to.exist;
  })
  
});
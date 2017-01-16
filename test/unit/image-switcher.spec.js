import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import ImageSwitcher from '../../app/components/ImageSwitcher';

describe('<ImageSwitcher/>', function() {

  describe('basic component', function() {
    let wrapper;
    const side = 'right';
    before(function() {
      wrapper = shallow(<ImageSwitcher side={ side }/>);
    });

    it('should render the wrapper and child components', function() {
      expect(wrapper.node.props.className).to.equal(`switcher ${side}`);
      const images = wrapper.find('button');
      expect(images).to.have.length(1);
      expect(images.node.props.className).to.equal(side);
    });
  });

  describe('accept props and pass them down', function() {
    let wrapper;
    const onArrowClick = sinon.spy();
    before(function() {
      wrapper = mount(<ImageSwitcher side="next" switchFn={ onArrowClick }/>);
    });

    it('should receive props', function() {
      expect(wrapper.props().side).to.be.defined;
      expect(wrapper.props().side).to.be.an('string');
      expect(wrapper.props().switchFn).to.be.defined;
      expect(wrapper.props().switchFn).to.be.a('function');
    });

    it('should call switchFn when switcher button is clicked', function() {
      wrapper.find('button').simulate('click');
      expect(onArrowClick).to.have.property('callCount', 1);
    });
  });
});

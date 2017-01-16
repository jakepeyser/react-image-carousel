import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import ImageCarousel from '../../app/components/ImageCarousel';

describe('<ImageCarousel/>', function() {

  describe('basic component', function() {
    let wrapper;
    before(function() {
      wrapper = shallow(<ImageCarousel />);
    });

    it('should render the wrapper and child components', function() {
      expect(wrapper.node.props.className).to.equal('image-carousel');
      const images = wrapper.find('ul');
      expect(images).to.have.length(1);
      expect(images.node.props.className).to.equal('images');
    });
  });

  describe('default props and state', function() {
    let wrapper;
    before(function() {
      wrapper = mount(<ImageCarousel />);
    });

    it('should have default props', function() {
      expect(wrapper.props().images).to.be.defined;
      expect(wrapper.props().images).to.be.an('array');
      expect(wrapper.props().initSlide).to.be.defined;
      expect(wrapper.props().initSlide).to.be.a('number');
    });

    it('should have a determinate default state', function() {
      expect(wrapper.state().curSlide).to.be.defined;
      expect(wrapper.state().curSlide).to.equal(wrapper.props().initSlide);
    });
  });

  describe('prop passing', function() {
    let wrapper;
    const initSlide = 2;
    const images = [ 'http://www.mindshiftinteractive.com/wp-content/uploads/2016/10/test-big.png',
                     'http://www.mindshiftinteractive.com/wp-content/uploads/2016/10/test-big.png',
                     'http://www.mindshiftinteractive.com/wp-content/uploads/2016/10/test-big.png'
                   ]
    before(function() {
      wrapper = shallow(<ImageCarousel initSlide={ initSlide } images={ images }/>);
    });

    it('should set the state according to input props', function() {
      expect(wrapper.state().curSlide).to.equal(initSlide);
    });

    it('should render the image list items', function() {
      expect(wrapper.find('.images').children()).to.have.length(images.length);

      // Retrieve rendered list items
      const image = wrapper.find('li');
      expect(image).to.have.length(3);
      expect(image.node.props.className).to.equal('image');

      // Check img child
      expect(image.node.props.children.type).to.equal('img');
      expect(image.node.props.children.props.src).to.equal(images[0]);
    });
  });
});

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import ImageCarousel from '../../app/components/ImageCarousel';
import ImageSwitcher from '../../app/components/ImageSwitcher';

const testImages = [
  'http://www.mindshiftinteractive.com/wp-content/uploads/2016/10/test-big.png',
  'http://www.mindshiftinteractive.com/wp-content/uploads/2016/10/test-big.png',
  'http://www.mindshiftinteractive.com/wp-content/uploads/2016/10/test-big.png'
];

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
      expect(wrapper.state().carouselRotate).to.be.defined;
      expect(wrapper.state().carouselRotate).to.equal('0%');
    });
  });

  describe('realistic scenario', function() {
    let wrapper;
    const initSlide = 1;
    before(function() {
      wrapper = shallow(<ImageCarousel initSlide={ initSlide } images={ testImages }/>);
    });

    it('should set the state according to input props', function() {
      expect(wrapper.state().curSlide).to.equal(initSlide);
    });

    it('should render the image list items', function() {
      expect(wrapper.find('.images').children()).to.have.length(testImages.length);

      // Retrieve rendered list items
      const image = wrapper.find('li');
      expect(image).to.have.length(3);
      expect(image.node.props.className).to.equal('image');

      // Check img child
      expect(image.node.props.children.type).to.equal('img');
      expect(image.node.props.children.props.src).to.equal(testImages[0]);
    });
  });

  describe('all possible arrow situations', function() {

    it('should only have a next ImageSwitcher', function() {
      let wrapper = shallow(<ImageCarousel initSlide={ 0 } images={ testImages }/>);
      expect(wrapper.find(ImageSwitcher)).to.have.length(1);
      expect(wrapper.find(ImageSwitcher).props().side).to.equal('next');
    });

    it('should have both a prev and next ImageSwitcher', function() {
      let wrapper = shallow(<ImageCarousel initSlide={ 1 } images={ testImages }/>);
      expect(wrapper.find(ImageSwitcher)).to.have.length(2);
    });

    it('should only have a prev ImageSwitcher', function() {
      let wrapper = shallow(<ImageCarousel initSlide={ testImages.length - 1 } images={ testImages }/>);
      expect(wrapper.find(ImageSwitcher)).to.have.length(1);
      expect(wrapper.find(ImageSwitcher).props().side).to.equal('prev');
    });
  });

  describe('image indicators', function() {
    let wrapper;
    let initSlide = 1;
    before(function() {
      wrapper = shallow(<ImageCarousel initSlide={ initSlide } images={ testImages }/>);
    });

    it('should have the right number of indicators', function() {
      expect(wrapper.find('.bubble')).to.have.length(testImages.length);
    });

    it('should have the correct active indicator bubble', function() {
      let activeClass;
      wrapper.find('.bubble').nodes.forEach((bubble, idx) => {
        activeClass = idx === initSlide ? 'active' : '';
        expect(bubble.props.className).to.equal(`bubble ${activeClass}`);
      })
    });
  });
});

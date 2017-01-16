import React from 'react';
import { shallow } from 'enzyme';
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
    });
  });
});

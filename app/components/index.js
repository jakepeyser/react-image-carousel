/* eslint-disable no-unused-vars*/

// React/Redux modules
import React from 'react';
import ReactDOM from 'react-dom';

// React containers and components
import ImageCarousel from './ImageCarousel';

const images = [
  'https://afar-production.imgix.net/uploads/destination/headers/images/BLRJKbXAGy/original_NAPA_VALLEY_banner.jpg?1473280713?ixlib=rails-0.3.0&w=985&h=380',
  'https://afar-production.imgix.net/uploads/destination/headers/images/EMfjf3jWnn/original_PARIS_banner.jpg?1473270441?ixlib=rails-0.3.0&w=985&h=380',
  'https://afar-production.imgix.net/uploads/destination/headers/images/u8l7SgNVr4/original_ROME_banner.jpg?1473270495?ixlib=rails-0.3.0&w=985&h=380',
  'https://afar-production.imgix.net/uploads/destination/headers/images/6RM1WkY5V4/original_SAN_FRANCISCO_banner.jpg?1473270556?ixlib=rails-0.3.0&w=985&h=380',
  'https://afar-production.imgix.net/uploads/destination/headers/images/2Gie8bY8Z4/original_SEOUL_banner.jpg?1473270668?ixlib=rails-0.3.0&w=985&h=380',
  'https://afar-production.imgix.net/uploads/destination/headers/images/Tx8ls3haTQ/original_CANADA_banner.jpg?1473269793?ixlib=rails-0.3.0&w=985&h=380'
]

ReactDOM.render(
  <ImageCarousel images={ images }/>,
  document.getElementById('app')
);

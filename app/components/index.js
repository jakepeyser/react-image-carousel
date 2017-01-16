/* eslint-disable no-unused-vars*/

// React/Redux modules
import React from 'react';
import ReactDOM from 'react-dom';

// React containers and components
import ImageCarousel from './ImageCarousel';

ReactDOM.render(
  <ImageCarousel images={ [ 'test1', 'test2', 'test3' ] }/>,
  document.getElementById('app')
);

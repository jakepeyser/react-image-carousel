import React from 'react';

// Button used for navigating the ImageCarousel
// Input prop 'side' must be either "left" or "right"
export default ({ side, switchFn }) => (
  <div className={`switcher ${side}`}>
    <button className={`${side}`}
      onClick={ () => switchFn(side) }
    />
  </div>
)

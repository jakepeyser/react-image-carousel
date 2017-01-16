import React from 'react';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curSlide: this.props.initSlide
    }
  }

  render() {
    return (
      <div className="image-carousel">
        <ul className="images">
        { // Nest all images inside list elements
          this.props.images.map(image => {
            return (
              <li key={ image } className="image"
                style={{ width: `${100 / this.props.images.length}%` }}>
                <img src='http://www.mindshiftinteractive.com/wp-content/uploads/2016/10/test-big.png' />
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}

ImageCarousel.defaultProps = {
  images: [],
  initSlide: 0
}

ImageCarousel.propTypes = {
  images: React.PropTypes.arrayOf(React.PropTypes.string),
  initSlide: React.PropTypes.number
};

export default ImageCarousel;

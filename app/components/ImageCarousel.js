import React from 'react';
import ImageSwitcher from './ImageSwitcher';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curSlide: this.props.initSlide,
      carouselRotate: '0%'
    }
    this.changeSlides = this.changeSlides.bind(this);
  }

  // Rotate current slide depending on button clicked
  changeSlides(side) {
    const newSlide = side === 'prev' ?
      this.state.curSlide - 1 : this.state.curSlide + 1;
    const newRotation = `${newSlide * -100}%`;
    this.setState({
      curSlide: newSlide,
      carouselRotate: newRotation
    })
  }

  render() {
    return (
      <div className="image-carousel">
        <ul className="images"
          style={{ marginLeft: this.state.carouselRotate }}>
        { // Nest all images inside list elements
          this.props.images.map((image, idx) => {
            let slideWidthPct = 100 / this.props.images.length;
            return (
              <li key={ image } className="image"
                style={{
                  width: `${slideWidthPct}%`,
                  left: `${(slideWidthPct * idx)}%`
                }}>
                <img src='http://www.mindshiftinteractive.com/wp-content/uploads/2016/10/test-big.png' />
              </li>
            )
          })
        }
        </ul>
        { // Only show left switcher when curSlide is nonzero
          this.state.curSlide ?
            <ImageSwitcher side="prev" switchFn={ this.changeSlides } /> : null
        }
        { // Only show right switcher when not on last slide
          this.state.curSlide < this.props.images.length - 1 ?
            <ImageSwitcher side="next" switchFn={ this.changeSlides } /> : null
        }
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

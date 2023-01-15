import React, { Component } from 'react';
import Slider from 'react-slick';
import './slider.css';

class ImageSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div className='image-slider'>
          <div className='card'>
            <div className='image'>
            <img src="images/slide1.png" alt="image1" />
            </div>
            <div className='text'>
              <h2>Header</h2>
              <p>Text for image 1</p>
            </div>
          </div>
        </div>
        <div className='image-slider'>
          <div className='card'>
            <div className='image'>
            <img src="images/slide2.jpg" alt="image2" />
            </div>
            <div className='text'>
              <h2>Header</h2>
              <p>Text for image 2</p>
            </div>
          </div>
        </div>
        <div className='image-slider'>
          <div className='card'>
            <div className='image'>
            <img src="images/slide3.jpg" alt="image3" />
            </div>
            <div className='text'>
              <h2>Header</h2>
              <p>Text for image 3</p>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default ImageSlider;

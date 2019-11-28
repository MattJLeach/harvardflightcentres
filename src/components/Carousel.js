import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';
 
class DemoCarousel extends React.Component {
  render() {
    return (
      <Carousel
        showThumbs={false} 
        showStatus={false} 
        showIndicators={false} 
        infiniteLoop={true}
        autoPlay={true}
        interval={6000}
        transitionTime={1500}
        stopOnHover={false}
      >
        {/* <div>
          <img src={slide1} alt="slide1" />
        </div> */}
        <div>
          <img src={slide2} alt="slide2" />
        </div>
        <div>
          <img src={slide3} alt="slide3" />
        </div>
        <div>
          <img src={slide4} alt="slide4" />
        </div>
        <div>
          <img src={slide5} alt="slide5" />
        </div>
      </Carousel>
    );
  }
};

export default DemoCarousel;
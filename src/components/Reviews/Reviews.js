import { memo, useRef, useState } from 'react';
import Slider from 'react-slick';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import PropTypes from 'prop-types';

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import './Reviews.scss';
// import DATA from './Data';
import ReviewCard from './Card/Card';
import RatingStars from './RatingStars/RatingStars';

const CAROUSEL_OPTIONS = {
  dots: false,
  slidesToShow: 3,
  infinite: true,
  className: "reviews__carousel",
  autoplay: true,
  speed: 1750,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 860,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 768,
      settings: {
        swipeToSlide: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 520,
      settings: {
        swipeToSlide: true,
        slidesToShow: 1
      }
    },
  ]
};

const Reviews = ({ reviews }) => {
  const sliderRef = useRef();
  const [grabbing, setGrabbing] = useState(false);

  // Dummy data
  // const { reviews = [] } = JSON.parse(DATA);

  let reviewsElements = [], averageRating = 1;
  if (reviews && reviews.length) {
    reviewsElements = reviews.map(el => <ReviewCard key={el.id} review={el} />);
    averageRating = (reviews.reduce((ac, el) => +ac + +el.score, 0) / reviews.length);
  }

  return (
    <div className="reviews">
      <div className="reviews__head">
        <p>Real reviews from real customers</p>
        <div className="reviews__head__right">
          <RatingStars rating={averageRating} />
          <div className="reviews__head__right-wrapper">
            <span className="reviews__count">{reviews?.length || 0} Reviews</span>
            <div>
              <button 
                className="reviews__btn reviews__btn--prev" 
                onClick={() => sliderRef.current?.slickPrev()}
              >
                <BsChevronLeft className="reviews__icon" />
              </button>
              <button 
                className="reviews__btn reviews__btn--next" 
                onClick={() => sliderRef.current?.slickNext()}
              >
                <BsChevronRight className="reviews__icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div 
        className="reviews__carousel-wrapper" 
        onMouseUp={() => setGrabbing(false)}
        onMouseDown={() => setGrabbing(true)}
        style={{ cursor: grabbing ? 'grabbing' : 'grab' }}>
        <Slider ref={sliderRef} {...CAROUSEL_OPTIONS}>
          {reviewsElements}
        </Slider>
      </div>
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default memo(Reviews);

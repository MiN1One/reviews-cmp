import { memo, useRef } from 'react';
import Slider from 'react-slick';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import './Reviews.scss';
import DATA from './Data';
import ReviewCard from './Card/Card';
import RatingStars from './RatingStars/RatingStars';

const CAROUSEL_OPTIONS = {
  dots: false,
  slidesToShow: 3,
  infinite: true,
  className: "reviews__carousel",
  centerPadding: '15px',
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2500,
  swipeToSlide: false,
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

const Reviews = ({ data }) => {
  const sliderRef = useRef();

  const { reviews = [] } = JSON.parse(DATA);

  let reviewItems = [], averageRating = 1;
  if (reviews && reviews.length) {
    reviewItems = reviews.map(el => <ReviewCard key={el.id} data={el} />);
    averageRating = (reviews.reduce((ac, el) => +ac + +el.score, 0) / reviews.length);
  }

  return (
    <div className="reviews">
      <div className="reviews__head">
        <p>Real reviews from real customers</p>
        <div className="reviews__head__right">
          <RatingStars rating={averageRating} />
          <span className="reviews__count">{reviews.length}</span>
          <div className="review__btn-group">
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
      <Slider ref={sliderRef} {...CAROUSEL_OPTIONS} >
        {reviewItems}
      </Slider>
    </div>
  );
}

export default memo(Reviews);

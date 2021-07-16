import React from 'react';
import { IoMdStarOutline, IoMdStarHalf, IoMdStar } from 'react-icons/io';
import ReactStars from 'react-rating-stars-component';

const RatingStars = ({ rating, className }) =>
  <ReactStars 
    value={rating}
    edit={false}
    className={className || ''}
    isHalf={true}
    emptyIcon={<IoMdStarOutline className="reviews__icon-stars" />}
    halfIcon={<IoMdStarHalf className="reviews__icon-stars" />}
    filledIcon={<IoMdStar className="reviews__icon-stars" />}
  />;

export default RatingStars;

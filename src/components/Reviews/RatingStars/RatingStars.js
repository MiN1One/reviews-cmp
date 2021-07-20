import React from 'react';
import { IoMdStarOutline, IoMdStarHalf, IoMdStar } from 'react-icons/io';
import ReactStars from 'react-rating-stars-component';
import PropTypes from 'prop-types';

const RatingStars = ({ rating }) =>
  <ReactStars
    value={rating || 1}
    edit={false}
    isHalf={true}
    emptyIcon={<IoMdStarOutline className="reviews__icon-stars" />}
    halfIcon={<IoMdStarHalf className="reviews__icon-stars" />}
    filledIcon={<IoMdStar className="reviews__icon-stars" />}
  />;

RatingStars.propTypes = { rating: PropTypes.number.isRequired };

export default RatingStars;

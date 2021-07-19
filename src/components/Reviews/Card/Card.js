import { memo } from 'react';
import PropTypes from 'prop-types';

import image from '../../../assets/images/square.jpg';
import './Card.scss';
import RatingStars from '../RatingStars/RatingStars';

// 2016-12-29T23:19:16.000Z
const parseUTCTime = (date) => {
  const d = new Date(Date.parse(date));

  return {
    day: d.getDate(),
    month: d.getMonth() + 1,
    year: d.getFullYear()
  }
};

const ReviewCard = ({ review }) => {
  const { day, month, year } = parseUTCTime(review.updated_at);

  return (
    <div className="reviews-card">
      <div className="reviews-card__head">
        <RatingStars rating={review.score} />
        <div className="reviews-card__label">{month}/{day}/{year}</div>
      </div>
      <div className="reviews-card__title">
        {review.title}
      </div>
      <div className="reviews-card__body">
        <a className="reviews-card__link" href="/link">
          <figure className="reviews-card__figure">
            <img className="reviews-card__img" src={image} alt="product-main" />
          </figure>
          <span>Product label</span>
        </a>
        <div>
          <p className="reviews-card__text">{review.content}</p>
          <span className="reviews-card__label">{review.name}</span>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.shape({
    updated_at: PropTypes.string,
    score: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }).isRequired
};

export default memo(ReviewCard);

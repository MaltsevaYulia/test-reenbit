import { formatDate } from 'helpers/formatDate';
import React from 'react';
import css from './TripItem.module.css';

const TripItem = ({ data, searhWeather }) => {
  const { id, url, city, start, end } = data;

  return (
    <li
      className={css.item}
      onClick={() => searhWeather({ city, start, end })}
      key={id}
    >
      <img
        alt={city}
        loading="lazy"
        src={url}
        width="150"
        height="150"
      />
      <div className={css.cardInfo}>
        <p className={css.city}>{city}</p>
        <p className={css.date}>
          <span>{formatDate(start)}</span>
          <span>-</span>
          <span>{formatDate(end)}</span>
        </p>
      </div>
    </li>
  );
};

export default TripItem;

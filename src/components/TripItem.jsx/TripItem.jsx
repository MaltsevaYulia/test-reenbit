import React from 'react';
import { fetchFromToWeather, fetchTodayWeather } from 'servises/weatherAPI';
import css from './TripItem.module.css';

const TripItem = () => {
  const fakeData = {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGKhMd8_qp-vSUMGcy6rvXsnHUKZatYCuS_ZCph4rHw&s',
    city: 'Larnaca',
    start: '2023-08-01',
    end: '2023-08-10',
  };
  const searhWeather = () => {
    const date1 = '2023-8-6';
    const date2 = '2023-8-10';
    fetchFromToWeather('London', date1, date2);
    fetchTodayWeather('Larnaca');
  };

  return (
    <li className={css.list} onClick={searhWeather}>
      <img
        alt={fakeData.city}
        loading="lazy"
        src={fakeData.url}
        width="150"
        height="150"
        // className={css.image}
        // src={imageError ? 'https://http.cat/407' : file}
        // onError={handleImageError}
      />
      <div className={css.cardInfo}>
      <p className={css.city}>{fakeData.city}</p>
      <p>
        <span>{fakeData.start}</span>
        <span>-</span>
        <span>{fakeData.end}</span>
      </p></div>
    </li>
  );
};

export default TripItem;

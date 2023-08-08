import React from 'react';
import css from '../WeekWeather.module.css';

const WeatherItem = ({ day, tempmax, tempmin, icon }) => {
  const iconPath = require(`../../../assets/wether-icons/${icon}.webp`);
  return (
    <li className={css.item}>
      <p className={css.day}>{day}</p>
      <img
        src={iconPath}
        alt={icon}
        width="50"
        height="50"
        className={css.img}
      />
      <div className={css.wrapper}>
        <span className={css.temp}>{Math.round(tempmax)}</span>
        <span className={css.slash}>/</span>
        <span className={css.temp}>{Math.round(tempmin)}</span>
      </div>
    </li>
  );
};

export default WeatherItem;

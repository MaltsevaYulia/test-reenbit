import Timer from 'components/Timer/Timer';
import React from 'react';
import { RiCelsiusFill } from 'react-icons/ri';
import css from './TodayWeather.module.css';

const TodayWeather = ({ dayOfWeek, city, temp, start, icon }) => {
  const iconPath = require(`../../assets/wether-icons/${icon}.webp`);
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h3 className={css.title}>{dayOfWeek}</h3>
        <div className={css.tempWrapper}>
          <img
            src={iconPath}
            alt={icon}
            width="100"
            height="50"
            className={css.img}
          />
          <p className={css.temp}>
            {Math.round(temp)}
            <RiCelsiusFill className={css.icon} color="#fff" size="24" />
          </p>
        </div>
        <p className={css.text}>{city}</p>
      </div>
      <Timer start={start} />
    </div>
  );
};

export default TodayWeather;

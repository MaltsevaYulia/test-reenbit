import Timer from 'components/Timer/Timer';
import React from 'react';
import { WiCelsius } from 'react-icons/wi';
import css from './TodayWeather.module.css';

const TodayWeather = ({ dayOfWeek, city, temp, start }) => {
  return (
    <div className={css.container}>
      <h3 className={css.text}>{dayOfWeek}</h3>
      <p className={css.text}>
        {temp}
        <WiCelsius color='#fff' size="24" />
      </p>
      <p className={css.text}>{city}</p>
      <Timer start={start} />
    </div>
  );
};

export default TodayWeather;

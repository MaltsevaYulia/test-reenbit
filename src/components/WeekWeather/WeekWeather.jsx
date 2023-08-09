import { daysOfWeek } from 'constants/dayOfWeek';
import React from 'react';
import WeatherItem from './WeatherItem/WeatherItem';
import css from './WeekWeather.module.css';

const WeekWeather = ({ data }) => {
  
  return (
    <div className={css.container}>
      <h3 className={css.title}>Week</h3>
      <ul className={css.list}>
        {data.map(({ datetime, tempmax, tempmin, datetimeEpoch, icon }) => {
          const date = new Date(datetime);
          const day = daysOfWeek[date.getDay()];

          return (
            <WeatherItem
              key={datetimeEpoch}
              day={day}
              tempmax={tempmax}
              tempmin={tempmin}
              icon={icon}
              datetimeEpoch={datetimeEpoch}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default WeekWeather;

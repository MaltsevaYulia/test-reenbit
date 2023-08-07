import AddTripForm from 'components/AddTripForm/AddTripForm';
import { AddTripFormBtn } from 'components/Buttons/AddTripFormBtn';
import Modal from 'components/Modal/Modal';
import ScrollContainer from 'components/ScrollContainer/ScrollContainer';
import Search from 'components/Search/Search';
import TodayWeather from 'components/TodayWeather/TodayWeather';
import TripItem from 'components/TripItem.jsx/TripItem';
import { daysOfWeek } from 'constants/dayOfWeek';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrips } from 'redux/operations';
import { getTrips } from 'redux/selectors';
import { fetchFromToWeather, fetchTodayWeather } from 'servises/weatherAPI';
import css from './MainPage.module.css';

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  const [start, setStart] = useState('');
  

  const [isTripSelected, setIsTripSelected] = useState(false);

  const trips = useSelector(getTrips);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  const searhWeather = async ({ city, start, end }) => {
    // fetchFromToWeather(city, start, end);
    const todayWeather = await fetchTodayWeather(city);
    const { days } = todayWeather;
    console.log('🚀 ~ searhWeather ~ days:', days);
    const date = new Date(days[0].datetime);
    const dayOfWeek = daysOfWeek[date.getDay()];
    const temp = days[0].temp;
    setDayOfWeek(dayOfWeek);
    setCity(city);
    setTemp(temp);
    setStart(start);
    setIsTripSelected(true);
    console.log('🚀 ~ searhWeather ~ dayOfWeek:', dayOfWeek);
    console.log('🚀 ~ searhWeather ~ todayWeather:', todayWeather);
  };

  return (
    <main className={css.main}>
      <div>
        <h1>
          Weather <span>Forecast</span>
        </h1>
        <Search />
        <div className={css.wrapper}>
          <ScrollContainer>
            {trips.map(trip => (
              <TripItem key={trip.id} data={trip} searhWeather={searhWeather} />
            ))}
          </ScrollContainer>
          <AddTripFormBtn togleModalOpen={setIsModalOpen} />
        </div>
      </div>
      {isTripSelected && (
        <TodayWeather
          dayOfWeek={dayOfWeek}
          city={city}
          temp={temp}
          start={start}
        />
      )}
      {isModalOpen && (
        <Modal modalOpen={setIsModalOpen}>
          <AddTripForm togleModalOpen={setIsModalOpen} />
        </Modal>
      )}
    </main>
  );
};

export default MainPage;

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTrips } from 'redux/operations';

import AddTripForm from 'components/AddTripForm/AddTripForm';
import { AddTripFormBtn } from 'components/Buttons/AddTripFormBtn';
import Modal from 'components/Modal/Modal';
import ScrollContainer from 'components/ScrollContainer/ScrollContainer';
import Search from 'components/Search/Search';
import TodayWeather from 'components/TodayWeather/TodayWeather';
import TripList from 'components/TripList/TripList';
import WeekWeather from 'components/WeekWeather/WeekWeather';
import { daysOfWeek } from 'constants/dayOfWeek';

import { fetchFromToWeather, fetchTodayWeather } from 'servises/weatherAPI';
import css from './MainPage.module.css';

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [dayOfWeek, setDayOfWeek] = useState('');
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  const [start, setStart] = useState('');
  const [icon, setIcon] = useState('');

  const [weather, setWeather] = useState([]);

  const [isTripSelected, setIsTripSelected] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  const searhWeather = async ({ city, start, end }) => {
    const todayWeather = await fetchTodayWeather(city);
    const { days } = todayWeather;

    const date = new Date(days[0].datetime);
    const dayOfWeek = daysOfWeek[date.getDay()];
    const temp = days[0].temp;
    const icon = days[0].icon;

    setDayOfWeek(dayOfWeek);
    setCity(city);
    setTemp(temp);
    setStart(start);
    setIsTripSelected(true);
    setIcon(icon);

    const fromToWeather = await fetchFromToWeather(city, start, end);
    setWeather(fromToWeather);
    console.log('🚀 ~ searhWeather ~ fromToWeather:', fromToWeather);
  };

  return (
    <>
      <main className={css.main}>
        <div className={css.container}>
          <Search />
          <div className={css.wrapper}>
            <ScrollContainer>
              <TripList searhWeather={searhWeather} />
            </ScrollContainer>
            <AddTripFormBtn togleModalOpen={setIsModalOpen} />
          </div>
          {isTripSelected && <WeekWeather data={weather} />}
        </div>
        {isTripSelected && (
          <TodayWeather
            dayOfWeek={dayOfWeek}
            city={city}
            temp={temp}
            start={start}
            icon={icon}
          />
        )}

        {isModalOpen && (
          <Modal modalOpen={setIsModalOpen}>
            <AddTripForm togleModalOpen={setIsModalOpen} />
          </Modal>
        )}
      </main>
    </>
  );
};

export default MainPage;

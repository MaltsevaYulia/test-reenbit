import TripItem from 'components/TripItem.jsx/TripItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { parseISO } from 'date-fns';
import { getFilterValue, getTrips } from 'redux/selectors';

const TripList = ({ searhWeather }) => {
    const trips = useSelector(getTrips);
    const filter = useSelector(getFilterValue);

    const normalizedFilter = filter?.toLocaleLowerCase();
   
    const visibleContacts = trips.filter(trip =>
      trip.city.toLowerCase().includes(normalizedFilter)
    );
    visibleContacts.sort((a, b) => parseISO(a.start) - parseISO(b.start));

  return (
    <>
      {visibleContacts.map(trip => (
        <TripItem key={trip.id} data={trip} searhWeather={searhWeather} />
      ))}
    </>
  );
};

export default TripList;
